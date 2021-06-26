import request from './axios';

export function getSearchSongs(keywords, type, offset) {
  return request({
    url: "/search",
    params: {
      keywords,
      type,
      offset,
    }
  })
}