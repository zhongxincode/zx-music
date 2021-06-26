import styled from "styled-components";

export const LyricCoverWrapper = styled.div`
  .lyric {
    font-size: 12px;
    padding: 0 0 20px 30px;

    .lyric-info {
      .text {
        margin: 6px 0;
      }
    }

    .lyric-control {
      position: relative;
      top: 0;
      left: -5px;
      color: #666666;
      background-color: #fff;
      text-decoration: underline;
      cursor: pointer;

      i {
        position: absolute;
        width: 11px;
        height: 8px;
        right: -8px;
        top: 2px;
        background-position: ${(props) => (props.isSpread ? "-45px" : "-65px")} -520px;
      }
    }
  }
`;
