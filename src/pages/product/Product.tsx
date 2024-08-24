import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Separator } from "@radix-ui/react-select";
import { Button } from "../../components/ui/button";
import { MoveLeft, MoveRight, Plus } from "lucide-react";
import {
  addItemToCart,
  changeColorButton,
  changeSizeColorButton,
  onClickOnImage,
  onNextProductColor,
  onPrevProductColor,
} from "../../redux/slices/cartSlice";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { sub } from "date-fns";
import { toggleDrawer } from "../../redux/slices/cartDrawerSlice";
import { ProductSizeType } from "../../types/cartItemsType";

const Product = () => {
  const eachItem = useSelector((state: RootState) => state.product.eachItem);
  const trackingNumber = useSelector(
    (state: RootState) => state.product.eachItem?.trackingNum
  );
  const dispatch = useDispatch();
  const handleNext = (id: number) => {
    dispatch(onNextProductColor({ subId: id }));
  };
  const handlePrev = () => {
    dispatch(onPrevProductColor());
  };
  const { name } = useParams<{ name: string }>(); // Get product name from URL
  const [searchParams, setSearchParams] = useSearchParams(); // Handle query parameters
  const cart = useSelector((state: RootState) => state.product.cartItems);
  const allItems = useSelector((state: RootState) => state.product.product);
  const pro = allItems.find((a) => {
    return a.id === eachItem?.id;
  });
  const updatedParams = new URLSearchParams(searchParams.toString());
  // Function to handle size change and update the URL
  const handleSizeChange = (newSize:ProductSizeType) => {
    // Set the new size parameter while keeping others intact
    updatedParams.set("size", newSize.size);
    // Update the search params without overwriting other params
    setSearchParams(updatedParams);
    dispatch(changeSizeColorButton({id:eachItem!.id,proColId:newSize?.id}))
  };

  const handleImageChange = (image: string) => {
    setSearchParams({ image: image });
  };

  const handleAddToCart = () => {
    dispatch(addItemToCart({ data: eachItem! }));
    dispatch(toggleDrawer());
    console.log(cart);
    console.log(eachItem);
  };
  const selectedItem = eachItem?.subCartItem.find((a) => a.isSelected);

  useEffect(() => {
    if (eachItem) {
      if (selectedItem) {
        updatedParams.set("image", selectedItem.id.toString());
        setSearchParams(updatedParams);
      }
    }
  }, [eachItem, setSearchParams]);
  return (
    <div className="bg-white pt-8 mx-4 my-4 h-fit overflow-hidden border px-6 rounded-[10px]  gap-4 grid grid-cols-3">
      <div className="w-full col-span-3  sm:col-span-2 h-full  ">
        <div className="h-full w-full  flex flex-col">
          <div className="relative h-full w-full  flex flex-col justify-start items-center">
            <div className="w-full h-[70%] flex justify-center">
              <img
                src={eachItem?.img}
                alt=""
                className="w-[70%]  object-cover"
              />
            </div>
            <div className="absolute  flex justify-evenly cursor-pointer items-center top-[50%] left-[50%] -translate-x-[50%] w-48 h-12 py-3 rounded-full bg-[#EEEDEA]">
              <MoveLeft
                onClick={handlePrev}
                className="text-[#525151] hover:scale-x-125  hover:text-black transition-all"
              />
              <div className="h-full  border border-[#525151] text-black"></div>
              <MoveRight
                onClick={() => handleNext(eachItem?.id!)}
                className="text-[#525151] hover:scale-x-125  hover:text-black transition-all"
              />
            </div>
            <div className="w-full h-[30%]  p-4 gap-3 overflow-auto flex justify-center">
              {eachItem?.subCartItem.map((sub, index) => {
                return (
                  <div
                    onClick={() => {
                      dispatch(
                        onClickOnImage({ id: eachItem.id, subId: sub.id })
                      );
                      updatedParams.set(
                        "image",
                        eachItem.trackingNum.toString()
                      );
                      setSearchParams(updatedParams);
                    }}
                    className={`${
                      sub.isSelected ? "border-2 border-[#2562E9]" : ""
                    } hover:border-[#2562E9] cursor-pointer rounded-[10px] border w-[100px] h-[100px]`}>
                    <img src={sub.uri} alt="" className="object-cover " />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 sm:col-span-1 flex flex-col gap-2">
        <div className="flex flex-col gap-3">
          <h2 className="text-black font-bold text-[2.8rem] leading-tight">
            {eachItem?.name}
          </h2>
          <div className="bg-[#2562E9] w-fit h-fit rounded-full p-2 flex justify-center items-center font-medium">
            $20.00 USD
          </div>
        </div>
        <Separator className="border-gray-300 my-4" />

        <div className="flex flex-col gap-3">
          <h2 className="text-black font-semibold">COLOR</h2>
          <div className="flex flex-wrap gap-2">
            {eachItem?.productColor.map((col) => {
              return (
                <button
                  onClick={() => {
                    dispatch(
                      changeColorButton({ id: eachItem.id, proColId: col.id })
                    );
                  }}
                  className={`${
                    col.isSelected ? "border-2 border-[#2562E9]" : ""
                  } bg-[#B0B0B0] text-sm  flex justify-center items-center font-semibold  hover:border-[#2562E9]  rounded-full px-2 py-1 outline-none`}>
                  {col?.color}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-black font-semibold">SIZE</h2>
          <div className="flex flex-wrap gap-2">
            {eachItem?.productSize.map((size) => {
              return (
                <button
                  onClick={() =>{
                    updatedParams.set("size", size.size);
                    // Update the search params without overwriting other params
                    setSearchParams(updatedParams);
                    dispatch(changeSizeColorButton({id:eachItem!.id,proColId:size.id}))
                  }}
                  className={`${
                    size.isSelected  ? "border-2 border-[#2562E9]" : ""
                  } bg-[#B0B0B0] hover:ring-3 text-sm font-semibold  hover:border-[#2562E9]  border-[0.1rem] rounded-full px-5 py-2 transition-all`}>
                  {size.size}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <p className="te">
            60% combed ringspun cotton/40% polyester jersey tee.
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-[#2562E9] text-sm font-semibold h-fit p-3  w-full flex border-2 rounded-full px-5 transition-all">
            <Plus className="flex-" />
            <b className="flex-1">Add To Cart</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
