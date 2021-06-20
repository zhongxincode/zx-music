import * as actionTypes from "./constants";

import { getSongDetail } from "@/services/player";

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
});

const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex,
});

export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_PLAY_SEQUENCE,
  sequence,
});

export const changeCurrentSongByBtnAcion = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"]);
    const sequence = getState().getIn(["player", "sequence"]);
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);

    switch (sequence) {
      case 1: // 随机
        let randomIndex = Math.floor(Math.random() * playList.length);
        while (randomIndex === currentSongIndex) {
          randomIndex = Math.floor(Math.random() * playList.length);
        }
        currentSongIndex = randomIndex;
        break;
      case 2:
        break;
      default:
        currentSongIndex += tag;
        if (currentSongIndex >= playList.length) currentSongIndex = 0;
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
        break;
    }

    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
  };
};

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 1.根据id查找playlist中是否存在该歌曲
    const playList = getState().getIn(["player", "playList"]);
    const songIndex = playList.findIndex((song) => song.id === ids);

    // 2. 判断是否找到歌曲
    if (songIndex !== -1) {
      dispatch(changeCurrentSongIndexAction(songIndex));
      const song = playList[songIndex];
      dispatch(changeCurrentSongAction(song));
    } else {
      getSongDetail(ids).then((res) => {
        const song = res.songs && res.songs[0];
        if (!song) return;
        // 1.将请求到的歌曲添加到播放列表中
        const newPlayList = [...playList, song];
        // 2.更新redux中的值
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));
      });
    }
  };
};
