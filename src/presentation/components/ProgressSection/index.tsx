import { useMemo, type FC } from "react";
// hooks
import { useTheme } from "@emotion/react";
// components
import { ProgressCard } from "../ProgressCard";
// types
import type { ProgressSectionProps } from "./types";
// styles
import * as Styled from "./styled";

const PROGRESS_CARDS = [
  {
    title: "Verification",
    subtitle: "You verified your account",
    isCompleted: true,
  },
  {
    title: "Profile picture",
    subtitle: "You added your profile picture",
    isCompleted: true,
  },
  { title: "Parents", subtitle: "You added the parents", isCompleted: true },
  { title: "Litter", subtitle: "Your created the litter", isCompleted: true },
];

export const ProgressSection: FC<ProgressSectionProps> = ({
  globalProgress,
}) => {
  const theme = useTheme();

  const progressColor = useMemo(() => {
    if (globalProgress === 100) {
      return theme.color.green.default;
    }

    if (globalProgress > 69) {
      return theme.color.yellow.default;
    }

    return theme.color.red.default;
  }, [globalProgress, theme.color]);

  const progressBar = useMemo(() => {
    const progressBars = [];

    for (let i = 0; i < 5; i++) {
      const completed = i * 20 < globalProgress;

      progressBars.push(
        <Styled.ProgressBarItem key={i} isCompleted={completed} />,
      );
    }

    return (
      <Styled.ProgressBarWrapper>{progressBars}</Styled.ProgressBarWrapper>
    );
  }, [globalProgress]);

  return (
    <section>
      <Styled.TopWrapper>
        <div>
          <Styled.AccentText>
            You successfully complete your profile at Tipaw
          </Styled.AccentText>
          <span className="subtitle">
            {`Now you can use Tipaw for ${globalProgress}% 🎉`}
          </span>
        </div>
        <div>
          <Styled.Progress>
            <Styled.BoldText>Profile completed</Styled.BoldText>
            <Styled.ProgressValue color={progressColor}>
              {globalProgress}%
            </Styled.ProgressValue>
          </Styled.Progress>
          {progressBar}
        </div>
      </Styled.TopWrapper>
      <Styled.BottomWrapper>
        {PROGRESS_CARDS.map((el) => (
          <ProgressCard {...el} key={el.title} />
        ))}
      </Styled.BottomWrapper>
    </section>
  );
};
