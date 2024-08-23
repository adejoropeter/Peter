import React from "react";
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

const Header = () => {
  const isDesktop = useMediaQuery("(min-width:758px)");
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.product.cartItems);
  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent any other clicks from interfering
    dispatch(closeDrawer());
  };

  return (
    <header className="bg- px-4 py-4 w-full h-[10%]  flex items-center justify-between">
      {!isDesktop ? (
        <Drawer>
          <div className="">
            <DrawerTrigger className="bg-[#FAFAFA] border-[1px] rounded-[8px] border-[#E5E5E5] p-[13px]">
              <MenuIcon color="black" size="18px" />
            </DrawerTrigger>
            <DrawerContent>Hello</DrawerContent>
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
        <div className="flex  items-center gap-3 w-fit">
          <div className="bg-[#FAFAFA] w-10 h-10 flex justify-center items-center border-[1px] rounded-[12px] border-[#E5E5E5] p-[2px]">
            <img
              className="w-6 object-cover"
              src="/assets/sticker.avif"
              alt=""
            />
          </div>
          <h1 className="text-black font-semibold text-[10px] sm:text-sm">
            ACME STORE
          </h1>
        </div>
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

      <Drawer direction="right" open={isOpen!}>
        <div>
          <DrawerTrigger
            onClick={() => dispatch(toggleDrawer())}
            className="bg-[#FAFAFA] border-[1px] rounded-[8px] border-[#E5E5E5] p-[13px]">
            <ShoppingCart color="black" size="18px" />
          </DrawerTrigger>

          <DrawerContent className="fixed top-0 right-0 h-full w-full max-w-[400px] z-50 ">
            <div className="text-black p-5 h-full">
              <div className="flex justify-between w-full ">
                <h2 className="text-2xl font-semibold">My Cart</h2>
                <div
                  onClick={() => dispatch(toggleDrawer())}
                  className="border p-2 rounded-[10px] cursor-pointer">
                  <X />
                </div>
              </div>
              <div className="flex flex-col h-full w-full">
                <div className="h-[300px]   w-full flex flex-col gap-2 overflow-y-scroll">
                  {cartItems.map((cart) => {
                    return (
                      <div className="flex w-full justify-between">
                        <div className="w-[80px] h-fit border relative rounded-[10px]">
                          <img src={"/assets/t-shirt-1.avif"} alt="" />
                          <div className="absolute bg-[#737373] top-0 p-1 w-6 flex justify-center items-center h-6 rounded-full">
                            <X color="white" cursor="pointer" size="20px" />
                          </div>
                        </div>
                        <h4 className="text-lg leading-5">{"sksks"}</h4>
                        <div className="flex flex-col items-end gap-2">
                          <h3 className="text-lg">$1203 USD</h3>
                          <div className="flex justify-between items-center w-[100px] py-2 px-2 h-fit rounded-full border">
                            <Minus size="17px" className="cursor-pointer" />
                            <span>{cart.quantity}</span>
                            <Plus size="17px" className="cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="h-fit flex justify-between flex-col gap-2 text-black">
                  <div className="flex mb-2 justify-between w-full">
                    <h4>Taxes</h4>
                    <h4>$100.00 USD</h4>
                  </div>
                  <hr />
                  <div className="flex mb-2 justify-between w-full">
                    <h4>Shipping</h4>
                    <p>Calculated at checkout</p>
                  </div>
                  <div className="flex mb-2 justify-between w-full">
                    <h4>Total</h4>
                    <p>$200.00 USD</p>
                  </div>
                  <hr />
                  <button className="w-full hover:bg-[#3A72ED] text-white flex justify-center items-center h-10 bg-[#5b7bc0] rounded-full">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </DrawerContent>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
