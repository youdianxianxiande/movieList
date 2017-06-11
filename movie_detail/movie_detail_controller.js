/**
 * Created by Administrator on 2016/5/15.
 */
(function () {
    var myMovieDetail=angular.module("myMovie.detail",["myMovie.model"]);

    myMovieDetail.controller("myMovieDetailController",function ($scope,$routeParams,myMovieModel) {
        var id=$routeParams.id;
        myMovieModel.getSubject(id,function (data) {
            $scope.data=data;
            console.log($scope.data);
        });
    });
})();