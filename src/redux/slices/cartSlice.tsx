import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { items } from "../../data";
import { CartItemType } from "../../types/cartItemsType";
import { producApiSlice } from "./productApiSlice";
import { loadEachItemFromLocalStorage } from "../../utils/localstorage";
type initialStateType = {
  product: CartItemType[];
  eachItem: CartItemType | null;
  cartItems: CartItemType[];
  // productTrackingNumber: number;
};
const initialState: initialStateType = {
  product: [],
  // eachItem: loadEachItemFromLocalStorage(),
  eachItem: null,
  cartItems: [],
  // productTrackingNumber: 1,
};

export const selectCartTotal = createSelector(
  (state: initialStateType) => state.cartItems,
  (cartItems) =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
);

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

      state.eachItem = action.payload;
      // if (selectedItem) {
      //   state.eachItem = {
      //     ...selectedItem,
      //     productColor: selectedItem.productColor?.map((a) => {
      //       return {
      //         ...a,
      //         isSelected: a.id === selectedItem.trackingNum,
      //       };
      //     }),
      //   };
      // }
    },

    onNextProductColor: (state, action: PayloadAction<{ subId: string }>) => {
      if (state.eachItem) {
        const currentIndex = state.eachItem.trackingNum;
        const maxIndex = state.eachItem.subCartItem.length;

        const newTrackingNum = currentIndex < maxIndex ? currentIndex + 1 : 1;

        state.eachItem.trackingNum = newTrackingNum;
        state.eachItem.subCartItem = state.eachItem.subCartItem.map((sub) => ({
          ...sub,
          isSelected: sub.id === state.eachItem?.trackingNum ? true : false,
        }));
        state.eachItem.productColor = state.eachItem.productColor?.map(
          (pro) => ({
            ...pro,
            isSelected: pro.id === state.eachItem?.trackingNum,
          })
        );

        state.eachItem.img =
          state.eachItem.subCartItem.find((sub) => sub.isSelected)?.uri || "";
        state.product = state.product.map((item) =>
          item.id === state.eachItem?.id
            ? {
                ...item,
                trackingNum: newTrackingNum,
                subCartItem: state.eachItem!.subCartItem,
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

        state.eachItem.trackingNum = newTrackingNum;
        state.eachItem.subCartItem = state.eachItem.subCartItem.map((sub) => ({
          ...sub,
          isSelected: sub.id === newTrackingNum,
        }));

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
      action: PayloadAction<{ id: string; subId: number }>
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
        state.eachItem.productColor = selectedProduct.productColor?.map((a) => {
          return { ...a, isSelected: a.id === state.eachItem?.trackingNum };
        });
      }
    },

    changeColorButton: (
      state,
      action: PayloadAction<{ id: string; proColId: number }>
    ) => {
      const { id, proColId } = action.payload;
      const selectedProduct = state.product.find((a) => a.id === id);
      const selectedSubItem = selectedProduct?.subCartItem.find(
        (a) => a.id === proColId
      );
      if (state.eachItem && state.eachItem.productColor) {
        state.eachItem = {
          ...state.eachItem,
          trackingNum: proColId,
          img: selectedSubItem ? selectedSubItem.uri : "",
          subCartItem: state.eachItem.subCartItem.map((a) => ({
            ...a,
            isSelected: a.id === proColId,
          })),
          productColor: state.eachItem!.productColor.map((a) => ({
            ...a,
            isSelected: selectedSubItem?.id === a.id,
          })),
        };
      }
    },

    changeSizeColorButton: (
      state,
      action: PayloadAction<{ id: string; proColId: number }>
    ) => {
      const { id, proColId } = action.payload;
      const selectedProduct = state.product.find((a) => a.id === id);
      if (state.eachItem && state.eachItem.productSize) {
        state.eachItem = {
          ...state.eachItem,
          productSize: state.eachItem!.productSize.map((a) => ({
            ...a,
            isSelected: proColId === a.id,
          })),
        };
      }
    },

    addItemToCart: (
      state: initialStateType,
      action: PayloadAction<CartItemType>
    ) => {
      const {
        id,

        subCartItem,

        productSize,
      } = action.payload;

      const selectedColor =
        subCartItem && subCartItem.find((item) => item.isSelected)?.color;
      const selectedSize =
        productSize && productSize.find((size) => size.isSelected)?.size;

      const cartItemId = `${id}-${selectedColor}-${selectedSize}`;

      const existingItem = state.cartItems.find(
        (item) => item.id === cartItemId
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          id: cartItemId,
          quantity: 1,
        });
      }
    },

    incrementCartItemQuantity: (
      state,
      action: PayloadAction<{ cartItemId: string }>
    ) => {
      const { cartItemId } = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.id === cartItemId
      );

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decrementCartItemQuantity: (
      state,
      action: PayloadAction<{ cartItemId: string }>
    ) => {
      const { cartItemId } = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.id === cartItemId
      );

      if (existingItem) {
        existingItem.quantity -= 1;
      }

      if (existingItem?.quantity! <= 0) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== cartItemId
        );
      }
    },

    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
  extraReducers: (builder) => {
    // Handle the fetched products and update the `product` state
    builder.addMatcher(
      producApiSlice.endpoints.getAllProduct.matchFulfilled,
      (state, action: PayloadAction<CartItemType[]>) => {
        state.product = action.payload;
      }
    );
  },
});

export const {
  onClickOnAnItem,
  onNextProductColor,
  onClickOnImage,
  addItemToCart,
  onPrevProductColor,
  changeColorButton,
  changeSizeColorButton,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
  removeItemFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
