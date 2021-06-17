import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTopBannersAction } from "./store/actionCreators";

function ZXRecommend() {
  // 组件和redux关联：获取数据和进行操作
  const { topBanners } = useSelector((state) => ({
    topBanners: state.recommend.topBanners,
  }));
  const dispatch = useDispatch();
  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannersAction());
  }, [dispatch]);
  return <div>ZXAlbum: {topBanners.length}</div>;
}

export default memo(ZXRecommend);
