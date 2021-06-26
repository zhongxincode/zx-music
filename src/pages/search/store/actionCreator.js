import { getSearchSongs } from "../../../services/search";
import * as actionTypes from "./constants";

const changeSearchSongsAction = (searchSongsRes) => ({
  type: actionTypes.CHANGE_SEARCH_SONGS_RES,
  searchSongsRes,
});

export const changeKeywordsAction = (keywords) => ({
  type: actionTypes.CHANGE_KEYWORDS,
  keywords,
});
export const changeTypeAction = (curType) => ({
  type: actionTypes.CHANGE_TYPE,
  curType,
});

const changeSearchArtistsAction = (searchArtistsRes) => ({
  type: actionTypes.CHANGE_SEARCH_ARTISTS_RES,
  searchArtistsRes,
});

const changeSearchAlbumsAction = (searchAlbumsRes) => ({
  type: actionTypes.CHANGE_SEARCH_ALBUMS_RES,
  searchAlbumsRes,
});

const changeSearchVideosAction = (searchVideosRes) => ({
  type: actionTypes.CHANGE_SEARCH_VIDEO_RES,
  searchVideosRes,
});

const changeSearchLyricsAction = (searchLyricsRes) => ({
  type: actionTypes.CHANGE_SEARCH_LYRIC_RES,
  searchLyricsRes,
});

const changeSearchPlayListsAction = (searchPlayListsRes) => ({
  type: actionTypes.CHANGE_SEARCH_PLAYLIST_RES,
  searchPlayListsRes,
});

export const getSearchAction = (keywords, type, offset) => {
  return (dispatch) => {
    getSearchSongs(keywords, type, offset).then((res) => {
      console.log(res);
      switch (type) {
        case "1":
          dispatch(changeSearchSongsAction(res.result));
          break;
        case "100":
          dispatch(changeSearchArtistsAction(res.result));
          break;
        case "10":
          dispatch(changeSearchAlbumsAction(res.result));
          break;
        case "1014":
          dispatch(changeSearchVideosAction(res.result));
          break;
        case "1006":
          dispatch(changeSearchLyricsAction(res.result));
          break;
        case "1000":
          dispatch(changeSearchPlayListsAction(res.result));
          break;
        default:
      }
    });
  };
};
