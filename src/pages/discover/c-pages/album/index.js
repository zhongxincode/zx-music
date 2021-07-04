import React, { memo } from 'react';

import ZXHotAlbum from './c-cpns/hot-album';
import ZXTopAlbum from './c-cpns/top-album';
import {
  AblumWrapper
} from './style';

export default memo(function HYAlbum() {
  return (
    <AblumWrapper className="wrap-v2">
      <ZXHotAlbum/>
      <ZXTopAlbum/>
    </AblumWrapper>
  )
})
