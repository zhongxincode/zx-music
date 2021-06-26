import React, { useEffect, memo } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  getCategoryAction,
  getPlayListAction,
  changeCurrentCategoryAction,
} from "./store/actionCreators";

import ZXPlayListHeader from "./c-cpns/playlist-header";
import ZXPlayListList from "./c-cpns/playlist-list";
import { PlayListWrapper } from "./style";

export default memo(function ZXPlayList() {
  // redux
  const dispatch = useDispatch();
  const cat = useLocation().cat;

  useEffect(() => {
    dispatch(changeCurrentCategoryAction(cat));
  }, [dispatch, cat]);

  // hooks
  useEffect(() => {
    dispatch(getCategoryAction());
    dispatch(getPlayListAction(0));
  }, [dispatch]);

  return (
    <PlayListWrapper className="wrap-v2">
      <ZXPlayListHeader />
      <ZXPlayListList />
    </PlayListWrapper>
  );
});
