import { ISidebarItem } from "@/interface";
import Link from "next/link";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface SidebarProps extends ISidebarItem {}

const SidebarItem: FC<SidebarProps> = ({ href, active, icon: Icon, label }) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`,
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <span className="truncate w-full">{label}</span>
    </Link>
  );
};

export default SidebarItem;
