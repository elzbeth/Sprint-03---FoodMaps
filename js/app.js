//DATA//
restaurants = [
  {
    "name": "Goethe-Institut Mexiko",
    "img": "assets/images/01.jpg",
    "address": "Tonalá 43, Roma Nte., 06700 Ciudad de México, CDMX",
    "category": "Mexicana",
    "averageCost": "$150",
    "rating": "5",
    "phone": "52453514",
    "caption": "Super!",
    "reviews": "review",
    "coordinates": {
      lng: -99.1637556,
      lat: 19.4201687
    }
  },
  {
    "name": "Huset",
    "img": "assets/images/02.jpg",
    "address": "Colima 256, Roma Nte., 06700 Ciudad de México, CDMX",
    "category": "Gourmet",
    "averageCost": "350",
    "rating": "5",
    "phone": "52433514",
    "caption": "Amazing!",
    "reviews": "review",
    "coordinates": {
      lng: -99.1640023,
      lat: 19.4192023
    }
  },
  {
    "name": "Yuban",
    "img": "assets/images/03.jpg",
    "address": "Colima 268, Roma Nte., 06700 Ciudad de México, CDMX",
    "category": "Mexicana",
    "averageCost": "500",
    "rating": "5",
    "phone": "52355345",
    "caption": "Delicious!",
    "reviews": "review",
    "coordinates": {
      lng: -99.1640023,
      lat: 19.4192023
    }
  },
  {
    "name": "Butcher & Sons Roma",
    "img": "assets/images/04.jpg",
    "address": "Orizaba 87, Roma Nte., 06700 Ciudad de México, CDMX",
    "category": "Hamburguesería",
    "averageCost": "500",
    "rating": "5",
    "phone": "545345165",
    "caption": "Superb!",
    "reviews": "review",
    "coordinates": {
      lng: -99.1611437,
      lat: 19.4193863
    }
  },
  {
    "name": "Pan D'Monium Antojeria Vegana",
    "img": "assets/images/05.jpg",
    "address": "Orizaba s/n, Roma Norte, Roma Nte., 06700 Cuauhtémoc, CDMX",
    "category": "Vegana",
    "averageCost": "250",
    "rating": "5",
    "phone": "787246765",
    "caption": "Fantastic!",
    "reviews": "review",
    "coordinates": {
      lng: -99.1610123,
      lat: 19.4197784
    }
  },
  {
    "name": "Burro De Oro",
    "img": "assets/images/01.jpg",
    "address": "Orizaba y Colima, Roma Norte, Cuauhtémoc, 06700 Ciudad de México, D.F., Roma Nte., 06700 Ciudad de México, CDMX",
    "category": "Burritos",
    "averageCost": "150",
    "rating": "5",
    "phone": "534587125",
    "caption": "Great!",
    "reviews": "review",
    "coordinates": {
      lng: -99.1606958,
      lat: 19.41986
    }
  }
];

// Loading Document//
function loadPage(){
  splash();
  restaurantsDirectory(restaurants);
  //Modals and Search//
  $('#search').keyup(restaurantsFilter);
  $('.modal').modal();
  //Modals and Select End//
}
//Splash/Main Page//
function splash(){
  $("#main-page").hide();
  $('#splash').fadeOut(2000, function() {
    $("#splash").remove();
    $("#main-page").fadeIn(1000);
  });
}
//Splash/Main Page End//
//Directory//
var restaurantsDirectory = function(array){
  var cardTemplate = '<div class="card-panel col s10 offset-s1 m5 offset-m1 l10 offset-l1">' +
  '<div id="restaurant-title" class="card-title text-black">_NAME_</div>' +
  '<div id="restaurant-cover" class="card-image">' +
  '<img id="restaurant-img" src="_SRC_" class="responsive-img"/>' +
  '<div id="restaurant-caption" class="hide">_CAPTION_</div>' +
  '</div>' +
  '<div class="card-content">' +
  '<navbar id="restaurant-nav">' +
  '<a id="more" class="btn btn-flat modal-trigger" data-address="address" data-category="category" data-phone="phone" data-average="averageCost" href="#modal-info">More info</a>' +
  '<a id="rating" class="btn btn-flat modal-trigger" data-rating="rating" href="#modal-rating">Rating</a>' +
  '<a id="reviews" class="btn btn-flat modal-trigger" data-reviews="reviews" href="#modal-reviews">Reviews</a>' +
  '</navbar>'
  '</div>'
  '</div>'
  '</div>';

  var restaurantCard = "";

  array.forEach(function(restaurant){

    restaurantCard += cardTemplate.replace('_NAME_', restaurant.name.toUpperCase())
    .replace('_SRC_', restaurant.img)
    .replace('_CAPTION_', restaurant.caption.toUpperCase())
    .replace("__lat__", restaurant.coordinates.lat)
    .replace("__lng__", restaurant.coordinates.lng)
    .replace("__name__", restaurant.name.toUpperCase())
    .replace("__src__", restaurant.img)
    .replace("__price__", restaurant.price)
    .replace("__category__", restaurant.category)
    .replace("__address__", restaurant.address);
  });

  $('#restaurants-container').append(restaurantCard);

};
//Showing Restaurnats End//

