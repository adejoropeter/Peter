export const items = [
  {
    name: "Acme Circles T-Shirt",
    price: 20,
    img: "/assets/t-shirt-1.avif",
    id: "first",
    productColor: [
      { color: "Black", id: 1, isSelected: false },
      { color: "Blue", id: 2, isSelected: false },
      { color: "White", id: 3, isSelected: false },
    ],
    quantity: 0,

    productSize: [
      { size: "XS", id: 1, isSelected: false },
      { size: "S", id: 2, isSelected: false },
      { size: "M", id: 3, isSelected: false },
      { size: "L", id: 4, isSelected: false },
      { size: "XL", id: 5, isSelected: false },
      { size: "XXL", id: 6, isSelected: false },
      { size: "XXXL", id: 7, isSelected: false },
    ],
    subCartItem: [
      {
        id: 1,
        uri: "/assets/t-shirt-1.avif",
        color:"Black",
        isSelected: true,
      },
      {
        id: 2,
        uri: "/assets/t-shirt-circles-blue.avif",
        color:"Blue",
        isSelected: false,
      },
      {
        id: 3,
        color:"White",
        uri: "/assets/t-shirt-white-2.avif",
        isSelected: false,
      },
    ],
    trackingNum: 1,
  },
  {
    name: "Acme Cup",
    price: 15,
    img: "/assets/bag-1-dark.avif",
    id: "second",
    productColor: [
      { color: "Black", id: 1, isSelected: false },
      { color: "White", id: 2, isSelected: false },
    ],
    productSize: [
      { size: "XS", id: 1, isSelected: false },
      { size: "S", id: 2, isSelected: false },
      { size: "M", id: 3, isSelected: false },
      { size: "L", id: 4, isSelected: false },
      { size: "XL", id: 5, isSelected: false },
      { size: "XXL", id: 6, isSelected: false },
      { size: "XXXL", id: 7, isSelected: false },
    ],
    subCartItem: [
      {
        id: 1,
        uri: "/assets/bag-1-dark.avif",
        color:"Black",
        isSelected: true,
      },
      {
        id: 2,
        uri: "/assets/bag-1-light.avif",
        color:"White",
        isSelected: false,
      },
    ],
    quantity: 0,

    trackingNum: 1,
  },
  {
    name: "Acme Drawstring Bag",
    price: 12,
    quantity: 0,
    img: "/assets/mug-1.avif",
    id: "third",
    trackingNum: 1,
    productColor: [
      { color: "Black", id: 1, isSelected: false },
      { color: "White", id: 2, isSelected: false },
    ],
    productSize: [
      { size: "6 x 8 inch", id: 1, isSelected: false },
      { size: "7 x 9 inch", id: 2, isSelected: false },
      { size: "8 x 11 inch", id: 3, isSelected: false },
      { size: "9 x 12 inch", id: 4, isSelected: false },
      { size: "10 x 15 inch", id: 5, isSelected: false },
      { size: "12 x 16 inch", id: 6, isSelected: false },
    ],
    subCartItem: [
      {
        id: 1,
        uri: "/assets/t-shirt-1.avif",
        
        isSelected: true,
      },
      {
        id: 2,
        uri: "/assets/sub-bag2.jpg",
        isSelected: false,
      },
    ],
  },
];
