import type { AccountLanguage } from "../../types/language";

export interface LanguageListProps {
  selectedLanguage: AccountLanguage;
  onClick: (lng: AccountLanguage) => void;
}
