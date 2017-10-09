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