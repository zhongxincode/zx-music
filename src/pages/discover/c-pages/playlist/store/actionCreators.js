import * as actionTypes from './constants';
import { PER_PAGE_NUMBER } from './constants';

import {
  getSongCategory,
  getSongCategoryList
} from "@/services/playlist";
import { 
  handleSongsCategory
} from "@/utils/handle-data";

const changeCategoryAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY,
  category: res
})

const changeSongListAction = (res) => ({
  type: actionTypes.CHANGE_CATEGORY_SONGS,
  categorySongs: res
})

export const changeCurrentCategoryAction = (name) => ({
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory: name
})

export const getCategoryAction = () => {
  return dispatch => {
    getSongCategory().then(res => {
      const categoryData = handleSongsCategory(res);
      dispatch(changeCategoryAction(categoryData))
    })
  }
}

export const getPlayListAction = (page) => {
  return (dispatch, getState) => {
    // 1.获取currentCategory
    const name = getState().getIn(["playlist", "currentCategory"]);

    // 2.获取数据
    getSongCategoryList(name, page * PER_PAGE_NUMBER).then(res => {
      dispatch(changeSongListAction(res));
    })
  }
}
