import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Slider } from "antd";

import { Control, Operator, PlayerBarWrapper, PlayInfo } from "./style";
import { getSongDetailAction } from "../store/actionCreators";
import {
  formatMinuteSecond,
  getPlayUrl,
  getSizeImage,
} from "@/utils/format-utils";

export default memo(function ZXAppPlayerBar() {
  // props and state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  // redux hooks
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
    }),shallowEqual);
  const dispatch = useDispatch();
  // hooks
  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(66282));
  }, [dispatch]);
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
  }, [currentSong]);
  // other handle
  const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
  const songName = currentSong.name || "未知gequ";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const duration = currentSong.dt || 0;
  const showDuration = formatMinuteSecond(duration);
  const showCurrentTime = formatMinuteSecond(currentTime);
  // handle function
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const timeUpdate = (e) => {
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000);
      setProgress((currentTime / duration) * 100);
    }
  };

  const sliderChange = useCallback(
    (value) => {
      setIsChanging(true);
      const currentTime = (value / 100) * duration;
      setCurrentTime(currentTime);
      setProgress(value);
    },
    [duration]
  );

  const sliderAfterChange = useCallback(
    (value) => {
      const currentTime = ((value / 100) * duration) / 1000;
      audioRef.current.currentTime = currentTime;
      setCurrentTime(currentTime * 1000);
      setIsChanging(false);

      if (!isPlaying) {
        playMusic();
      }
    },
    [duration, playMusic, isPlaying]
  );

  return (
    <PlayerBarWrapper className={"sprite_playerbar"}>
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_playerbar prev"></button>
          <button
            className="sprite_playerbar play"
            onClick={(e) => playMusic()}
          ></button>
          <button className="sprite_playerbar next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/todo">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <a href="#/" className="song-name">
                {songName}
              </a>
              <a href="#/" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_playerbar btn favor"></button>
            <button className="sprite_playerbar btn share"></button>
          </div>
          <div className="right sprite_playerbar">
            <button className="sprite_playerbar btn volume"></button>
            <button className="sprite_playerbar btn loop"></button>
            <button className="sprite_playerbar btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} />
    </PlayerBarWrapper>
  );
});
