export const items = [
  {
    name: "Acme Circles T-Shirt",
    price: 20,
    img: "/assets/t-shirt-1.avif",
    id: 1,
    productColor: [
      { color: "Black", id: 1, isSelected: false },
      { color: "Blue", id: 2, isSelected: false },
      { color: "White", id: 3, isSelected: false },
    ],
    quantity: 0,

    productSize: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    subCartItem: [
      {
        id: 1,
        uri: "/assets/t-shirt-1.avif",
        isSelected: true,
      },
      {
        id: 2,
        uri: "/assets/t-shirt-circles-blue.avif",
        isSelected: false,
      },
      {
        id: 3,
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
    id: 2,
    productColor: [
      { color: "Black", id: 1, isSelected: false },
      { color: "White", id: 2, isSelected: false },
    ],
    productSize: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    subCartItem: [
      {
        id: 1,
        uri: "/assets/bag-1-dark.avif",
        isSelected: true,
      },
      {
        id: 2,
        uri: "/assets/bag-1-light.avif",
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
    id: 3,
    trackingNum: 1,
    productColor: [
      { color: "Black", id: 1, isSelected: false },
      { color: "White", id: 2, isSelected: false },
    ],
    productSize: [
      "6 x 8 inch",
      "7 x 9 inch",
      "8 x 11 inch",
      "9 x 12 inch",
      "10 x 15 inch",
      "12 x 16 inch",
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
