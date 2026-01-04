// function to fetch Product List details

import axiosInstance from "../app/config/axiosInstance";
import URLs from "../utils/appURLs";
import type { fetchProductListRequest } from "./types/productListTypes";

export const fetchProductList = async (data: fetchProductListRequest) => {
  try {
    const response = await axiosInstance({
      method: "POST",
      url: `${URLs.PRODUCT_LIST}`,
      data,
    });

    return response;
  } catch (err) {
    return err;
  }
};
