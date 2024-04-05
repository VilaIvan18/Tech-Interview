import { FC } from "react";
// types
import type { ProgressCardProps } from "./types";
// styles
import * as Styled from "./styled";

export const ProgressCard: FC<ProgressCardProps> = ({
  title,
  subtitle,
  isCompleted,
}) => (
  <Styled.CardWrapper>
    <Styled.CheckIcon isCompleted={isCompleted} />
    <Styled.PrimaryText>{title}</Styled.PrimaryText>
    <Styled.SecondaryText>{subtitle}</Styled.SecondaryText>
  </Styled.CardWrapper>
);
