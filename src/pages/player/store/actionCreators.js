import * as actionTypes from "./constants";

import { getLyric, getSongDetail, getSimiPlaylist, getSimiSong } from "@/services/player";
import { parseLyric } from "@/utils/lrc-parse";

export const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
});

export const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex,
});

const changeLyricArrayAction = lyricArray => ({
  type: actionTypes.CHANGE_LYRICS,
  lyricArray,
})

export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_PLAY_SEQUENCE,
  sequence,
});

export const changeCurrentLyricIndexAction = (currentLyricIndex) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex,
})

const changeSimiPlaylistAction = (res) => ({
  type: actionTypes.CHANGE_SIMI_PLAYLIST,
  simiPlaylist: res.playlists
})

const changeSimiSongsAction = (res) => ({
  type: actionTypes.CHANGE_SIMI_SONGS,
  simiSongs: res.songs
})

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

    dispatch(getLyricAction(currentSong.id));
  };
};

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 1.根据id查找playlist中是否存在该歌曲
    const playList = getState().getIn(["player", "playList"]);
    const songIndex = playList.findIndex((song) => song.id === ids);
    let song = null;

    // 2. 判断是否找到歌曲
    if (songIndex !== -1) {
      dispatch(changeCurrentSongIndexAction(songIndex));
      song = playList[songIndex];
      dispatch(changeCurrentSongAction(song));
      dispatch(getLyricAction(song.id))
    } else {
      getSongDetail(ids).then((res) => {
        song = res.songs && res.songs[0];
        if (!song) return;
        // 1.将请求到的歌曲添加到播放列表中
        const newPlayList = [...playList, song];
        // 2.更新redux中的值
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));

        // 获取该歌曲的歌词
        if (!song) return;
        dispatch(getLyricAction(song.id));
      });
    }
  };
};

export const getLyricAction = (id) => {
  return (dispatch) => {
    getLyric(id).then((res) => {
      const lyric = (res.lrc && res.lrc.lyric) || "暂时没有歌词";
      const lyricArray = parseLyric(lyric);
      dispatch(changeLyricArrayAction(lyricArray))
    });
  };
};

export const getSimiPlaylistAction = () => {
  return (dispatch, getState) => {
    const id = getState().getIn(["player", "currentSong"]).id;
    if (!id) return;

    getSimiPlaylist(id).then(res => {
      dispatch(changeSimiPlaylistAction(res));
    })
  }
}

export const getSimiSongAction = () => {
  return (dispatch, getState) => {
    const id = getState().getIn(["player", "currentSong"]).id;
    if (!id) return;

    getSimiSong(id).then(res => {
      dispatch(changeSimiSongsAction(res));
    })
  }
}