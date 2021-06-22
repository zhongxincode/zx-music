import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { Slider, message } from "antd";

import ZXAppPlayerPanel from "../app-play-panel";
import { Control, Operator, PlayerBarWrapper, PlayInfo } from "./style";
import {
  changeCurrentLyricIndexAction,
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
  const [showPanel, setShowPanel] = useState(false);
  // redux hooks
  const { currentSong, sequence, lyricArray, currentLyricIndex, playList } =
    useSelector(
      (state) => ({
        currentSong: state.getIn(["player", "currentSong"]),
        sequence: state.getIn(["player", "sequence"]),
        lyricArray: state.getIn(["player", "lyricArray"]),
        currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
        playList: state.getIn(["player", "playList"]),
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
  const showPlayListLength = playList.length || "";
  // handle function
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime;
    if (!isChanging) {
      // 为什么这里乘了1000下面还要乘以1000呢？因为set是异步函数
      setCurrentTime(currentTime * 1000);
      setProgress(((currentTime * 1000) / duration) * 100);
    }

    // 获取当前歌词
    let lrcLength = lyricArray.length;
    let i = 0;
    for (; i < lrcLength; i++) {
      const lrcTime = lyricArray[i].time;
      if (currentTime * 1000 < lrcTime) {
        break;
      }
    }
    let findIndex = i === 0 ? 1 : i - 1;
    if (currentLyricIndex !== findIndex) {
      dispatch(changeCurrentLyricIndexAction(findIndex));
      let content = lyricArray[findIndex] && lyricArray[findIndex].content;
      message.open({
        content,
        key: "lyric",
        duration: 0,
        className: "lyric-message",
      });
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
            <button
              className="sprite_playerbar btn playlist"
              onClick={(e) => setShowPanel(!showPanel)}
            >
              {showPlayListLength}
            </button>
          </div>
        </Operator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdate}
        onEnded={handleMusicEnded}
      />
      {showPanel && <ZXAppPlayerPanel />}
    </PlayerBarWrapper>
  );
});
