/**
 * js修改URL参数
 * @author Ganace (ganace@foxmail.com)
 * @param {string} name 参数名*
 * @param {string} value 参数要更改的值*
 * @param {string} url 目标url字符串,默认为当前url
 */
function updateUrlParam(name, value, url) {
  if (!url) {
    url = document.location.href.toString();
  }
  var pattern = new RegExp(name + "=[^&]*");
  var replaceText = name + "=" + value;
  var flg = pattern.test(url);
  if (flg) {
    url = url.replace(pattern, replaceText);
  } else {
    if (url.match("[?]")) {
      url = url + "&" + replaceText;
    } else {
      url = url + "?" + replaceText;
    }
  }
  if (window.history) {
    window.history.replaceState(null, null, url);
  } else {
    location.href = url;
  }
}
/**
 * js获取url参数
 * @author Ganace (ganace@foxmail.com)
 * @param {string} name 参数名
 * @return 返回参数值
 */
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}
