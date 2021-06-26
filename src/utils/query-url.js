export const queryUrl = (url) => {
  const args = {};
  let strs = [];
  if (url.indexOf("?") !== -1) {
    let str = url.substr(1);
    strs = str.split("&");
    for (let i = 0; i < strs.length; i++) {
      args[strs[i].split("=")[0]] = decodeURIComponent(
        strs[i].split("=")[1]
      );
    }
  }
  return args;
};