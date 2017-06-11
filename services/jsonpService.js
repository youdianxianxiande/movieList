/**
 * Created by Administrator on 2016/5/15.
 */
(function () {
    var myMovieJsonp=angular.module("myMovie.jsonp",[]);

    myMovieJsonp.factory("myMovieJsonp",function ($rootScope) {
        var count=0;

        return function (url,callback) {
            var scriptEle=document.createElement("script");
            var callbackName="__callback__"+count++;
            var jsonpUrl=url.replace("JSONP_CALLBACK",callbackName);
            scriptEle.src=jsonpUrl;

            window[callbackName]=function (data) {
                callback(data);
                $rootScope.$apply();
                window.document.body.removeChild(scriptEle);
            };

            window.document.body.appendChild(scriptEle);
        }
    });
})();