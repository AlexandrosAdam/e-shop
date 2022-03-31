/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { FC } from "react";
import { footerContainer } from "./styles";

const Footer: FC = () => {
  return (
    <div css={footerContainer}>
      <p>Eshop - Alexander Adam</p>
    </div>
  );
};

export default Footer;
