import styled from "@emotion/styled";

export const LayoutContent = styled.main`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 72px;
  background-color: ${({ theme }) => theme.color.background.default};
`;
