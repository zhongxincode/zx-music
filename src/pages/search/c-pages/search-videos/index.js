import React, { memo } from "react";
import { useSearch } from "../../hooks";
import { SVWrapper } from "./style";
import ZXVideoCover from "@/components/video-cover";
export default memo(function ZXSearchVideos({showRes}) {
  const {
    // eslint-disable-next-line no-unused-vars
    searchRes: { videos, videoCount },
  } = useSearch("searchVideosRes");
  // showRes(videoCount, "个视频");
  showRes(30, "个视频");

  return (
    <SVWrapper>
      <div className="video">
        {videos.map((item, index) => (
          <ZXVideoCover key={item.id} info={item} />
        ))}
      </div>
    </SVWrapper>
  );
});
