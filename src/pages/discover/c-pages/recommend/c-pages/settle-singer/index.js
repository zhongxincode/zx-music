import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import {
  getSettleSingersAction
} from "../../store/actionCreators";
import {
  getSizeImage
} from "@/utils/format-utils";

import ZXThemeHeaderSmall from '@/components/theme-header-small';
import {
  SetterSongerWrapper
} from "./style";

export default memo(function ZXSettleSinger() {
  // redux
  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    settleSings: state.getIn(["recommend", "settleSingers"])
  }), shallowEqual);

  // hooks
  useEffect(() => {
    dispatch(getSettleSingersAction());
  }, [dispatch])

  return (
    <SetterSongerWrapper>
      <ZXThemeHeaderSmall title="入驻歌手" more="查看全部>" />
      <div className="singer-list">
        {
          state.settleSings.map((item, index) => {
            return (
              <a href="/singer" key={item.id} className="item">
                <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
                <div className="info">
                  <div className="title">{item.alias.join("") || item.name}</div>
                  <div className="name">{item.name}</div>
                </div>
              </a>
            )
          })
        }
      </div>
      <div className="apply-for">
        <a href="https://music.163.com/st/musician">申请成为网易音乐人</a>
      </div>
    </SetterSongerWrapper>
  )
})
