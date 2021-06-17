import * as actionTypes from "./constants";

import { getTopBanners } from "@/services/recommend";

const changeTopBannersAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BNNAERS,
  topBanners: res.banners,
});

export const getTopBannersAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannersAction(res));
    });
  };
};
