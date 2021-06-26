import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "@/pages/discover/c-pages/recommend/store";
import { reducer as toplistReducer } from "@/pages/discover/c-pages/toplist/store";
import { reducer as playerReducer } from "@/pages/player/store";
import { reducer as searchReducer } from "@/pages/search/store";

const cReducer = combineReducers({
  recommend: recommendReducer,
  toplist: toplistReducer,
  player: playerReducer,
  search: searchReducer,
});

export default cReducer;
