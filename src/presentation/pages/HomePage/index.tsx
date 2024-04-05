// components
import { ProgressSection } from "../../components";
import { AnnouncementsSection } from "../../components";
// types
import type { FC } from "react";
import type { HomePageProps } from "./types";
// styles
import * as Styled from "./styled";

export * from "./types";

export const HomePage: FC<HomePageProps> = ({ announcements, profile }) => (
  <Styled.PageWrapper>
    <ProgressSection globalProgress={profile.globalProgress} />
    <AnnouncementsSection announcements={announcements} />
  </Styled.PageWrapper>
);
