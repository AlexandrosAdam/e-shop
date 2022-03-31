/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { FC } from "react";
import { container } from "./styles";
import { Text } from "@epignosis_llc/gnosis";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <div css={container}>
      <div className="home-products-nav">
        <Text fontSize="lg" className="home">
          <Link to="/">Home</Link>
        </Text>
        <Text fontSize="lg">
          <Link to="/products">Products</Link>
        </Text>
      </div>
      <Text fontSize="lg">
        <Link to="/profile">Profile</Link>
      </Text>
    </div>
  );
};

export default Navbar;
