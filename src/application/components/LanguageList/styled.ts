import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const Item = styled("p", {
  shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected: boolean }>`
  cursor: pointer;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.blue.default : theme.color.text.default};
  transition: color 0.3s ease;
  padding: 8px;
`;

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.blue.default};
`;
