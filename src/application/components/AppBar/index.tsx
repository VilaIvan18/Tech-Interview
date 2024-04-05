import { useCallback, useState, type FC } from "react";
// components
import { BellIcon } from "../../assets/icons/Bell";
import { IconButton } from "../IconButton";
import { LanguageList } from "../LanguageList";
// types
import type { AppBarProps } from "./types";
import type { AccountLanguage } from "../../types/language";
// styles
import * as Styled from "./styled";

export const AppBar: FC<AppBarProps> = ({ profile }) => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<AccountLanguage>("fr");
  const [isOpenAccountMenu, setIsOpenAccountMenu] = useState(false);

  const handleToggleAccountMenu = useCallback(
    () => setIsOpenAccountMenu((prev) => !prev),
    [],
  );

  return (
    <Styled.AppBar>
      <Styled.Logo href="/">My Tipaw</Styled.Logo>
      <Styled.ButtonsWrapper>
        <LanguageList
          selectedLanguage={selectedLanguage}
          onClick={setSelectedLanguage}
        />
        <IconButton>
          <BellIcon />
        </IconButton>
        <Styled.ProfileWrapper>
          <Styled.ProfileImg
            src={profile.avatar}
            width="40px"
            height="40px"
            alt="some guy with a dog"
          />
          <p>{profile.name}</p>
          <IconButton
            onClick={handleToggleAccountMenu}
            aria-label="account menu"
          >
            <Styled.Arrow
              src="/icons/arrow.svg"
              alt="arrow icon"
              isOpen={isOpenAccountMenu}
            />
          </IconButton>
        </Styled.ProfileWrapper>
      </Styled.ButtonsWrapper>
    </Styled.AppBar>
  );
};
