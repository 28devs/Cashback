$(".header__mobile-menu").on("click", function () {
  $(this).toggleClass("open")
})

var profileClasses = ["profile__progress--is-iron", "profile__progress--is-bronze", "profile__progress--is-silver", "profile__progress--is-gold"]

var i = 0;

setInterval(function () {
  $(".profile__progress").removeClass(profileClasses[i])
  $(".profile__progress").addClass(profileClasses[i + 1])
  i === 3 ? i = -1 : i++;
}, 1000)