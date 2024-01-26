"use client";

import { FC } from "react";
import { Song } from "@/types";
import SongItem from "@/components/SongItem";
import useOnPlay from "@/hooks/useOnPlay";
import usePlayer from "@/hooks/usePlayer";

const PageContent: FC<{ songs: Song[] }> = ({ songs }) => {
  const onPlay = useOnPlay(songs);

  if (!songs.length)
    return <div className="mt-4 text-neutral-400">No songs available.</div>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
      {songs.map((item: Song) => (
        <SongItem
          onClick={(id: string) => onPlay(id)}
          key={item.id}
          data={item}
        />
      ))}
    </div>
  );
};

export default PageContent;
