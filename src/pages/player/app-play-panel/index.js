import React, { memo } from 'react';

import ZXPlayHeader from './c-cpns/play-header';
import ZXPlayList from './c-cpns/play-list';
import ZXLyricPanel from './c-cpns/lyric-panel';
import { PanelWrapper } from './style';

export default memo(function HYAppPlayList() {
  return (
    <PanelWrapper>
      <ZXPlayHeader/>
      <div className="main">
        <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt=""/>
        <ZXPlayList/>
        <ZXLyricPanel/>
      </div>
    </PanelWrapper>
  )
})
