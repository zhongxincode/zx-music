import React, { memo } from "react";

import ZXTopBanner from './c-pages/top-banner'

import {
  RecommendWrapper,
} from './style'
function ZXRecommend() {

  return <RecommendWrapper>
    <ZXTopBanner />
  </RecommendWrapper>;
}

export default memo(ZXRecommend);
