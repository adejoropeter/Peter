import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
      if (state.eachItem) {
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
      if (state.eachItem) {
        state.eachItem = {
          ...state.eachItem,
          productSize: state.eachItem!.productSize.map((a) => ({
            ...a,
            isSelected: proColId === a.id,
          })),
        };
      }
    },

    // addItemToCart: (
    //   state: initialStateType,
    //   action: PayloadAction<CartItemType>
    // ) => {
    //   const {
    //     id,
    //     name,
    //     price,
    //     img,
    //     subCartItem,
    //     productColor,
    //     productSize,
    //     trackingNum,
    //   } = action.payload;

    //   const selectedColor = subCartItem.find((item) => item.isSelected)?.color;

    //   const existingItem = state.cartItems.find(
    //     (item) =>
    //       item.id === id &&
    //       item.subCartItem.some(
    //         (cartSubItem) =>
    //           cartSubItem.color === selectedColor && cartSubItem.isSelected
    //       )
    //   );

    //   if (existingItem) {
    //     existingItem.quantity += 1;
    //   } else {
    //     state.cartItems.push({
    //       id: state.cartItems.length + 1,
    //       img,
    //       name,
    //       price,
    //       productColor,
    //       productSize,
    //       subCartItem: state.eachItem?.subCartItem!,
    //       trackingNum,
    //       quantity: 1,
    //     });
    //   }
    // },
    // addItemToCart: (
    //   state: initialStateType,
    //   action: PayloadAction<CartItemType>
    // ) => {
    //   const {
    //     id,
    //     name,
    //     price,
    //     img,
    //     subCartItem,
    //     productColor,
    //     productSize,
    //     trackingNum,
    //   } = action.payload;
    
    //   // Extract the selected color from the subCartItem
    //   const selectedColor = subCartItem.find((item) => item.isSelected)?.color;
    
    //   // Check if an item with the same id and selected color already exists in the cart
    //   const existingItem = state.cartItems.find(
    //     (item) =>
    //       item.id === id &&
    //       item.subCartItem.some(
    //         (cartSubItem) =>
    //           cartSubItem.color === selectedColor && cartSubItem.isSelected
    //       )
    //   );
    
    //   if (existingItem) {
    //     // If the same item with the same color exists, increment the quantity
    //     existingItem.quantity += 1;
    //   } else {
    //     // If it doesn't exist, add it as a new item
    //     state.cartItems.push({
    //       id,
    //       img,
    //       name,
    //       price,
    //       productColor,
    //       productSize,
    //       subCartItem: state.eachItem?.subCartItem!, // Maintain the selected color and subCartItem structure
    //       trackingNum,
    //       quantity: 1,
    //     });
    //   }
    // },
    addItemToCart: (
      state: initialStateType,
      action: PayloadAction<CartItemType>
    ) => {
      const {
        id,
        name,
        price,
        img,
        subCartItem,
        productColor,
        productSize,
        trackingNum,
      } = action.payload;

      // Extract the selected color and size
      const selectedColor = subCartItem.find((item) => item.isSelected)?.color;
      const selectedSize = productSize.find((size) => size.isSelected)?.size;

      // Generate a unique cartItemId based on product properties
      const cartItemId = `${id}-${selectedColor}-${selectedSize}`;

      // Check if the exact item already exists in the cart
      const existingItem = state.cartItems.find(
        (item) => item.id.toString() === cartItemId
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          id:cartItemId, // Add the unique cartItemId
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
      )

      if (existingItem ) {
        existingItem.quantity -= 1;
      }
        // If quantity is less than or equal to 0, remove the item from the cart
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
