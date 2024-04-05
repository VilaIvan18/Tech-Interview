import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: unset;
  border: none;
  padding: 12px;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: aliceblue;
  }
`;
