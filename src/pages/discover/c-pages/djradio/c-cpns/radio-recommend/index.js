import React, { useEffect, memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getRadioRecommendAction } from "../../store/actionCreators";

import ZXThemeHeaderNormal from "@/components/theme-header-normal";
import ZXRadioRecomendCover from "@/components/radio-recommend-cover";
import { RecommendWrapper } from "./style";

export default memo(function ZXRadioRecommend() {
  // redux
  const { currentId, recommends } = useSelector(
    (state) => ({
      currentId: state.getIn(["djradio", "currentId"]),
      recommends: state.getIn(["djradio", "recommends"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    if (currentId === 0) return;
    dispatch(getRadioRecommendAction(currentId));
  }, [dispatch, currentId]);

  return (
    <RecommendWrapper>
      <ZXThemeHeaderNormal title="优秀新电台" />
      <div className="radio-list">
        {recommends.slice(0, 5).map((item) => {
          return <ZXRadioRecomendCover info={item} key={item.id} />;
        })}
      </div>
    </RecommendWrapper>
  );
});
