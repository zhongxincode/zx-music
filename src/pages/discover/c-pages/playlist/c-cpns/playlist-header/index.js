import React, { useState, memo } from "react";
import { useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import ZXPlayListCategory from "../playlist-category";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

export default memo(function ZXPlayListHeader() {
  // hooks
  const [showCategory, setShowCategory] = useState(false);

  // redux
  const { currentCategory } = useSelector(
    (state) => ({
      currentCategory: state.getIn(["playlist", "currentCategory"]),
    }),
    shallowEqual
  );

  const closeShowCategory = () => {
    setShowCategory(false);
  };

  useEffect(() => {
    if (showCategory) {
      document.addEventListener("click", closeShowCategory);
    }
    return () => document.removeEventListener("click", closeShowCategory);
  }, [showCategory]);

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <span className="title">{currentCategory}</span>
        <button
          className="select"
          onClick={(e) => setShowCategory(!showCategory)}
        >
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
        {showCategory ? (
          <ZXPlayListCategory setShowCategory={setShowCategory} />
        ) : null}
      </HeaderLeft>
      <HeaderRight>
        <button className="hot">热门</button>
      </HeaderRight>
    </HeaderWrapper>
  );
});
