import axios from "axios";
import React, { FC } from "react";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> => {
  const res = axios.get("https://fakestoreapi.com/products");

  return (await res).data;
};

const Products: FC = () => {
  return <div> Products page.. </div>;
};

export default Products;
