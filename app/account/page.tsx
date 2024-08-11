"use client";

import Header from "@/components/Header";
import AccountContent from "./_components/AccountContent";
import { BounceLoader } from "react-spinners";
import Box from "@/components/Box";
import { useUser } from "@/hooks/useUser";

const AccountPage = () => {
  const { isLoading } = useUser();

  return (
    <>
      {isLoading ? (
        <Box className="h-full flex items-center justify-center">
          <BounceLoader color="#22c55e" size={40} />
        </Box>
      ) : (
        <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
          <Header className="from-bg-neutral-900">
            <div className="mb-2 flex flex-col gap-y-6">
              <h1 className="text-white text-3xl font-medium">
                Account Settings
              </h1>
            </div>
          </Header>
          <AccountContent />
        </div>
      )}
    </>
  );
};

export default AccountPage;
