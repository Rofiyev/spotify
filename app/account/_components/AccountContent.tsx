"use client";

import { useEffect } from "react";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import Image from "next/image";

const AccountContent = () => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  useEffect(() => {
    if (!isLoading && !user) router.replace("/");

    console.log(user);
  }, [isLoading, user, router]);

  return (
    <>
      {user && (
        <div className="px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
            <Image
              src={user.user_metadata.picture}
              width={120}
              height={120}
              className="rounded-full cursor-pointer"
              alt={"User profile img"}
            />
          </div>
          <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full">
              <label
                htmlFor="full_name"
                className="mb-1 block text-xl font-medium text-white"
              >
                Full Name:
              </label>
              <Input
                className="w-full"
                disabled={true}
                defaultValue={user.user_metadata.full_name}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="mb-1 block text-xl font-medium text-white"
              >
                Email:
              </label>
              <Input
                className="w-full"
                disabled={true}
                defaultValue={user.user_metadata.email}
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AccountContent;
