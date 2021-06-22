import React, { memo } from 'react';

import ZXPlayerInfo from './c-cpns/player-info';
import ZXPlayerComment from './c-cpns/player-comment';
import ZXPlayerSongs from './c-cpns/player-songs';
import ZXPlayerRelevant from './c-cpns/player-relevant';
import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style';

export default memo(function HYPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <ZXPlayerInfo/>
          <ZXPlayerComment/>
        </PlayerLeft>
        <PlayerRight>
          <ZXPlayerSongs/>
          <ZXPlayerRelevant/>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
