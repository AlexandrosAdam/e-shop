import { Grid } from "@epignosis_llc/gnosis";
import axios from "axios";
import React, { FC } from "react";
import { useQuery } from "react-query";
import Item from "../components/Item/Item";
import { CartItemType } from "../types/Product";

const getProducts = async (): Promise<CartItemType[]> => {
  const res = axios.get("https://fakestoreapi.com/products");

  return (await res).data;
};

const handleAddToCart = (clickedItem: CartItemType) => null;

const Products: FC = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<CartItemType[]>("products", getProducts);

  console.log(products);

  return (
    <>
      <Grid templateColumns={4}>
        {products?.map((product) => (
          <Item item={product} handleAddToCart={handleAddToCart} />
        ))}
      </Grid>
    </>
  );
};

export default Products;
