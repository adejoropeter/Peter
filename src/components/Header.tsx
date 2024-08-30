import React, { useEffect } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerTrigger,
} from "./ui/drawer";
import { MenuIcon, Minus, Plus, Search, ShoppingCart, X } from "lucide-react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { Form } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { closeDrawer, toggleDrawer } from "../redux/slices/cartDrawerSlice";
import { Separator } from "../components/ui/separator";
import { DialogTitle } from "./ui/dialog";
import {
  decrementCartItemQuantity,
  incrementCartItemQuantity,
  removeItemFromCart,
  selectCartTotal,
} from "../redux/slices/cartSlice";
import CartDrawer from "./CartDrawer";

const Header = () => {
  const isDesktop = useMediaQuery("(min-width:758px)");
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen);
  const eachItem = useSelector((state: RootState) => state.product.eachItem);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.product.cartItems);
  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent any other clicks from interfering
    dispatch(closeDrawer());
  };
  const handleDecrementOfQuantity = (id: string) => {
    dispatch(decrementCartItemQuantity({ cartItemId: id }));
  };

  const cartTotal = useSelector((state: RootState) =>
    selectCartTotal(state.product)
  );

  return (
    <header className="bg- px-4 py-4 w-full h-[10%]  flex items-center justify-between">
      {!isDesktop ? (
        <Drawer direction="left">
          <div className="">
            <DrawerTrigger className="bg-[#FAFAFA] border-[1px] rounded-[8px] border-[#E5E5E5] p-[13px]">
              <MenuIcon color="black" size="18px" />
            </DrawerTrigger>
            <DrawerContent className="">
              <div className="text-black  p5   gap-4 h-screen flex flex-col justify-center items-center ">
                <Link to="/" className="text-4xl text-black">
                  Home
                </Link>
                <Link to="" className="text-4xl text-black">
                  All
                </Link>
                <Link to="" className="text-4xl text-black">
                  Shirt
                </Link>
                <Link to="" className="text-4xl text-black">
                  Sneakers
                </Link>
              </div>
            </DrawerContent>
          </div>
        </Drawer>
      ) : (
        <div className="flex   items-center gap-5 md:mr-10">
          <Link to="/" className="flex  items-center gap-3">
            <div className="bg-[#FAFAFA] w-10 h-10 flex justify-center items-center border-[1px] rounded-[12px] border-[#E5E5E5] p-[2px]">
              <img
                className="w-6 object-cover"
                src="/assets/sticker.avif"
                alt=""
              />
            </div>
            <h1 className="text-black font-semibold text-sm hidden lg:block">
              PETER-BLACK STORE
            </h1>
          </Link>
          <div className="flex gap-5">
            <Link
              to="/search"
              className=" text-sm text-gray-500 hover:underline">
              All
            </Link>
            <Link
              className="text-sm text-gray-500 hover:underline"
              to="/product/">
              Shirts
            </Link>
            <Link
              className="text-sm text-gray-500 hover:underline"
              to="/product">
              Stickers
            </Link>
          </div>
        </div>
      )}

      {/* <div className="flex-1 flex justify-center">
    </div> */}
      {!isDesktop ? (
        <Link to="/" className="flex  items-center gap-3 w-fit">
          <div className="bg-[#FAFAFA] w-10 h-10 flex justify-center items-center border-[1px] rounded-[12px] border-[#E5E5E5] p-[2px]">
            <img
              className="w-6 object-cover"
              src="/assets/sticker.avif"
              alt=""
            />
          </div>
          <h1 className="text-black font-semibold text-[14px] sm:text-sm">
            ACME STORE
          </h1>
        </Link>
      ) : (
        <div className="bg-white text-gray-500 w-1/3 focus-within:ring-2 focus-within:ring-offset-4  items-center  h-[40px] flex  border-[1px] rounded-[8px] border-[#E5E5E5]">
          <form action="" className="flex w-full">
            <Input
              className="focus:ring-2 border-none text-md"
              placeholder="Search for products"
            />
            <Button>
              <Search color="black" size="18px" />
            </Button>
          </form>
        </div>
      )}

      <CartDrawer />
    </header>
  );
};

export default Header;
