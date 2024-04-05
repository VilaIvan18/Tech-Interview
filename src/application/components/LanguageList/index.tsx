import { useCallback, type FC } from "react";
// types
import type { AccountLanguage } from "../../types/language";
import type { LanguageListProps } from "./types";
// styles
import * as Styled from "./styled";

export const LanguageList: FC<LanguageListProps> = ({
  selectedLanguage,
  onClick,
}) => {
  const handleClick = useCallback(
    (lang: AccountLanguage) => () => onClick(lang),
    [onClick],
  );

  const renderItem = useCallback(
    (id: AccountLanguage, title: string) => (
      <Styled.Item
        isSelected={selectedLanguage === id}
        onClick={handleClick(id)}
        tabIndex={0}
      >
        {title}
      </Styled.Item>
    ),
    [handleClick, selectedLanguage],
  );

  return (
    <>
      <Styled.Wrapper>
        {renderItem("fr", "Fr")}
        <Styled.Dot />
        {renderItem("nl", "Nl")}
      </Styled.Wrapper>
    </>
  );
};
