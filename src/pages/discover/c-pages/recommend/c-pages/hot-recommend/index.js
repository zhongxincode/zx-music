import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { shallowEqual } from "react-redux";

import {HOT_RECOMMEND_LIMIT} from '@/common/contants.js'

import { RecommendWrapper } from "./style";
import {getHotRecommendAction} from '../../store/actionCreators'
import ZXThemeHeaderRCM from "@/components/theme-header-rcm";


export default memo(function ZXHotRecommend() {
  // state

  // redux
  const {hotRecommends} = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)
  const dispatch = useDispatch();
  // other hooks
  useEffect(()=>{
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <RecommendWrapper>
      <ZXThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/discover/songs"
      />
      <div className={"recommend-list"}>
        {
          hotRecommends.map((item, index) => {
            return <div>{item.name}</div>
          })
        }
      </div>
    </RecommendWrapper>
  );
});
