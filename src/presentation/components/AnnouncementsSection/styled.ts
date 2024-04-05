import styled from "@emotion/styled";

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  border: 1px solid ${({ theme }) => theme.color.divider};
  background-color: ${({ theme }) => theme.color.background.paper};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px;
  }
`;

export const AccentText = styled.span`
  color: ${({ theme }) => theme.color.blue.default};
  font-size: 18px;
  font-weight: 500;
`;

export const StatusDot = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.color.red.default};
  height: 10px;
  width: 10px;
  margin-left: 16px;
  border-radius: 50%;
`;

export const Announcement = styled.div`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.blue.default};
  overflow: hidden;

  > div {
    padding: 15px 24px;
  }
`;

export const AnnouncementHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.blue.default};
  color: ${({ theme }) => theme.color.background.paper};
  font-size: 16px;
  font-weight: 700;
`;

export const IconWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "isHidden",
})<{ isHidden: boolean }>`
  cursor: pointer;
  transition: transform 0.3s ease;

  svg {
    transform: ${({ isHidden }) =>
      isHidden ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

export const Content = styled("div", {
  shouldForwardProp: (prop) => prop !== "isHidden",
})<{ isHidden: boolean }>`
  display: ${({ isHidden }) => (isHidden ? "none" : "block")};
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const Icon = styled.img`
  transition: transform 0.3s ease;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  font-size: 7px;
  color: ${({ theme }) => theme.color.blue.default};
`;
