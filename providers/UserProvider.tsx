"use client";

import { MyUserContextProvider } from "@/hooks/useUser";
import { FC, ReactNode } from "react";

const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
