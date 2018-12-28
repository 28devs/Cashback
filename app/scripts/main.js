//
// DEV STAF
//

var profileClasses = ["profile__progress--is-iron", "profile__progress--is-bronze", "profile__progress--is-silver", "profile__progress--is-gold"]

var i = 0;

setInterval(function () {
  $(".profile__progress").removeClass(profileClasses[i])
  $(".profile__progress").addClass(profileClasses[i + 1])
  i === 3 ? i = -1 : i++;
}, 1000)

//
// Header mobile menu
//

$(".header__mobile-menu").on("click", function () {
  $(this).toggleClass("open")
})


//
// Accordion
//

$("[data-accordion]").on("click", function () {
  $(this).parent().toggleClass("open");
});

//
// Modal
//

var modalAnimateSpeed = 150;

$("[data-open-modal]").on("click", function () {
  var id = $(this).data("open-modal");
  var $modal = $("[data-modal=" + id + "]");
  showModal($modal);
});

$(".modal").on("click", function (e) {
  e.stopPropagation();
});

$(".modal__cover").on("click", function () {
  var $modal = $(this);
  hideModal($modal);
});

$(".modal__close").on("click", function () {
  var $modal = $(this).parents(".modal__cover");
  hideModal($modal);
});

$(".modal__cover").each(function () {
  $(this).addClass("load");
});

function hideModal(modal) {
  modal.removeClass("show");

  setTimeout(function () {
    $("body").css("overflow", "auto");
    $("body, .header, .modal__cover.show").css("padding-right", "0");
  }, modalAnimateSpeed)
}

function showModal(modal) {
  $("body").css("overflow", "hidden");
  $("body, .header, .modal__cover.show").css("padding-right", getScrollBarWidth() + "px");

  setTimeout(function () {
    modal.addClass("show");
  }, modalAnimateSpeed)
}

function getScrollBarWidth() {
  var $outer = $('<div>').css({
      visibility: 'hidden',
      width: 100,
      overflow: 'scroll'
    }).appendTo('body'),
    widthWithScroll = $('<div>').css({
      width: '100%'
    }).appendTo($outer).outerWidth();
  $outer.remove();
  return 100 - widthWithScroll;
};

//
// Toast
//

$("[data-toast]").on("click", function () {
  var text = $(this).data("toast");
  var classes = $(this).data("toast-class");
  classes = classes ? classes : "";

  M.toast({
    html: text,
    classes: classes
  });
});

//
// Popup
//

$("[data-popup]").each(function () {
  $(this).addClass("load");
});

$("[data-show-popup]").on("click", function () {
  var id = $(this).data("show-popup");
  var $popup = $("[data-popup=" + id + "]");

  $popup.addClass("show");
});

$("[data-hide-popup]").on("click", function () {
  var id = $(this).data("hide-popup");
  var $popup = $("[data-popup=" + id + "]");

  $popup.removeClass("show");
});

$(window).load(function () {
  $("body").addClass("load");
});