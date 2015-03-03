var app = angular.module('pantryCarApp', [
  'ngRoute'
]);

/* routes configuration */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/callback", {templateUrl: "partials/callback.html", controller: "PageCtrl"})
    .when("/vendor", {templateUrl: "partials/vendor.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    .when("/login", {templateUrl: "partials/login.html", controller: "LoginCtrl"})
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

app.controller('LoginCtrl', function (/* $scope, $location, $http */){
  var self = this;
  self.submit  = function(user){
    console.log("what is the data"+self.user);
  }
});

app.controller('CallbackCtrl', function (/* $scope, $location, $http */){
  var self = this;
  /* pulll some data *x */
  self.submit  = function(user){
    console.log("what is the data"+self.user);
  }
});

app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});