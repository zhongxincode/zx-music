import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import ZXThemeHeaderRCM from "@/components/theme-header-rcm";
import ZXTopRanking from "@/components/top-ranking";

import { RankingWrapper } from "./style";
import { getTopListAction } from "../../store/actionCreators";
export default memo(function ZXRankingList() {
  // redux hooks
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(["recommend", "upRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  // hooks
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <ZXThemeHeaderRCM title={"榜单"} moreLink={"/discover/toplist"} />
      <div className="tops">
        <ZXTopRanking info={upRanking} />
        <ZXTopRanking info={newRanking} />
        <ZXTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  );
});
