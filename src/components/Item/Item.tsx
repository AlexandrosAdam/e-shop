/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Button, Heading, Text } from "@epignosis_llc/gnosis";
import React, { FC } from "react";
import { CartItemType } from "../../types/Product";
import { itemContainer } from "./styles";

type ItemProps = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: FC<ItemProps> = ({ item, handleAddToCart }) => {
  return (
    <div css={itemContainer}>
      <img src={item.image} alt={item.title} />
      <div className="item-description">
        <Heading as="h3">{item.title}</Heading>
        <Text fontSize="md">{item.description}</Text>
        <Heading as="h3">{item.price}$</Heading>
      </div>
      <Button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>
        Add to cart
      </Button>
    </div>
  );
};

export default Item;
