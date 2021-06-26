import { getSizeImage, tranNumber } from "@/utils/format-utils";
import React, { memo } from "react";

import { PLIWrapper } from "./style";
export default memo(function ZXPlayListItem({
  coverImgUrl,
  name,
  trackCount,
  creator,
  bookCount,
  playCount,
}) {
  return (
    <PLIWrapper>
      <div className={"plp"}>
        <span className={"plp-icon sprite_table"}></span>
      </div>
      <div>
        <a href="#/">
          <img src={getSizeImage(coverImgUrl, 50)} alt="" />
        </a>
      </div>
      <div className={"pl-name"}>
        <a className={"pln"} href="#/">
          {name}
        </a>
        <div className="operate">
          <button className="btn sprite_icon2 addto"></button>
          <button className="btn sprite_02 favor"></button>
        </div>
      </div>
      <div className={"pl-count"}>{trackCount}首</div>
      <div className={"pl-creator"}>by {creator.nickname}</div>
      <div className={"pl-book"}>收藏：{tranNumber(bookCount)}</div>
      <div className={"pl-scount"}>收听：{tranNumber(playCount,1)}</div>
    </PLIWrapper>
  );
});
