import React, { memo } from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import {
  getSizeImage,
  formatMinuteSecond
} from "@/utils/format-utils.js"

import ZXThemeHeaderSong from '@/components/theme-header-song';
import {
  TopListListWrapper
} from './style';
import { getSongDetailAction } from '@/pages/player/store';

export default memo(function ZXTopListList() {
  const state = useSelector(state => ({
    playList: state.getIn(["toplist", "playList"])
  }), shallowEqual);
  const tracks = state.playList.tracks || [];
    // // redux hooks
    const dispatch = useDispatch();

    // other handle
    const playMusic = (item) => {
      dispatch(getSongDetailAction(item.id));
    };

  return (
    <TopListListWrapper>
      <ZXThemeHeaderSong />
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {
              tracks.map((item, index) => {
                return (
                  <tr className="" key={item.id}>
                    <td>
                      <div className="rank-num">
                        <span className="num">{index + 1}</span>
                        <span className="new sprite_icon2"></span>
                      </div>
                    </td>
                    <td>
                      <div className="song-name">
                        {
                          index < 3 ?
                            (<img src={getSizeImage(item.al.picUrl, 50)} alt="" />) : null
                        }
                        <span className="play sprite_table" onClick={e => playMusic(item)}></span>
                        <span className="name">{item.name}</span>
                      </div>
                    </td>
                    <td>{formatMinuteSecond(item.dt)}</td>
                    <td>{item.ar[0].name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </TopListListWrapper>
  )
})

