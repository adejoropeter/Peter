import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { items } from "../../data";
import { CartItemType } from "../../types/cartItemsType";
type initialStateType = {
  product: CartItemType[];
  eachItem: CartItemType | null;
  cartItems: CartItemType[];
  // productTrackingNumber: number;
};
const initialState: initialStateType = {
  product: items,
  eachItem: null,
  cartItems: [],
  // productTrackingNumber: 1,
};

const cartSlice = createSlice({
  name: "product ",
  initialState,
  reducers: {
    onClickOnAnItem: (
      state: initialStateType,
      action: PayloadAction<CartItemType>
    ) => {
      const selectedItem = state.product.find(
        (item) => item.id === action.payload.id
      );

      const selectedSubItem = selectedItem?.subCartItem.find((a) => {
        return a.isSelected;
      });

      if (selectedItem) {
        state.eachItem = {
          ...selectedItem,
          productColor: selectedItem.productColor.map((a) => {
            return { ...a, isSelected: selectedSubItem?.id === a.id };
          }),
        };
      }
    },

    onNextProductColor: (state, action: PayloadAction<{ subId: number }>) => {
      if (state.eachItem) {
        const currentIndex = state.eachItem.trackingNum;
        const maxIndex = state.eachItem.subCartItem.length;

        const newTrackingNum = currentIndex < maxIndex ? currentIndex + 1 : 1;

        state.eachItem.trackingNum = newTrackingNum;
        state.eachItem.subCartItem = state.eachItem.subCartItem.map((sub) => ({
          ...sub,
          isSelected: sub.id === state.eachItem?.trackingNum ? true : false,
        }));

        state.eachItem.img =
          state.eachItem.subCartItem.find((sub) => sub.isSelected)?.uri || "";
        state.product = state.product.map((item) =>
          item.id === state.eachItem?.id
            ? {
                ...item,
                trackingNum: newTrackingNum,
                subCartItem: state.eachItem!.subCartItem, // Update only the subCartItem
              }
            : item
        );
      }
    },

    onPrevProductColor: (state) => {
      if (state.eachItem) {
        const currentIndex = state.eachItem.trackingNum;
        const maxIndex = state.eachItem.subCartItem.length;

        const newTrackingNum = currentIndex > 1 ? currentIndex - 1 : maxIndex;

        // Update subCartItem and trackingNum
        state.eachItem.trackingNum = newTrackingNum;
        state.eachItem.subCartItem = state.eachItem.subCartItem.map((sub) => ({
          ...sub,
          isSelected: sub.id === newTrackingNum,
        }));

        // Update eachItem.img with the selected subCartItem image
        const selectedSubItem = state.eachItem.subCartItem.find(
          (sub) => sub.id === newTrackingNum
        );
        if (selectedSubItem) {
          state.eachItem.img = selectedSubItem.uri;
        }
      }
    },
    onClickOnImage: (
      state,
      action: PayloadAction<{ id: number; subId: number }>
    ) => {
      const { id, subId } = action.payload;
      const selectedProduct = state.product.find((item) => item.id === id);
      const selectedSubItem = selectedProduct?.subCartItem.find(
        (sub) => sub.id === subId
      );
      if (selectedProduct) {
        state.eachItem = {
          ...selectedProduct,
          trackingNum: subId,
          img: selectedSubItem ? selectedSubItem.uri : "",
          subCartItem: state.eachItem!.subCartItem.map((sub) => ({
            ...sub,
            isSelected: sub.id === subId,
          })),
        };
      }
    },

    changeColorButton: (
      state,
      action: PayloadAction<{ id: number; proColId: number }>
    ) => {
      const { id, proColId } = action.payload;
      const selectedProduct = state.product.find((a) => {
        return a.id === id;
      });
      const selectedSubItem = selectedProduct?.subCartItem.find((a) => {
        return a.id === proColId;
      });
      if (selectedProduct) {
        state.eachItem = {
          ...selectedProduct,
          trackingNum: proColId,
          img: selectedSubItem ? selectedSubItem.uri : "",
          subCartItem: selectedProduct.subCartItem.map((a) => {
            return { ...a, isSelected: a.id === proColId };
          }),
          productColor: selectedProduct!.productColor.map((a) => ({
            ...a,
            isSelected: selectedSubItem?.id === a.id,
          })),
        };
      }
    },
    addItemToCart: (
      state: initialStateType,
      action: PayloadAction<{
        data: CartItemType;
      }>
    ) => {
      const {
        id,
        img,
        name,
        price,
        productColor,
        productSize,
        subCartItem,
        quantity,
        trackingNum,
      } = action.payload.data;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.data.id
      );

      console.log(itemIndex);
      if (itemIndex >= 0) {
        // Item already in cart, increase quantity
        // state.cartItems[itemIndex].quantity += 1;
        state.cartItems = state.cartItems.map((a) => {
          return a.id === state.eachItem?.id
            ? { ...a, quantity: a.quantity + 1 }
            : a;
        });
        return;
      } else {
        // Add new item to cart
        // state.cartItems.push({ ...action.payload, quantity: 1 });
        state.cartItems = [
          ...state.cartItems,
          {
            id,
            img,
            name,
            price,
            productColor,
            productSize,
            subCartItem,
            trackingNum,
            quantity: 1,
          },
        ];
      }
    },
  },
});

export const {
  onClickOnAnItem,
  onNextProductColor,
  onClickOnImage,
  addItemToCart,
  onPrevProductColor,
  changeColorButton,
} = cartSlice.actions;
export default cartSlice.reducer;
