
var feedbackLink = document.querySelector(".mail-btn");
var feedbackPopup = document.querySelector(".feedback");
var feedbackClose = feedbackPopup.querySelector(".feedback__close");
var feedbackForm = feedbackPopup.querySelector("form");

var feedbackName = feedbackPopup.querySelector("[name=name]");
var feedbackEmail = feedbackPopup.querySelector("[name=email]");
var storage = localStorage.getItem("feedbackName");

feedbackLink.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.add("feedback-show");
  feedbackName.focus();
  if (storage) {
    feedbackName.value = storage;
    feedbackEmail.focus();
    } else {
    feedbackName.focus();
    }

});

feedbackClose.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.remove("feedback-show");
  feedbackPopup.classList.remove("feedback-error");
});

feedbackForm.addEventListener("submit", function(event) {
    if (!feedbackName.value || !feedbackEmail.value){
    event.preventDefault();
    feedbackPopup.classList.add("feedback-error");
    }else {
      localStorage.setItem("feedbackName", feedbackName.value);
 }

});

window.addEventListener("keydown", function(event) {
   if (event.keyCode === 27) {
     if (feedbackPopup.classList.contains("feedback-show")) {
       feedbackPopup.classList.remove("feedback-show");
       // feedbackPopup.classList.remove("feedback-error");
     }
   }
});

var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".map-popup");
var mapClose = mapPopup.querySelector(".map-popup__close");

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("map-popup-show");
});


mapClose.addEventListener("click", function(event){
  event.preventDefault();
  mapPopup.classList.remove("map-popup-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("map-popup-show")) {
      mapPopup.classList.remove("map-popup-show");
    }
  }
})


var cartOpen = document.querySelectorAll(".buy-hover__btn"), i;
var cartPopup = document.querySelector(".cart-notification");
var cartClose = document.querySelector(".cart-notification-close");
var cartCancel = document.querySelector(".cart-cancel-btn");

for (i = 0; i < cartOpen.length; i++) {
  cartOpen[i].addEventListener("click", function (event) {
    event.preventDefault(event);
    cartPopup.classList.add("cart-notification-show");
  });
}

cartClose.addEventListener("click", function(event) {
   event.preventDefault();
   cartPopup.classList.remove("cart-notification-show");
 });

cartCancel.addEventListener("click", function (event) {
  event.preventDefault(event);
  cartPopup.classList.remove("cart-notification-show");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (cartPopup.classList.contains("cart-notification-show")) {
            cartPopup.classList.remove("cart-notification-show");
        }
    }
});

