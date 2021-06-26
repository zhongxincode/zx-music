import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import ZXTopListHeader from "./c-cpns/toplist-header";
import ZXTopListList from "./c-cpns/toplist-list";
import ZXTopListRanking from "./c-cpns/toplist-ranking";
import { getTopsAction } from "./store/actionCreators";
import { TopListWrapper, TopListLeft, TopListRight } from "./style";
export default memo(function ZXTopList() {
  // redux
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    dispatch(getTopsAction());
  }, [dispatch]);
  return (
    <TopListWrapper className={"wrap-v2"}>
      <TopListLeft>
        <ZXTopListRanking />
      </TopListLeft>
      <TopListRight>
        <ZXTopListHeader />
        <ZXTopListList />
      </TopListRight>
    </TopListWrapper>
  );
});
