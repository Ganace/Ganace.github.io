/**
 * `Category` expand
 */
function expandAll() {
  $(".collapsible-header").addClass("active");
  $(".collapsible").collapsible({ accordion: true });
}

function collapseAll() {
  $(".collapsible-header").removeClass("active");
  $(".collapsible").collapsible({ accordion: true });
}
// 目录默认折叠
$(document).ready(function() {
  $(".collapsible-header").removeClass("active");
  $(".collapsible").collapsible({ accordion: true });
});


/**
 * tags展开某个collapsible 
 */
function expandOne(tag) {
  // 显示隐藏
  expandAll();
  updateUrlParam('tag',tag);
  
  $(".collapsible").addClass("hidden");
  $('.tag-' + tag + ".collapsible").removeClass("hidden");
  $('.tag-btn').removeClass('active');
  $('.tag-btn-' + tag).addClass('active');
  // // 关闭所有tab
  // $(".collapsible-header").removeClass("active");
  // $(".collapsible").collapsible({ accordion: true });
  // // 展开单一tab
  // $(cla + "> li > .collapsible-header").addClass("active");
  // $(cla + ".collapsible").collapsible({ accordion: true });
}
// 展开params中的tag
function expandTag() {
  var tag = getUrlParam('tag');
  if(tag == null) return;
  expandOne(tag);
  // console.log($('.tag-' + tag + "> li > .collapsible-header"));
  // $('.tag-' + tag + "> li > .collapsible-header").addClass("active");
  // $('.tag-' + tag + ".collapsible").collapsible({ accordion: true });
}
$(document).ready(function() {
  expandTag();
})