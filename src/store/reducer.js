import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "@/pages/discover/c-pages/recommend/store";
import { reducer as toplistReducer } from "@/pages/discover/c-pages/toplist/store";
import { reducer as playlistReducer } from "@/pages/discover/c-pages/playlist/store";
import { reducer as djradioReducer } from "@/pages/discover/c-pages/djradio/store";
import { reducer as artistReducer } from "@/pages/discover/c-pages/artist/store";
import { reducer as albumReducer } from "@/pages/discover/c-pages/album/store";
import { reducer as playerReducer } from "@/pages/player/store";
import { reducer as searchReducer } from "@/pages/search/store";

const cReducer = combineReducers({
  recommend: recommendReducer,
  toplist: toplistReducer,
  playlist: playlistReducer,
  djradio: djradioReducer,
  artist: artistReducer,
  album: albumReducer,
  player: playerReducer,
  search: searchReducer,
});

export default cReducer;
