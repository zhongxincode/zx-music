import React, { memo, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { getSizeImage } from '@/utils/format-utils';

import ZXSongOperationBar from '@/components/song-operation-bar';
import {
  InfoWrapper,
  InfoLeft,
  InfoRight
} from './style';

export default memo(function HYPlayerInfo() {
  // props and hooks
  const [isSpread, setIsSpread] = useState(false);

  // redux hooks
  const { currentSong, lyricArray } = useSelector(state => ({
    currentSong: state.getIn(["player", "currentSong"]),
    lyricArray: state.getIn(["player", "lyricArray"])
  }), shallowEqual);

  // handle code
  const totalLyricCount = isSpread ? lyricArray.length : 13;

  return (
    <InfoWrapper>
      <InfoLeft>
        <div className="image">
          <img src={getSizeImage(currentSong.al.picUrl, 130)} alt="" />
          <span className="cover image_cover"></span>
        </div>
        <div className="link">
          <i className="sprite_icon2"></i>
          <a href="#/">生成外联播放器</a>
        </div>
      </InfoLeft>
      <InfoRight isSpread={isSpread}>
        <div className="header">
          <i className="sprite_icon2"></i>
          <h3 className="title">{currentSong.name}</h3>
        </div>
        <div className="singer">
          <span className="label">歌手：</span>
          <a href="/#" className="name">{currentSong.ar[0].name}</a>
        </div>
        <div className="album">
          <span className="label">所属专辑：</span>
          <a href="/#" className="name">{currentSong.al.name}</a>
        </div>

        <ZXSongOperationBar favorTitle="收藏"
                            shareTitle="分享"
                            downloadTitle="下载"
                            commentTitle="(167366)"/>

        <div className="lyric">
          <div className="lyric-info">
            {
              lyricArray.slice(0, totalLyricCount).map((item, index) => {
                return <p key={item.time} className="text">{item.content}</p>
              })
            }
          </div>
          <button className="lyric-control"
                  onClick={e => setIsSpread(!isSpread)}>
            {isSpread ? "收起": "展开"}
            <i className="sprite_icon2"></i>
          </button>
        </div>
      </InfoRight>
    </InfoWrapper>
  )
})
