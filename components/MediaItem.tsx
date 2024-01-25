import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import { FC } from "react";

interface IMediaProps {
  onClick: (id: string) => void;
  data: Song;
}

const MediaItem: FC<IMediaProps> = ({ data, onClick }) => {
  const imageUrl = useLoadImage(data);

  const handleClick = () => {
    if (onClick) onClick(data.id);

    // Default turn on player
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          fill
          src={imageUrl || "/images/spotify.jpeg"}
          alt="Media image"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <span className="text-white truncate">{data.title}</span>
        <span className="text-neutral-400 text-sm truncate">{data.author}</span>
      </div>
    </div>
  );
};

export default MediaItem;
