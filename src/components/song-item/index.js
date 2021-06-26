import React, { memo } from "react";

import { message } from "antd";
import { getSongDetailAction, addPlayListAction } from "@/pages/player/store";
import { formatMinuteSecond } from "@/utils/format-utils";
import { SongItemWrapper, SongItemLeft, SongItemRight } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import handleSearch from "../../utils/color-change";

export default memo(function ZXSongItem({
  name,
  artistName,
  albumName,
  duration,
  song,
  size,
}) {
  const { keywords } = useSelector(
    (state) => ({
      keywords: state.getIn(["search", "keywords"]),
    }),
    shallowEqual
  );

  // // redux hooks
  const dispatch = useDispatch();

  // other handle
  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  };

  const addPlayList = (item) => {
    dispatch(addPlayListAction(item));
    message.open({
      content: "已添加到播放列表",
      key: "lyric",
      duration: 2,
      className: "lyric-message",
    });
  };

  return (
    <SongItemWrapper className={"wrap-v3"}>
      <SongItemLeft>
        <div className={"player-icon"} onClick={(e) => playMusic(song)}></div>
        <div className={"text"}>
          <a href="#/">
            <b title={name}>
              <SearchResColor text={name} keywords={keywords} />
            </b>
          </a>
        </div>
        <div className="operate">
          <button
            className="btn sprite_icon2 addto"
            onClick={(e) => addPlayList(song)}
          ></button>
          <button className="btn sprite_02 favor"></button>
        </div>
      </SongItemLeft>
      <SongItemRight>
        <div className={"w1"}>
          <div className="text-nowrap">
            <a href="#/">
              <SearchResColor text={artistName} keywords={keywords} />
            </a>
          </div>
        </div>
        <div className={"w2"}>
          <div className={"w2-text"}>
            <a href="#/">
              《{<SearchResColor text={albumName} keywords={keywords} />}》
            </a>
          </div>
        </div>
        <div>
          <div>{formatMinuteSecond(duration)}</div>
        </div>
      </SongItemRight>
    </SongItemWrapper>
  );
});

export const SearchResColor = ({ text, keywords = "" }) => {
  const { splitArr, arr } = handleSearch(text, keywords);
  return (
    <React.Fragment>
      {splitArr && splitArr[0]}
      {<span style={{ color: "#0c73c2", fontSize: "12px" }}>{arr}</span>}
      {splitArr && splitArr[1]}
    </React.Fragment>
  );
};
