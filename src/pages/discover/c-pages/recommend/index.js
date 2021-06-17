import React, { memo } from "react";

import ZXTopBanner from "./c-pages/top-banner";
import ZXHotRecommend from "./c-pages/hot-recommend";
import ZXNewAlbum from "./c-pages/new-album";
import ZXRecommendRanking from "./c-pages/recommend-ranking";

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

function ZXRecommend() {
  return (
    <RecommendWrapper>
      <ZXTopBanner />
      <Content className={"wrap-v2"}>
        <RecommendLeft>
          <ZXHotRecommend />
          <ZXNewAlbum />
          <ZXRecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(ZXRecommend);
