import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  playList: [],
  currentSongIndex: 0,
  currentSong: {},
  sequence: 0, // 0 循环 1 随机 2 单曲
  lyricArray: [],
  currentLyricIndex: [],
  simiPlaylist: [],
  simiSongs: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      localStorage.setItem("lastSongId", action.currentSong.id);
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.currentSongIndex);
    case actionTypes.CHANGE_PLAY_SEQUENCE:
      return state.set("sequence", action.sequence);
    case actionTypes.CHANGE_LYRICS:
      return state.set("lyricArray", action.lyricArray);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.currentLyricIndex);
      case actionTypes.CHANGE_SIMI_PLAYLIST:
        return state.set("simiPlaylist", action.simiPlaylist);
      case actionTypes.CHANGE_SIMI_SONGS:
        return state.set("simiSongs", action.simiSongs);
    default:
      return state;
  }
}

export default reducer;
