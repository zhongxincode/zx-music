import React, { memo } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import classNames from "classnames";

import { formatMinuteSecond } from "@/utils/format-utils";

import { PlayListWrapper } from "./style";
import {
  changeCurrentSongAction,
  changeCurrentSongIndexAction,
  getLyricAction,
} from "@/pages/player/store/actionCreators";

export default memo(function ZXPlayList() {
  const { playList, currentSongIndex } = useSelector(
    (state) => ({
      playList: state.getIn(["player", "playList"]),
      currentSongIndex: state.getIn(["player", "currentSongIndex"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  return (
    <PlayListWrapper>
      {playList.map((item, index) => {
        return (
          <div
            key={item.id}
            onClick={(e) => {
              dispatch(changeCurrentSongAction(playList[index]));
              dispatch(changeCurrentSongIndexAction(index));
              dispatch(getLyricAction(playList[index].id))
            }}
            className={classNames("play-item", {
              active: currentSongIndex === index,
            })}
          >
            <div className="left">{item.name}</div>
            <div className="right">
              <span className="singer">{item.ar[0].name}</span>
              <span className="duration">{formatMinuteSecond(item.dt)}</span>
              <span className="sprite_playlist link"></span>
            </div>
          </div>
        );
      })}
    </PlayListWrapper>
  );
});
