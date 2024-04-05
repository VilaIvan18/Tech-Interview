// hooks
import { useGetProfile } from "../../pages/HomePageController/api/useGetProfile";
// components
import { AppBar } from "../../components";
// types
import type { FC } from "react";
import type { MainLayoutProps } from "./types";
// styles
import * as Styled from "./styled";

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const { profile } = useGetProfile();

  return (
    <>
      <AppBar profile={profile} />
      <Styled.LayoutContent>{children}</Styled.LayoutContent>
    </>
  );
};
