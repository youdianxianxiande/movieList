/**
 * Created by Administrator on 2016/5/15.
 */
(function () {
    var app=angular.module("myMovie.app",["ngRoute","myMovie.model","myMovie.list","myMovie.detail"]);

    app.config(function ($routeProvider) {
        $routeProvider
                .when("/list/:category/:page",{
                    templateUrl: "./movie_list/movie_list_tpl.html",
                    controller: "myMovieListController"
                })
                .when("/detail/:id",{
                    templateUrl: "./movie_detail/movie_detail_tpl.html",
                    controller: "myMovieDetailController"
                })
                .otherwise({
                    redirectTo: "/list/top250/1"
            })

    });

})();