import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';


import ZXThemeHeaderNormal from '@/components/theme-header-normal';
import ZXAlphaList from './c-cpns/alpha-list';
import ZXArtistItem from './c-cpns/artist-item';
import {
  ArtistListWrapper
} from './style';

export default memo(function ZXArtistList() {
  // redux hooks
  const { currentType, artistList } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),
    artistList: state.getIn(["artist", "artistList"])
  }), shallowEqual);

  return (
    <ArtistListWrapper>
      <ZXThemeHeaderNormal title={currentType.name} />
      <ZXAlphaList/>
      <div className="artist-list">
        {
          artistList.map((item, index) => {
            return <ZXArtistItem key={item.id} index={index} info={item}/>
          })
        }
      </div>
    </ArtistListWrapper>
  )
})
