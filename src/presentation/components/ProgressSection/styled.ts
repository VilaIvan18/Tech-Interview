import styled from "@emotion/styled";

export const BlockWrapper = styled.div`
  padding: 40px;
  border: 1px solid ${({ theme }) => theme.color.divider};
  background-color: ${({ theme }) => theme.color.background.paper};
`;

export const TopWrapper = styled(BlockWrapper)`
  display: grid;
  grid-template-columns: 1fr 336px;
  border-bottom: none;
  column-gap: 8px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
  }

  .subtitle {
    font-size: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    row-gap: 16px;
  }
`;

export const BottomWrapper = styled(BlockWrapper)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProgressValue = styled.div<{ color: string }>`
  color: ${({ color }) => color};
`;

export const AccentText = styled.span`
  color: ${({ theme }) => theme.color.blue.default};
  font-size: 18px;
  font-weight: 500;
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const ProgressBarItem = styled.div<{ isCompleted: boolean }>`
  background-color: ${({ theme, isCompleted }) =>
    isCompleted ? theme.color.green.default : theme.color.divider};
  height: 8px;
  width: 100%;
  border-radius: 2px;
`;

export const BoldText = styled.span`
  font-size: 18px;
  font-weight: 500;
`;
