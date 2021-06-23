import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { message } from "antd";

import { getSizeImage } from "@/utils/format-utils";
import { getSongDetailAction, addPlayListAction } from "@/pages/player/store";

import { TopRankingWrapper } from "./style";

export default memo(function ZXTopRanking(props) {
  // props and state
  const { info } = props;
  const { tracks = [] } = info;

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
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} alt="" />
          <a href="/todo" className="image_cover">
            ranking
          </a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className="list-item">
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="operate">
                  <button
                    className="btn sprite_02 play"
                    onClick={(e) => playMusic(item)}
                  ></button>
                  <button
                    className="btn sprite_icon2 addto"
                    onClick={(e) => addPlayList(item)}
                  ></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  );
});
