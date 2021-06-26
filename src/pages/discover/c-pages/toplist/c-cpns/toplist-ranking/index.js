import React, { useEffect, memo } from "react";
import classNames from "classnames";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getSizeImage } from "@/utils/format-utils";
import { changeCurrentIndexAction, getRankingListAction } from "../../store/actionCreators";

import { TopListRankingWrapper } from "./style";

export default memo(function HYTopRanking() {
  // redux
  const state = useSelector(
    (state) => ({
      topList: state.getIn(["toplist", "topList"]),
      currentIndex: state.getIn(["toplist", "currentIndex"]),
    }),
    shallowEqual
  );
  const currentIndex = state.currentIndex;
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    const id = state.topList[currentIndex] && state.topList[currentIndex].id;
    if (!id) return;
    dispatch(getRankingListAction(id));
  }, [state, dispatch, currentIndex]);

  // handle function
  const hanldeItemClick = (index) => {
    dispatch(changeCurrentIndexAction(index));
    const id = state.topList[currentIndex].id;
    dispatch(getRankingListAction(id));
  };

  return (
    <TopListRankingWrapper>
      {state.topList.map((item, index) => {
        let header;
        if (index === 0 || index === 4) {
          header = (
            <div className="header">
              {index === 0 ? "云音乐特色榜" : "全球媒体榜"}
            </div>
          );
        }
        return (
          <div key={item.id}>
            {header}
            <div
              className={classNames("item", { active: index === currentIndex })}
              onClick={(e) => hanldeItemClick(index)}
            >
              <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="update">{item.updateFrequency}</div>
              </div>
            </div>
          </div>
        );
      })}
    </TopListRankingWrapper>
  );
});
