export type SubCartItem = {
  id: number;
  uri: string;
  isSelected: boolean;
};

export type ProductColorType= { color: string, id: number, isSelected: boolean }

export type CartItemType = {
  name: string;
  price: number;
  img: string;
  id: number;
  productColor:ProductColorType[],
  productSize:string[],
  subCartItem: SubCartItem[];
  quantity:number,
  trackingNum: number;
};
