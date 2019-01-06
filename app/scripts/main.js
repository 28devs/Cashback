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

  $("[data-popup]").removeClass("show");
  $popup.addClass("show");
});

$("[data-hide-popup]").on("click", function () {
  var id = $(this).data("hide-popup");
  var $popup = $("[data-popup=" + id + "]");

  $popup.removeClass("show");
});


//
// Select
//

$("[data-select]").on("click", function () {
  $(this).toggleClass("open");
});

$("[data-select] [data-value]").on("click", function () {
  var value = $(this).data("value");
  var text = $(this).text();
  var $select = $(this).parents("[data-select]")
  var name = $select.data("select");

  $select.find("[data-select-text]").addClass("active");
  $select.find("[data-select-text]").text(text);

  $("input[name=" + name + "]").val(value);
});


//
// Mobile btns in all-shops page
//

$(".all-shops__aside-categories-btn").on("click", function () {
  $(".all-shops__aside-categories").toggleClass("show");
  $(".all-shops__aside-filters").removeClass("show");
});

$(".all-shops__aside-filters-btn").on("click", function () {
  $(".all-shops__aside-filters").toggleClass("show");
  $(".all-shops__aside-categories").removeClass("show")
});


//
// Mobile btn in faq page
//

$(".faq__aside-categories-btn").on("click", function () {
  $(".faq__aside-categories").toggleClass("show");
});


//
// Referral page
//

$(".refs__link-input input").on("click", function () {
  $(this).select();
});


//
// Init clipboard.js on copy btns
//

new ClipboardJS('.btn--copy');


//
// Phone inputs
//

var $inputPhones = $("[name=phone]");

Inputmask({
  mask: "+99 999 999 9999",
  placeholder: "",
  clearIncomplete: true,
}).mask($inputPhones);

$inputPhones.on("keyup blur", setCountryFlag);

$inputPhones.each(setCountryFlag);

function setCountryFlag() {
  var $input = $(this);
  var phoneCode = $input.val().slice(0, 3);

  if ($input.val().lenght < 3) {
    $input.parent().attr("data-flag", "")
  }

  switch (phoneCode) {
    case "+38":
      $input.parent().attr("data-flag", "ua")
      break;

    case "+79":
      $input.parent().attr("data-flag", "ru")
      break;

    case "+77":
      $input.parent().attr("data-flag", "kz")
      break;

    case "+37":
      $input.parent().attr("data-flag", "by")
      break;

    default:
      $input.parent().attr("data-flag", "")
      break;
  }
}