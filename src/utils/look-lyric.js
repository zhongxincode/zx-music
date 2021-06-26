
export const lookLyric = (lyrics) => {
  const lyric = lyrics["txt"];
  const { first, second } = lyrics["range"][0];
  const keyTxt = lyric.substring(first, second);
  const lyricArr = lyric.split("\n");
  for (let i = 0; i < lyricArr.length; i++) {
    if (lyricArr[i].includes(keyTxt)) {      
      return lyricArr.slice(i);
    }
  }
};
