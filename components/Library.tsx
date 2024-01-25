"use client";

import useAuthModal from "@/hooks/useAuthModal";
import useModalUpload from "@/hooks/useModalUpload";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { FC } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import MediaItem from "./MediaItem";

const Library: FC<{ songs: Song[] }> = ({ songs }) => {
  const authModal = useAuthModal();
  const uploadModal = useModalUpload();
  const { user } = useUser();

  const onClick = () => {
    if (!user) authModal.onOpen();

    uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          size={20}
          onClick={onClick}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {songs.map((song: Song) => (
          <MediaItem key={song.id} data={song} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default Library;
