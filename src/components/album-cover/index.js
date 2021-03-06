import React, { memo } from 'react';

import {
  getSizeImage
} from "@/utils/format-utils";

import {
  AlbumWrapper
} from "./style";
import { useColorChange } from '@/utils/color-change';


export default memo(function ZXAlbumCover(props) {
  const { info, size = "100px", width = "118px", bgp = "-570px" } = props;

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, 150)} alt="" />
        <a href="/todo" className="cover sprite_covor">{info.name}</a>
      </div>
      <div className="album-info">
        <div className="name">{useColorChange(info.name)}</div>
        <div className="artist">{useColorChange(info.artist.name)}</div>
      </div>
    </AlbumWrapper>
  )
})
