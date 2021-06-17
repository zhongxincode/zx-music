import React, { memo } from "react";

import { RecommendWrapper } from "./style";

import ZXThemeHeaderRCM from "@/components/theme-header-rcm";

export default memo(function ZXHotRecommend() {
  return (
    <RecommendWrapper>
      <ZXThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink="/discover/songs"
      />
    </RecommendWrapper>
  );
});
