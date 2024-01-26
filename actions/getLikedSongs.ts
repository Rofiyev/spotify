import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface ILikedSong {
  user_id: string;
  created_at: string;
  song_id: number;
  songs: Song;
}

const getLikedSongs = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase
    .from("liked_songs")
    .select("*, songs(*)")
    .eq("user_id", session?.user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
    return [];
  }

  if (!data) return [];

  return data.map(
    (item: ILikedSong): Song => ({
      ...item.songs,
    })
  );
};

export default getLikedSongs;
