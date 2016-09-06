
var feedbackLink = document.querySelector(".mail-btn");
var feedbackPopup = document.querySelector(".feedback");
var feedbackClose = feedbackPopup.querySelector(".feedback__close");
var feedbackForm = feedbackPopup.querySelector("form");

var feedbackName = feedbackPopup.querySelector("[name=name]");
var feedbackEmail = feedbackPopup.querySelector("[name=email]");


feedbackLink.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.add("feedback-show");
  feedbackName.focus();
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
 }

});

window.addEventListener("keydown", function(event) {
   if (event.keyCode === 27) {
     if (feedbackPopup.classList.contains("feedback-show")) {
       feedbackPopup.classList.remove("feedback-show");
       feedbackPopup.classList.remove("feedback-error");
     }
   }
});


var cartLink = document.querySelectorAll(".buy-hover__btn");
var cartPopup = document.querySelector(".cart-notification");
var cartClose = cartPopup.querySelector(".cart-notification-close");

cartLink.addEventListener("click", function(event){
  event.preventDefault();
  cartPopup.classList.add("cart-notification-show");
});

cartClose.addEventListener("click", function(event) {
  event.preventDefault();
  cartPopup.classList.remove("cart-notification-show");
});




var link = document.querySelector(".map");
var popup = document.querySelector(".map-popup");
var close = popup.querySelector(".map-popup__close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("map-popup-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("map-popup-show");
});


// function initialize() {
//   var mapOptions = {
//     zoom: 15,
//     center: new google.maps.LatLng(59.93886, 30.32301)
//   }
//   var map = new google.maps.Map(document.getElementById('map-canvas'),
//                                 mapOptions);
//   var image = "http://i.neoseeker.com/mgv/499846/846/33/15847_179440563793_179437393793_2772323_4548598_n_icon.jpg";
//   var myLatLng = new google.maps.LatLng(59.93886, 30.32301);
//   var beachMarker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     icon: image
//   });
// }
// google.maps.event.addDomListener(window, 'load', initialize);
