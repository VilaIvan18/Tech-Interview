// components
import { FaCheckCircle } from "react-icons/fa";
// utils
import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 23px;
  border: 1px solid ${({ theme }) => theme.color.divider};
  background-color: ${({ theme }) => theme.color.background.paper};
  min-height: 140px;
  border-radius: 4px;
  box-shadow: -1px 3px 16px 0 #959da530;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: center;
  }
`;

export const CheckIcon = styled(FaCheckCircle, {
  shouldForwardProp: (prop) => prop !== "isCompleted",
})<{ isCompleted: boolean }>`
  fill: ${({ theme, isCompleted }) =>
    isCompleted ? theme.color.green.default : theme.color.text.default};
  width: 23px;
  height: 23px;
`;

export const PrimaryText = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.text.default};
`;

export const SecondaryText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.text.secondary};
`;
