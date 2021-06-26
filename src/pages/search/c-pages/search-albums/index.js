import React, { memo } from "react";
import ZXAlbumCover from "@/components/album-cover";
import { SAWrapper } from "./style";
import { useSearch } from "../../hooks";
import ZXSearchPagination from "@/components/search-pagination";
export default memo(function ZXSearchAlbums({showRes}) {
  const {
    setOffset,
    searchRes: { albums, albumCount },
  } = useSearch("searchAlbumsRes");
  const pageChange = (e) => setOffset(e - 1);
  showRes(albumCount, "张专辑");
  
  return (
    <SAWrapper>
      <div className="albums">
        {albums.map((item, index) => (
          <ZXAlbumCover
            key={item.id}
            info={item}
            size={"130px"}
            width={"153px"}
            bgp={"-845px"}
          />
        ))}
      </div>
      <ZXSearchPagination size={30} total={albumCount} onChange={pageChange} />
    </SAWrapper>
  );
});
