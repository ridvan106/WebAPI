
import { listCtrl, directive } from './list'
import { editCtrl, edit } from './edit'
import { insert, addCtrl } from './add'
var app = angular.module("myApp", ["ngRoute"]);

app.config(($routeProvider) => {
    $routeProvider
        .when("/", {
            template: "<list></list>"
        })
        .when("/edit/:id", {

            template: "<edit></edit>"

        })
        .when("/insert", {
            template: "<insert></insert>",
        })
        .otherwise(
            { redirectTo: '/' }
        );
});
app.service("httpS",
    function ($http) {
        return {

            gets: function () {
                return $http.get('http://localhost:53913/api/countries/').then(function (response) {
                    
                    return response.data;
                });

            },
            delete: function (x) {
                return $http.delete("http://localhost:53913/api/countries/" + x).then(($response) => {
                });
            },
            update: function (x, obj) {
                return $http.put("http://localhost:53913/api/countries/" + x, obj).then(function () {
                    return true;
                });
            },
            getCountry: function (id) {
               return  $http.get("http://localhost:53913/api/countries/" + id)
                   .then(function (response) {
                       //console.log("++",response.data);
                       return response.data;

                    });
            },
            addCountry: function (obj) {
                return $http.post("http://localhost:53913/api/countries/", obj).then(function (response) {
                    return true;
                });
            }
        };
    });

app.controller("listCtrl", listCtrl);
app.directive("list", directive);
app.controller("addCtrl", addCtrl);
app.directive("insert", insert);
app.controller("editCtrl", editCtrl);
app.directive("edit", edit);