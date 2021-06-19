import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import ZXThemeHeaderRCM from "@/components/theme-header-rcm";

import { RankingWrapper } from "./style";
import { getTopListAction } from "../../store/actionCreators";
export default memo(function ZXRankingList() {
  // redux hooks
  const dispatch = useDispatch();
  // hooks
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);
  return (
    <RankingWrapper>
      <ZXThemeHeaderRCM title={"榜单"} />
    </RankingWrapper>
  );
});
