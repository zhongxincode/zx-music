import styled from "styled-components";

export const VideoCoverWrapper = styled.div`
  width: 160px;
  margin-bottom: 20px;
  position: relative;

  .video-data {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 12px;
    color: #fff;
    line-height: 20px;

    .video_icon {
      position: relative;
      top: 0.6px;
      right: 2px;
      display: inline-block;
      width: 15px;
      height: 10px;
      background-position: -60px -310px;
    }
  }

  .video-time {
    position: absolute;
    color: #fff;
    font-size: 12px;
    top: 70px;
    left: 4px;
  }

  .text-hide {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }

  .video-title {
    font-size: 14px;
    font-weight: normal;

    .mv-icon {
      position: relative;
      top: 2px;
      display: inline-block;
      width: 26px;
      height: 16px;
      background-position: -270px -480px;
      margin-right: 4px;
    }
  }
`;
