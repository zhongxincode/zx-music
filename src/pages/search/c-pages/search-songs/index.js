import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { Pagination } from "antd";

import ZXSongItem from "@/components/song-item";
import { getSearchAction } from "../../store/actionCreator";
// import { useLocation } from "react-router-dom";

// import { queryUrl } from "@/utils/query-url";
import { SongsWrapper } from "./style";

export default memo(function ZXSearchSongs({showRes}) {
  const [offset, setOffset] = useState(0);
  // let { search } = useLocation();
  // const { keywords } = queryUrl(search);
  const {
    keywords,
    curType,
    searchSongsRes: { songs, songCount },
  } = useSelector(
    (state) => ({
      keywords: state.getIn(["search", "keywords"]),
      curType: state.getIn(["search", "curType"]),
      searchSongsRes: state.getIn(["search", "searchSongsRes"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchAction(keywords, curType, offset));
  }, [dispatch, keywords,curType, offset]);
  const pageChange = (e) => {
    setOffset(e - 1);
  };
  showRes(songCount, "首歌曲");

  return (
    <SongsWrapper>
      <div className={"gray"}>
        {songs.map((item, index) => (
          <ZXSongItem
            className={"gray"}
            key={item.id}
            name={(item && item.name) || ""}
            artistName={(item.artists && item.artists[0].name) || ""}
            albumName={(item.album && item.album.name) || ""}
            duration={(item && item.duration) || 0}
            song={item}
          />
        ))}
      </div>
      <Pagination
        defaultCurrent={1}
        pageSize={30}
        total={songCount}
        showSizeChanger={false}
        onChange={(e) => pageChange(e)}
        className={"pagination"}
      />
    </SongsWrapper>
  );
});
