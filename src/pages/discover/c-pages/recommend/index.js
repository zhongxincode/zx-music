import React, { memo } from "react";

import ZXTopBanner from "./c-pages/top-banner";
import ZXHotRecommend from "./c-pages/hot-recommend";
import ZXNewAlbum from "./c-pages/new-album";
import ZXRankingList from "./c-pages/ranking-list";
import ZXUserLogin from "./c-pages/user-login";
import ZXSettleSingers from "./c-pages/settle-singer";
import ZXHotRadio from "./c-pages/hot-radio";

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
          <ZXRankingList />
        </RecommendLeft>
        <RecommendRight>
          <ZXUserLogin />
          <ZXSettleSingers />
          <ZXHotRadio />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(ZXRecommend);
