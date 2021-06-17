import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getTopBannersAction } from "./store/actionCreators";

function ZXRecommend() {
  // 组件和redux关联：获取数据和进行操作
  // useSelector 默认为 === 比较
  const { topBanners } = useSelector((state) => ({
    // topBanners: state.get("recommend").get("topBanners"),
    topBanners: state.getIn(["recommend", "topBanners"]),
    // shallowEqual 进行浅层比较
  }), shallowEqual);
  const dispatch = useDispatch();
  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannersAction());
  }, [dispatch]);
  return <div>ZXAlbum: {topBanners.length}</div>;
}

export default memo(ZXRecommend);
