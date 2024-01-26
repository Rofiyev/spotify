"use client";

import { FC, useEffect } from "react";
import { Song } from "@/types";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";

const LikedContent: FC<{ songs: Song[] }> = ({ songs }) => {
  const router = useRouter();

  const { isLoading, user } = useUser();

  useEffect(() => {
    if (!isLoading && !user) router.replace("/");
  }, [isLoading, user, router]);

  if (!songs.length) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        Not liked songs.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((song: Song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem data={song} onClick={() => {}} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContent;
