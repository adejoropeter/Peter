import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import {
  decrementCartItemQuantity,
  incrementCartItemQuantity,
  removeItemFromCart,
  selectCartTotal,
} from "../redux/slices/cartSlice";
import { toggleDrawer } from "../redux/slices/cartDrawerSlice";
import { DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Drawer } from "../components/ui/drawer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const CartDrawer = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.product.cartItems);
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen);
  const handleDecrementOfQuantity = (id: string) => {
    dispatch(decrementCartItemQuantity({ cartItemId: id }));
  };
  const cartTotal = useSelector((state: RootState) =>
    selectCartTotal(state.product)
  );
  return (
    <div>
      <Drawer direction="right" open={isOpen!}>
        <div>
          <DrawerTrigger
            onClick={() => dispatch(toggleDrawer())}
            className="bg-[#FAFAFA] border-[1px] rounded-[8px] border-[#E5E5E5] p-[13px] relative">
            <ShoppingCart color="black" size="18px" />
            <div className="w-5 h-5 rounded-[4px] flex justify-center items-center text-sm bg-blue-900 absolute -top-3 right-0">
              {cartItems.length}
            </div>
          </DrawerTrigger>

          <DrawerContent className="fixed top-0 right-0 h-full w-full max-w-[400px] z-50 ">
            <div className="text-black p-5 h-full flex flex-col">
              <div className="flex justify-between w-full ">
                <h2 className="text-2xl font-semibold">My Cart</h2>
                <div
                  onClick={() => dispatch(toggleDrawer())}
                  className="border p-2 rounded-[10px] cursor-pointer">
                  <X />
                </div>
              </div>
              <div className="h-[300px]   w-full flex-grow flex-col gap-2 overflow-y-scroll">
                {cartItems.map((cart) => {
                  return (
                    <div className="flex w-full justify-between">
                      <div className="w-[80px] h-fit border relative rounded-[10px]">
                        <img src={cart.img} alt="" />
                        <div
                          onClick={() => dispatch(removeItemFromCart(cart.id))}
                          className="absolute bg-[#737373] top-0 p-1 w-6 flex justify-center items-center h-6 rounded-full">
                          <X color="white" cursor="pointer" size="20px" />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-lg leading-5">{cart.name}</h4>
                        <h4>{`${
                          cart.productSize
                            ? `${
                                cart.subCartItem.find(
                                  (a: { isSelected: boolean }) => a.isSelected
                                )?.color
                              } / ${
                                cart.productSize?.find((a) => a.isSelected)
                                  ?.size
                              }`
                            : ""
                        }`}</h4>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <h3 className="text-lg">
                          ${cart.price.toFixed(2)} USD
                        </h3>
                        <div className="flex justify-between items-center w-[100px] py-2 px-2 h-fit rounded-full border">
                          <Minus
                            onClick={() => handleDecrementOfQuantity(cart.id)}
                            size="17px"
                            className="cursor-pointer"
                          />
                          <span>{cart.quantity}</span>
                          <Plus
                            onClick={() => {
                              dispatch(
                                incrementCartItemQuantity({
                                  cartItemId: cart.id,
                                })
                              );
                            }}
                            size="17px"
                            className="cursor-pointer"
                          />
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
                  <p>${cartTotal.toFixed(2)} USD </p>
                </div>
                <hr />
                <button className="w-full hover:bg-[#3A72ED] text-white flex justify-center items-center h-10 bg-[#5b7bc0] rounded-full">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </DrawerContent>
        </div>
      </Drawer>
    </div>
  );
};

export default CartDrawer;
