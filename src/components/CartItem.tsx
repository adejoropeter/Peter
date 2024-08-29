import { CartItemType } from "../types/cartItemsType";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onClickOnAnItem } from "../redux/slices/cartSlice";
const CartItem = ({
  product,
  index,
}: {
  product: CartItemType;
  index: number;
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    navigate(`/product/${product.name}`);
    dispatch(onClickOnAnItem(product));
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`relative overflow-hidden border h-full hover:[&>.first]:scale-105 hover:border-[#2563EB] rounded-xl cursor-pointer ${
          index === 0
            ? "col-span-3 h- sm:col-span-2 row-span-1 sm:row-span-2"
            : "col-span-3 row-span-1 sm:col-span-1"
        }`}>
        <div className="flex first justify-center items-center h-full transition-all">
          <img
            src={product.img}
            alt={product.name}
            className={`${
              index === 0 ? "sm:w-[450px]" : "sm:w-52"
            } h- object-cover`}
          />
        </div>
        <div
          className={`
                ${index === 0 ? "sm:top-7" : "sm:bottom-7"} 
              absolute "bg-gradient-to-r from-white border bottom-7   backdrop-blur-sm  to-[#CACACA] bg-transparent flex  px-1 py-1 justify-center items-center h-fit w-fit  left-7  text-md p gap-3 rounded-full font-semibold text-black`}>
          <h1 className="text-sm">{product.name}</h1>
          <Button
            variant="default"
            className="rounded-full hover:text-black hover:bg-white h-fit w-fit p-2 bg-[#2562E9] text-white">
            ${product.price.toFixed(2)} USD
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
