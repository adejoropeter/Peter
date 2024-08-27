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
        color: "Black",
        isSelected: true,
      },
      {
        id: 2,
        uri: "/assets/t-shirt-circles-blue.avif",
        color: "Blue",
        isSelected: false,
      },
      {
        id: 3,
        color: "White",
        uri: "/assets/t-shirt-white-2.avif",
        isSelected: false,
      },
    ],
    trackingNum: 1,
  },
  {
    name: "Acme Mug",
    price: 12,
    quantity: 0,
    img: "/assets/mug-1.avif",
    id: "third",
    trackingNum: 1,

    subCartItem: [
      {
        id: 1,
        uri: "/assets/mug-1.avif",

        isSelected: true,
      },
      {
        id: 2,
        uri: "/assets/mug-2.avif",
        isSelected: false,
      },
    ],
  },
  {
    name: "Acme Cup",
    price: 25,
    img: "/assets/t-shirt-color-black-1.avif",
    id: "fourth",
    productColor: [
      { color: "Black", id: 1, isSelected: false },
      { color: "Gray", id: 2, isSelected: false },
      { color: "Pink", id: 3, isSelected: false },
      { color: "White", id: 4, isSelected: false },
      { color: "Blue", id: 5, isSelected: false },
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
        uri: "/assets/t-shirt-color-black-1.avif",
        color: "Black",
        isSelected: true,
      },
      {
        id: 2,
        uri: "/assets/t-shirt-color-gray-3.avif",
        color: "Gray",
        isSelected: false,
      },
      {
        id: 3,
        uri: "/assets/t-shirt-color-pink-4.avif",
        color: "Pink",
        isSelected: false,
      },
      {
        id: 4,
        uri: "/assets/t-shirt-color-white-5.avif",
        color: "White",
        isSelected: false,
      },
      {
        id: 5,
        uri: "/assets/t-shirt-color-blue-2.avif",
        color: "Blue",
        isSelected: false,
      },
    ],
    quantity: 0,

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
        color: "Black",
        isSelected: true,
      },
      {
        id: 2,
        uri: "/assets/bag-1-light.avif",
        color: "White",
        isSelected: false,
      },
    ],
    quantity: 0,

    trackingNum: 1,
  },
];
