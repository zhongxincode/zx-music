import React from "react";
import { shallowEqual, useSelector } from "react-redux";
// 校验是否是字符串类型

const isString = (str) =>
  Object.prototype.toString.call(str) === "[object String]";

const handleSearch = (text, keywords) => {
  // 校验类型
  if (!isString(text) || !isString(keywords)) {
    throw new Error("text or keywords should be string");
  }
  const reg = new RegExp(keywords, "ig");
  // 校验text是否包含keywords
  // if (!reg.test(text)) return text;
  // 将text 拆分成非keywords和keywords组成的数组
  const splitArr = text.split(reg);
  const arr = text.match(reg);

  return {
    splitArr,
    arr,
  };
};

export const useColorChange = (text) => {
  const { keywords } = useSelector(
    (state) => ({
      keywords: state.getIn(["search", "keywords"]),
    }),
    shallowEqual
  );
  // 校验类型
  if (!isString(text) || !isString(keywords)) {
    throw new Error("text or keywords should be string");
  }
  const reg = new RegExp(keywords, "ig");
  // 校验text是否包含keywords
  // if (!reg.test(text)) return text;
  // 将text 拆分成非keywords和keywords组成的数组
  const splitArr = text.split(reg);
  const arr = text.match(reg);

  return (
    <React.Fragment>
      {splitArr && splitArr[0]}
      {<span style={{ color: "#0c73c2", fontSize: "12px" }}>{arr}</span>}
      {splitArr && splitArr[1]}
    </React.Fragment>
  );
};

export default handleSearch;
