import React, { memo, useEffect } from "react";
import { connect } from "react-redux";

import { getTopBannersAction } from "./store/actionCreators";
function ZXRecommend({getBanners}) {
  useEffect(() => {
    getBanners();
  }, [getBanners]);
  return <div>ZXAlbum</div>;
}

const mapStateToProps = (state) => ({
  topBanners: state.recommend.topBanners,
});

const mapDispatchToProps = (dispatch) => ({
  getBanners: () => {
    dispatch(getTopBannersAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(ZXRecommend));
