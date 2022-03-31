import { css } from "@emotion/react";

export const container = () => css`
  display: flex;
  justify-content: space-between;
  background: #94b9d7;
  padding: 2rem;

  .home-products-nav {
    .home {
      margin: 0 1rem;
    }
  }
`;

export const footerContainer = () => css`
  bottom: 0;
  position: fixed;
  background-color: grey;
  width: 100%;
  text-align: center;
  padding: 0.5rem;
`;
