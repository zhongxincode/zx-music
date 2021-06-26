import {useState,useEffect} from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getSearchAction } from "./store/actionCreator";

export const useSearch = (searchParam) => {
  const [offset, setOffset] = useState(0);
  const {
    keywords,
    searchRes,
    curType,
  } = useSelector(
    (state) => ({
      keywords: state.getIn(["search", "keywords"]),
      curType: state.getIn(["search", "curType"]),
      searchRes: state.getIn(["search", searchParam]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchAction(keywords, curType, offset));
  }, [dispatch, keywords, curType, offset]);

  return {
    keywords,
    curType,
    searchRes,
    offset,
    setOffset,
  }
}