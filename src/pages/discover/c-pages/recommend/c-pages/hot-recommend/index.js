import React, { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";

import ZXThemeHeaderRCM from "@/components/theme-header-rcm";
import ZXSongsCover from "@/components/songs-cover";

import { HOT_RECOMMEND_LIMIT } from "@/common/constants.js";

import { RecommendWrapper } from "./style";
import { getHotRecommendAction } from "../../store/actionCreators";

export default memo(function ZXHotRecommend() {
  // state

  // redux
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  const history = useHistory();

  const keywordClick = useCallback((keyword) => {
    history.push({pathname: "/discover/playlist", cat: keyword});
  }, [history]);

  return (
    <RecommendWrapper>
      <ZXThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        keywordClick={keywordClick}
        moreLink="/discover/playlist"
      />
      <div className={"recommend-list"}>
        {hotRecommends.map((item, ind) => {
          return <ZXSongsCover key={item.id} info={item} />;
        })}
      </div>
    </RecommendWrapper>
  );
});
