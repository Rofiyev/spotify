"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { IoMdLogOut } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import useAuthModal from "@/hooks/useAuthModal";
import Button from "./Button";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import toast from "react-hot-toast";
import { AiOutlinePlus } from "react-icons/ai";
import useModalUpload from "@/hooks/useModalUpload";

const Header: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const router = useRouter();
  const uploadModal = useModalUpload();
  const { onOpen } = useAuthModal();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    //
    router.refresh();

    if (error) toast.error(error.message);
    else toast.success("Logged out!");
  };

  const onClick = () => {
    if (!user) onOpen();

    uploadModal.onOpen();
  };

  const handleRoute = (route: string) => router.push(route);

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-4`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            onClick={() => handleRoute("/")}
            className="bg-white rounded-full p-2 flex items-center justify-center hover:opacity-75 transition"
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button
            onClick={() => handleRoute("/search")}
            className="bg-white rounded-full p-2 flex items-center justify-center hover:opacity-75 transition"
          >
            <BiSearch className="text-black" size={20} />
          </button>
          {user && (
            <button
              onClick={onClick}
              className="bg-white rounded-full p-2 flex items-center justify-center hover:opacity-75 transition"
            >
              <AiOutlinePlus size={20} className="text-black" />
            </button>
          )}
        </div>
        <div className="flex justify-between items-center">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-1 text-white"
              >
                Logout <IoMdLogOut className="inline-block text-white" />
              </Button>
              <Image
                src={user.user_metadata.avatar_url}
                width={40}
                height={40}
                className="bg-white rounded-full"
                onClick={() => router.push("/account")}
                alt="profile"
              />
            </div>
          ) : (
            <>
              <div className="">
                <Button
                  onClick={onOpen}
                  className="bg-transparent text-neutral-300 font-medium"
                >
                  Sign Up
                </Button>
              </div>
              <div className="">
                <Button
                  onClick={onOpen}
                  className="bg-white text-neutral-900 px-6 py-2"
                >
                  Sign In
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
