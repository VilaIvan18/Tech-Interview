// types
import type { FC } from "react";
import type { IconButtonProps } from "./types";
// styles
import * as Styled from "./styled";

export const IconButton: FC<IconButtonProps> = ({ children, onClick }) => (
  <Styled.Button onClick={onClick}>{children}</Styled.Button>
);
