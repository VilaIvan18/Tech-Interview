import { useCallback, useState, type FC } from "react";
// components
import { ArrowIcon } from "../../../application/assets/icons/Arrow";
// utils
import { parse, format } from "date-fns";
// types
import type { AnnouncementsSectionProps } from "./types";
// styles
import * as Styled from "./styled";

export const AnnouncementsSection: FC<AnnouncementsSectionProps> = ({
  announcements,
}) => {
  const [hiddenItemsIds, setHiddenItemsIds] = useState<string[]>();

  const formatDate = useCallback((dateString: string) => {
    const date = parse(dateString, "dd/MM/yyyy", new Date());

    return format(date, "dd MMMM");
  }, []);

  const handleClickHide = useCallback(
    (id: string) => () => {
      setHiddenItemsIds((prevIds) => {
        if (prevIds?.includes(id)) {
          return prevIds.filter((item) => item !== id);
        } else {
          return [...(prevIds ?? []), id];
        }
      });
    },
    [],
  );

  return (
    <Styled.SectionWrapper>
      <div>
        <Styled.AccentText>Announcements from Tipaw</Styled.AccentText>
        <Styled.StatusDot />
      </div>
      {announcements.map((el) => {
        const isHidden = !!hiddenItemsIds?.includes(el.id);

        return (
          <Styled.Announcement key={el.id}>
            <Styled.AnnouncementHeader>
              {el.title}
              <Styled.IconWrapper
                isHidden={isHidden}
                onClick={handleClickHide(el.id)}
                aria-label={isHidden ? "show content" : "hide content"}
                tabIndex={0}
              >
                <ArrowIcon />
              </Styled.IconWrapper>
            </Styled.AnnouncementHeader>
            <Styled.Content isHidden={isHidden}>
              <Styled.DateWrapper>
                <Styled.Icon src="/icons/calendar.svg" alt="calendar icon" />
                <span>{formatDate(el.date)}</span>
              </Styled.DateWrapper>
              <p>{el.content}</p>
            </Styled.Content>
          </Styled.Announcement>
        );
      })}
    </Styled.SectionWrapper>
  );
};
