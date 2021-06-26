import React, { memo, useRef, useEffect, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Input, Tabs } from "antd";

import { SearchWrapper } from "./style";
import ZXSearchSongs from "./c-pages/search-songs";
import ZXSearchArtists from "./c-pages/search-artists";
import ZXSearchAlbums from "./c-pages/search-albums";
import ZXSearchVideos from "./c-pages/search-videos";
import ZXSearchLyrics from "./c-pages/search-lyrics";
import ZXSearchPlayList from './c-pages/search-playlist'
import { changeKeywordsAction, changeTypeAction } from "./store/actionCreator";
import { useState } from "react";

const { TabPane } = Tabs;

export default memo(function ZXSearch() {
  const myInputRef = useRef();
  const [scRes, setScRes] = useState([999, "首歌曲"]);
  const { keywords, curType } = useSelector(
    (state) => ({
      keywords: state.getIn(["search", "keywords"]),
      curType: state.getIn(["search", "curType"]),
    }),
    shallowEqual
  );
  useEffect(() => console.log(), [curType]);
  const dispatch = useDispatch();
  const tabsChange = (e) => {
    dispatch(changeTypeAction(e));
  };
  const history = useHistory();
  const search = (e) => {
    let value = e.target.value;
    if (value === "" || value === keywords) return;
    dispatch(changeKeywordsAction(value));
    history.push(`/search?keywords=${value}`);
  };
  const searchByClick = (e) => {
    e.preventDefault();
    const value = myInputRef.current.state.value;
    if (value === "" || value === keywords) return;
    dispatch(changeKeywordsAction(value));
    history.push(`/search?keywords=${value}`);
  };
  const showRes = useCallback((...scRes) => {
    setScRes(scRes);
  }, []);

  return (
    <SearchWrapper className={"wrap-v2"}>
      <div className={"pgsrch"}>
        <Input
          className={"srch"}
          bordered={false}
          onPressEnter={(e) => search(e)}
          ref={myInputRef}
        />
        <a href="#/" className={"btn"} onClick={(e) => searchByClick(e)}>
          搜索
        </a>
      </div>
      <div className={"wrap-v3 search-res"}>
        <div>
          搜索"{keywords}"，找到
          {<em style={{ color: "#c20c0c" }}> {scRes[0]} </em>}
          {scRes[1]}
        </div>
      </div>
      <Tabs
        size={"large"}
        defaultActiveKey={curType}
        centered={true}
        tabBarStyle={{ width: "100%" }}
        className={"wrap-v3 center-text"}
        tabBarGutter={60}
        onChange={(e) => tabsChange(e)}
      >
        <TabPane tab="单曲" key="1">
          {curType === "1" ? <ZXSearchSongs showRes={showRes} /> : <div></div>}
        </TabPane>
        <TabPane tab="歌手" key="100">
          <ZXSearchArtists showRes={showRes} />
        </TabPane>
        <TabPane tab="专辑" key="10">
          <ZXSearchAlbums showRes={showRes} />
        </TabPane>
        <TabPane tab="视频" key="1014">
          <ZXSearchVideos showRes={showRes} />
        </TabPane>
        <TabPane tab="歌词" key="1006">
          <ZXSearchLyrics showRes={showRes} />
        </TabPane>
        <TabPane tab="歌单" key="1000">
          <ZXSearchPlayList showRes={showRes} />
        </TabPane>
        <TabPane tab="声音主播" key="1009">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="用户" key="1002">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </SearchWrapper>
  );
});
