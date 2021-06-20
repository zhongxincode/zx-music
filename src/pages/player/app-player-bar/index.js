import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { Slider } from "antd";

import { Control, Operator, PlayerBarWrapper, PlayInfo } from "./style";
import {
  changeCurrentSongByBtnAcion,
  changeSequenceAction,
  getSongDetailAction,
} from "../store/actionCreators";
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
  const { currentSong, sequence } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      sequence: state.getIn(["player", "sequence"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  // hooks
  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(66282));
  }, [dispatch]);
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    audioRef.current
      .play()
      .then((res) => setIsPlaying(true))
      .catch((err) => setIsPlaying(false));
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

  const changeSequence = () => {
    let currenSequence = sequence + 1;
    if (currenSequence > 2) {
      currenSequence = 0;
    }
    dispatch(changeSequenceAction(currenSequence));
  };

  const changeMusic = (tag) => {
    dispatch(changeCurrentSongByBtnAcion(tag));
  };

  const handleMusicEnded = () => {
    if (sequence === 2) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCurrentSongByBtnAcion(1));
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
          <button
            className="sprite_playerbar prev"
            onClick={(e) => changeMusic(-1)}
          ></button>
          <button
            className="sprite_playerbar play"
            onClick={(e) => playMusic()}
          ></button>
          <button
            className="sprite_playerbar next"
            onClick={(e) => changeMusic(1)}
          ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to={"/discover/player"}>
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
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
                tooltipVisible={false}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_playerbar btn favor"></button>
            <button className="sprite_playerbar btn share"></button>
          </div>
          <div className="right sprite_playerbar">
            <button className="sprite_playerbar btn volume"></button>
            <button
              className="sprite_playerbar btn loop"
              onClick={changeSequence}
            ></button>
            <button className="sprite_playerbar btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdate}
        onEnded={handleMusicEnded}
      />
    </PlayerBarWrapper>
  );
});
