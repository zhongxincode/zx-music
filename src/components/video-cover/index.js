import React, { memo } from "react";

import { useColorChange } from "@/utils/color-change";
import { formatMinuteSecond, tranNumber } from "@/utils/format-utils";
import { VideoCoverWrapper } from "./style";

export default memo(function ZXVideoCover({ info }) {
  const getCreators = (info) => {
    if (info.creator.length === 1) {
      return info.creator[0]["userName"];
    } else {
      let creators = "";
      for (let i = 0; i < info.creator.length; i++) {
        creators += info.creator[i]["userName"];
        if (i !== info.creator.length - 1) {
          creators += " / ";
        }
      }
      return creators;
    }
  };
  return (
    <VideoCoverWrapper>
      <div>
        <img
          src={info.coverUrl}
          style={{ width: "160px", height: "90px" }}
          alt=""
        />
        <p className={"video-data"}>
          <span className={"video_icon sprite_icon3"}></span>
          {tranNumber(info.playTime,2)}
        </p>
        <p className={"video-time"}>{formatMinuteSecond(info.durationms)}</p>
      </div>
      <h4 className={"video-title text-hide"}>
        {!Number(info && info.type) ? (
          <i className={"mv-icon sprite_icon3"}></i>
        ) : null}
        <a href={"#/"}>{useColorChange(info && info.title)}</a>
      </h4>
      <h5>
        <a href="#/">{useColorChange(getCreators(info))}</a>
      </h5>
    </VideoCoverWrapper>
  );
});
