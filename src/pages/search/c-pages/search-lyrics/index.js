import React, { memo } from "react";
import { useSearch } from "../../hooks";

import ZXSongItem from "@/components/song-item";
import ZXLyricCover from "@/components/lyric-cover";

import { SLWrapper } from "./style";
import { lookLyric } from "@/utils/look-lyric";
export default memo(function ZXSearchLrics({ showRes }) {
  const {
    searchRes: { songs },
  } = useSearch("searchLyricsRes");
  showRes(20, "个歌词");

  return (
    <SLWrapper>
      {songs.slice(0, 20).map((item, index) => {
        return (
          <div key={item.id} className={"search-lyric"}>
            <ZXSongItem
              name={item.name}
              artistName={item.artists[0].name}
              albumName={item.album.name}
              duration={item.duration}
              song={item}
            />
            <ZXLyricCover lyricArray={lookLyric(item.lyrics)} showLength={4} />
          </div>
        );
      })}
    </SLWrapper>
  );
});
