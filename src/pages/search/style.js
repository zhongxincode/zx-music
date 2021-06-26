import styled from "styled-components";

export const SearchWrapper = styled.div`
  padding-top: 40px;
  background-color: #fff;

  .search-res {
    color: #999999;
  }

  .pgsrch {
    position: relative;
    width: 420px;
    height: 40px;
    margin: 0 auto;
    margin-bottom: 40px;
    padding: 10px;
    background-position: 0 0;
    z-index: 10;
    background: url(${require("@/assets/img/sprite.png").default}) 0 0 no-repeat;

    .srch {
      position: absolute;
      width: 320px;
      height: 17px;
      top: 12px;
      left: 20px;
      padding: 0;
      background: #fff;
      font-size: 12px;
      /* border: none; */
    }

    .btn {
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      height: 40px;
      text-indent: -9999px;

      &:hover {
        background: url(${require("@/assets/img/sprite.png").default}) -430px 0 no-repeat;
      }
    }
  }

`;
