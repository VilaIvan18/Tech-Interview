import styled from "@emotion/styled";

export const AppBar = styled.header`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  padding: 12px 40px 12px 25px;
  border-bottom: 1px solid ${(props) => props.theme.color.divider};
  width: 100%;
  background-color: ${({ theme }) => theme.color.background.paper};
`;

export const Logo = styled.a`
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.color.text.default};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    column-gap: 4px;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  > p {
    color: ${({ theme }) => theme.color.text.secondary};
  }
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;

export const Arrow = styled("img", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;