// Filtering//
var restaurantsFilter = function () {
  if ($('#search').val().trim().length > 0) {
    var restaurantSearch = $('#search').val().toLowerCase();
    console.log('control 1');
    var restaurantsFiltered= restaurants.filter(function(restaurant) {
      console.log('control 2');
      return restaurant.name.toLowerCase().indexOf(restaurantSearch) >= 0;
    });
    restaurantsDirectory(restaurantsFiltered);
    console.log('control 3');
  } else {
    $('#results').empty();
    $('#search').empty();
    restaurantsDirectory(restaurants);
    console.log('control 5');
  }
  console.log('control 6');
};
//Filtering End//

// Modal More Info
var modalInfo = function() {
  var name = $(this).data('name');
  var price = $(this).data('price');
  var category = $(this).data('category');
  var address = $(this).data('address');
  var phone = $(this).data('phone');
  var cost = $(this).data('averageCost');

  $('#info-title').text(name);
  $('#info-map').text(map);
  $('#info-price').text(price);
  $('#info-category').text(category);
  $('#info-address').text(address);
  $('#info-phone').text(phone);
  $('#info-cost').text(cost);
}

// Modal Rating
var modalRating = function() {
  var rating = 0;
  var avgRating =0;
  var averageRatingDisplay = $(this).data('rating');

  //**Create a function for add user's rate to specific restaurant
  //rating and calculate the
  // average dividing it by total ratings



}
//Rating Stars//
var userStars = $('.user-star');
var result = $("#result");
var userRate = $('#user-rating-btn');
var ratingThanks =$('#rating-thanks');
var ratingsContainer = $('#ratings-container');
ratingThanks.hide();

userStars.on("click", function(){
  $(userStars).removeClass("selected-star");
  $(userStars).removeClass("secondary-star");
  $(this).addClass("selected-star");
  $(this).prevAll().addClass("secondary-star");
  result.css("display", "block");
  let x = $( "input[type=radio][name=star]:checked" ).val();
  result.html(`You picked ${x} stars`);

})

userRate.click(function() {
  // alert("Thank you for your feedback!");
  ratingsContainer.hide()
  ratingThanks.show();
  userRate.remove();
  result.remove();
});
//Rating Stars End//

// Modal Review
//Writing and Sending Reviews//
var $writeReview = $('#write-review-btn');
var $reviewInput = $('#review-input');
var $sendingReview = $('#sending-review');
var $reviewSent = $('#review-sent');
var $reviewThanks =$('#review-thanks');
$reviewThanks.hide();
$reviewSent.hide();
$reviewInput.hide();


$writeReview.click(function(){
  $reviewInput.show();
})

$sendingReview.click(function() {
  $reviewThanks.show();
  $sendingReview.remove();
  $writeReview.hide();
  $reviewInput.remove();
  $reviewSent.show();
});

//Writing and Sending Reviews End//


var modalShowingReviews = function() {
  //Create a function to show total reviews about each restaurant
}

//Mouseover Event (show caption)//





//Mouseover Event End//

//Map//
// var options = {
//     zoom: 8,
//     center: new google.maps.LatLng(19.2, -61.4),
//     mapTypeId: google.maps.MapTypeId.SATELLITE,
//     backgroundColor: '#ffffff',
//     noClear: true,
//     disableDefaultUI: true,
//     keyboardShortcuts: false,
//     disableDoubleClickZoom: true,
//     draggable: false,
//     scrollwheel: false,
//     draggableCursor: 'move',
//     draggingCursor: 'move',
//     mapTypeControl: true,
//
//     mapTypeControlOptions: {
//       style: google.maps.MapTypeControlStyle.HORIZONTAL_MENU,
//       position: google.maps.ControlPosition.TOP_LEFT,
//       mapTypeIds: [
//         google.maps.MapTypeId.SATELLITE
//       ]
//     },
//     navigationControl: true,
//     streetViewControl: true,
//     navigationControlOptions: {
//       position: google.maps.ControlPosition.TOP_RIGHT,
//       style: google.maps.NavigationControlStyle.ANDROID
//     },
//     scaleControl: true,
//     scaleControlOptions: {
//       position: google.maps.ControlPosition.TOP_LEFT,
//       style: google.maps.ScaleControlStyle.DEFAULT
//     }
//   };
//
//   var map = new google.maps.Map(document.getElementById('map'), options);
//
//   map.setOptions({
//     zoom: 10,
//     center: new google.maps.LatLng(18.17, -66.42),
//     mapTypeId: google.maps.MapTypeId.TERRAIN,
//     keyboardShortcuts: true,
//     disableDoubleClickZoom: false,
//     draggable: true,
//     scrollwheel: true,
//     draggableCursor: 'hand',
//     draggingCursor: 'hand',
//     mapTypeControlOptions: {
//       style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
//       position: google.maps.ControlPosition.TOP_RIGHT,
//       mapTypeIds: [
//         google.maps.MapTypeId.ROADMAP,
//         google.maps.MapTypeId.SATELLITE
//       ]
//     },
//     navigationControlOptions: {
//       position: google.maps.ControlPosition.TOP_LEFT,
//       style: google.maps.NavigationControlStyle.ZOOM_PAN
//     },
//     scaleControlOptions: {
//       position: google.maps.ControlPosition.BOTTOM_LEFT,
//       style: google.maps.ScaleControlStyle.DEFAULT
//     }
//   });
//
//   map.setZoom(9);
//   var zoomLevel = map.getZoom();
//
//   map.setCenter(new google.maps.LatLng(18.17, -66.3));
//   var centerOfMap = map.getCenter();
//
//   map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
//   var mapTypeIdOfMap = map.getMapTypeId();

//Map End//






$(document).on('click','.modal');
$(document).ready(loadPage);
