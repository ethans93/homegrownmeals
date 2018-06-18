'use strict';

let IndexCtrl = function ($rootScope, $scope, $location, $window) {

    /*Closes navbar after selection*/
    $('#mainNav a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });
    $(".nav a").on("click", function () {
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
    $scope.$on('$locationChangeSuccess', function () {
        $scope.currentPage = $location.path();
    });

};

module.exports = IndexCtrl;
