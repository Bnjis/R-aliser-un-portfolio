$(document).ready(function() {
  let $body = $("body");

  $body.on("click", ".menu-btn", function(event) {
    event.preventDefault();
    $body.toggleClass("is-opened");
  });
});
