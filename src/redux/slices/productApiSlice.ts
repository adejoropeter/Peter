import { CartItemType } from "../../types/cartItemsType";
import { apiSlice } from "./apiSlice";
const PROD_URL = "http://localhost:3023";

export const producApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query<CartItemType[], void>({
      query: () => ({
        url: `${PROD_URL}/product`,
      }),
    }),
    getEachProduct: builder.query<CartItemType, string>({
      query: (id) => ({
        url: `${PROD_URL}/product/${id}`,
      }),
    }),
  }),
  overrideExisting: false,
});
export const useGetAllProductQuery: typeof producApiSlice.endpoints.getAllProduct.useQuery =
  producApiSlice.endpoints.getAllProduct.useQuery;
export const useGetEachProductQuery: typeof producApiSlice.endpoints.getEachProduct.useQuery =
  producApiSlice.endpoints.getEachProduct.useQuery;
