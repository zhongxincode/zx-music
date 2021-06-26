import React, { memo, useState } from "react";

import { LyricCoverWrapper } from "./style";

export default memo(function ZXLyricCover({ lyricArray, showLength = 6 }) {
  const [isSpread, setIsSpread] = useState(false);
  const showLyricCount = isSpread ? lyricArray.length : showLength;
  return (
    <LyricCoverWrapper>
      <div className="lyric">
        <div className="lyric-info">
          {lyricArray.slice(0, showLyricCount).map((item, index) => {
            return (
              <p key={index} className="text">
                {item}
              </p>
            );
          })}
        </div>
        <button
          className="lyric-control"
          onClick={(e) => setIsSpread(!isSpread)}
        >
          {isSpread ? "收起" : "展开"}
          <i className="sprite_icon2"></i>
        </button>
      </div>
    </LyricCoverWrapper>
  );
});
