import React, { memo } from 'react';

import ZXRadioCategory from './c-cpns/radio-category';
import ZXRadioRecommend from './c-cpns/radio-recommend';
import ZXRadioRanking from './c-cpns/radio-ranking';
import {
  DjRadioWrapper
} from "./style";

export default memo(function HYDjradio() {
  return (
    <DjRadioWrapper className="wrap-v2">
      <ZXRadioCategory />
      <ZXRadioRecommend />
      <ZXRadioRanking />
    </DjRadioWrapper>
  )
})
