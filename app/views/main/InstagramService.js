

//used https://github.com/JoeKarlsson/Angular-Instafeed

(function() {
    var client_id = '64a12cb0db7b41da8cd2a8736770c466';
    var user_id = '464793431';
    var access_token = '464793431.64a12cb.9e7f0e0fd8ba4361be3205810e02cb73';

    // 176741645.d9ce90f.79a56ac1b0b14d74b76247524093a042

    //returns an array of objects from instagram api
    angular.module('butter').factory('instagram', ['$http', function($http) {
        return {
            fetchPhotos : function(callback) {
                var endpoint = 'https://api.instagram.com/v1/users/';
                endpoint += user_id;
                endpoint += '/media/recent/?';
                endpoint += '?count=10';
                endpoint += '&callback=JSON_CALLBACK';
                endpoint += '&access_token=' + access_token;
                $http.jsonp(endpoint)
                    .success(function(response) {
                        callback(response.data);
                    })
                    .error(function(xhr, status, err) {
                        console.error(status, err);
                    })
            }
        }
    }]);



})();