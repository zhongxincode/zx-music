import React, { memo } from "react";

import ZXPlayListItem from "@/components/playlist-item";
import { SPLWrapper } from "./style";
import { useSearch } from "../../hooks";
export default memo(function ZXSearchPlayList({ showRes }) {
  const {
    // eslint-disable-next-line no-unused-vars
    searchRes: { playlists, playlistCount },
  } = useSearch("searchPlayListsRes");
  showRes(20, "个歌单");
  return (
    <SPLWrapper>
      {playlists.map((item, index) => {
        return (
          <ZXPlayListItem
            coverImgUrl={item.coverImgUrl}
            name={item.name}
            trackCount={item.trackCount}
            creator={item.creator}
            bookCount={item.bookCount}
            playCount={item.playCount}
          />
        );
      })}
    </SPLWrapper>
  );
});
