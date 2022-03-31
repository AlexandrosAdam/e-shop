import { css, SerializedStyles } from "@emotion/react";
import { CustomTheme } from "./eshop-colors";

export default (theme: CustomTheme): SerializedStyles => css`
  html,
  body {
    /* Works on Chrome */
    *::-webkit-scrollbar {
      width: 0.75rem;
    }
  }
`;
