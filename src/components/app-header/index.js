import React, { memo } from "react";

import { NavLink, useHistory } from "react-router-dom";
import { headerLinks } from "@/services/local-data";
import { AppHeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  changeKeywordsAction,
  changeTypeAction,
} from "../../pages/search/store/actionCreator";

export default memo(function ZXAppHeader() {
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className={"sprite_01 icon"}></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {item.title}
        </a>
      );
    }
  };

  const history = useHistory();
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    const value = e.target.value;
    if (value) {
      dispatch(changeKeywordsAction(value));
      dispatch(changeTypeAction("1"));
      history.push(`/search?keywords=${value}`);
    }
  };

  return (
    <AppHeaderWrapper>
      <div className="wrap-v1 content">
        <HeaderLeft>
          <a className="logo sprite_01" href="#/">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className={"select-item"} key={item.title}>
                  {showSelectItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className={"search"}
            placeholder={"音乐/视频/电台/用户"}
            prefix={<SearchOutlined />}
            onPressEnter={(e) => handleSearch(e)}
          />
          <div className="center">创作者中心</div>
          <div className="">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </AppHeaderWrapper>
  );
});
