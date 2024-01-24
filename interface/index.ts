import { IconType } from "react-icons";

export interface ISidebarItem {
  icon: IconType;
  label: string;
  active: boolean;
  href: string;
}
