import React, { memo } from "react";

import ZXArtistCategory from "./c-cpns/artist-category";
import ZXArtistList from "./c-cpns/artist-list";
import { ArtistWrapper } from "./style";

export default memo(function HYArtist() {
  return (
    <ArtistWrapper>
      <div className="content wrap-v2">
        <ZXArtistCategory />
        <ZXArtistList />
      </div>
    </ArtistWrapper>
  );
});
