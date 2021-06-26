import styled from "styled-components";

export const PLIWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding-bottom: 15px;

  .plp {
    width: 50px;

    .plp-icon {
      margin-left: 20px;
      margin-top: 5px;
      display: inline-block;
      width: 17px;
      height: 17px;
      cursor: pointer;
      background-position: 0 -103px;
    }
  }

  .pl-name {
    position: relative;
    width: 350px;

    .pln {
      display: inline-block;
      padding-left: 20px;
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
  }
  .pl-count {
    width: 50px;
    color: #999999;
  }
  .pl-creator {
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .pl-book {
    width: 100px;
    color: #999999;
  }
  .pl-scount {
    width: 100px;
    color: #999999;
  }
  &:hover {
    .operate {
      display: block;
    }
  }
`;
