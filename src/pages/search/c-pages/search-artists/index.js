import React, { memo, useState, useEffect } from "react";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ZXArtistCover from "@/components/artist-cover";
import ZXSearchPagination from '@/components/search-pagination'
import { SearchArtistsWrapper } from "./style";
import { getSearchAction } from "../../store/actionCreator";

export default memo(function ZXSearchArtists({showRes}) {
  const [offset, setOffset] = useState(0);
  const {
    keywords,
    searchArtistsRes: { artists, artistCount },
    curType,
  } = useSelector(
    (state) => ({
      keywords: state.getIn(["search", "keywords"]),
      curType: state.getIn(["search", "curType"]),
      searchArtistsRes: state.getIn(["search", "searchArtistsRes"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchAction(keywords, curType, offset));
  }, [dispatch, keywords, curType, offset]);
  const pageChange = (e) => {
    console.log(e);
    setOffset(e - 1);
  };
  showRes(artistCount, "位歌手")
  return (
    <SearchArtistsWrapper>
      {artists.map((item, index) => (
        <ZXArtistCover
          key={item.id}
          img1v1Url={item.img1v1Url}
          artistName={item.name}
        />
      ))}
      <ZXSearchPagination size={30} total={artistCount} onChange={pageChange} />
    </SearchArtistsWrapper>
  );
});
