import { CartItemType } from "../types/cartItemsType";

// utils/localStorage.ts
export const saveEachItemToLocalStorage = (eachItem: CartItemType) => {
    try {
      const serializedItem = JSON.stringify(eachItem);
      localStorage.setItem('eachItem', serializedItem);
    } catch (e) {
      console.error('Error saving eachItem to local storage', e);
    }
  };
  
  export const loadEachItemFromLocalStorage = () => {
    try {
      const serializedItem = localStorage.getItem('eachItem');
      if (serializedItem === null) return null;
      return JSON.parse(serializedItem);
    } catch (e) {
      console.error('Error loading eachItem from local storage', e);
      return null;
    }
  };
  