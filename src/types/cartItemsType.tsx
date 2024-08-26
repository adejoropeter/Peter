export type SubCartItem = {
  id: number;
  uri: string;
  isSelected: boolean;
  color?: string;
};

export type ProductColorType = {
  color: string;
  id: number;
  isSelected: boolean;
};
export type ProductSizeType = { size: string; id: number; isSelected: boolean };

export type CartItemType = {
  name: string;
  price: number;
  img: string;
  id: string ;
  productColor: ProductColorType[];
  productSize: ProductSizeType[];
  subCartItem: SubCartItem[];
  quantity: number;
  trackingNum: number;
};
