import styled from "styled-components";

export const SongItemWrapper = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  padding: 12px 10px 10px 18px;
`;
export const SongItemLeft = styled.div`
  position: relative;
  width: 470px;

  .player-icon {
    position: absolute;
    top: 1px;
    left: 0;
    content: "";
    width: 17px;
    height: 17px;
    cursor: pointer;
    background: url(${require("@/assets/img/sprite_table.png").default}) 0 -103px no-repeat;
  }

  .text {
    position: relative;
    top: 0;
    left: 22px;
    display: inline-block;
    padding-right: 25px;
    width: auto;
    max-width: 100%;
    height: 20px;
  }

  .operate {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    display: none;
    width: 82px;

    .btn {
      width: 17px;
      height: 17px;
      margin-left: 8px;
      cursor: pointer;
    }

    .addto {
      position: relative;
      top: 2px;
      background-position: 0 -700px;
    }

    .favor {
      background-position: -297px -268px;
    }
  }

  &:hover {
    .operate {
      display: block;
    }
  }
`;
export const SongItemRight = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-evenly;

  .w1 {
    width: 15%;
    margin-right: 12px;
  }
  .w2 {
    width: 25%;
    margin-right: 12px;
    min-height: 16px;

    .w2-text {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;
