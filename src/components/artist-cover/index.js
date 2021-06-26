import { getSizeImage } from "@/utils/format-utils";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { SearchResColor } from "../song-item";

import { ArtistCoverWrapper } from "./style";
export default memo(function ZXArtistCover({ img1v1Url, artistName }) {
  const { keywords } = useSelector((state) => ({
    keywords: state.getIn(["search", "keywords"]),
  }));
  const imgUrl = img1v1Url.includes("5639395138885805")
    ? "http://p3.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg"
    : img1v1Url;
  return (
    <ArtistCoverWrapper>
      <div className={"artist-cover"}>
        <a href="#/">
          <img src={getSizeImage(imgUrl, 130)} alt="" />
        </a>
      </div>
      <p>
        <a href="#/">
          {<SearchResColor text={artistName} keywords={keywords} />}
        </a>
      </p>
    </ArtistCoverWrapper>
  );
});
