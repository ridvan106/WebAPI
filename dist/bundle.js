/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "<center ng-controller=\"listCtrl\">\r\n    <table style=\"width:500px;\" class=\"table table-hover\" ng-model=\"table\">\r\n\r\n\r\n        <tr style=\"border-bottom:1px solid gray; padding:10px;\">\r\n\r\n            <th style=\"padding:15px;text-align:center;\">Country</th>\r\n            <th style=\"padding:15px;text-align:center;\">Population</th>\r\n            <th style=\"padding:15px;text-align:center;\">Details</th>\r\n            <th style=\"padding:15px;text-align:center;\">Delete</th>\r\n            <th style=\"padding:15px;text-align:center;\">Update</th>\r\n        </tr>\r\n        <tr ng-repeat=\"x in list\" style=\"padding: 15px;\">\r\n            <td style=\"padding: 10px;\">{{x.name}}</td>\r\n            <td style=\"padding: 10px;\">{{x.population}}</td>\r\n            <td>\r\n\r\n                <button type=\"button\" class=\"btn btn-primary\"> <span class=\"glyphicon glyphicon-edit\"></span></button>\r\n\r\n            </td>\r\n            <td>\r\n                <button type=\"button\" id=\"delete\" class=\"btn btn-danger\" ng-click=\"delete(x.id,$index)\"> <span class=\"glyphicon glyphicon-remove\"></span></button>\r\n\r\n            </td>\r\n            <td>\r\n                <a href=\"#!edit/{{x.id}}\" class=\"btn btn-warning\" id=\"edit\"> <!--ng-click=\"guncelle($index)\"-->  <span class=\"glyphicon glyphicon-pencil\"></span></a>\r\n\r\n            </td>\r\n        </tr>\r\n      \r\n        \r\n        <tr style=\"border-top:solid 1px gray;padding:10px;\">\r\n            <td colspan=\"5\" style=\"padding:10px;\">\r\n                <a href=\"#!insert\" id=\"add\" class=\"btn btn-danger btn-lg\" style=\"width:100%;height:40px;\">\r\n                <span style=\"vertical-align:middle;\" class=\"glyphicon glyphicon-plus\"></span>\r\n                </a>\r\n            </td>\r\n        </tr>\r\n\r\n    </table>\r\n    \r\n\r\n</center>";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./Views/Angular/list.cshtml
var list_cshtml = __webpack_require__(0);
var list_cshtml_default = /*#__PURE__*/__webpack_require__.n(list_cshtml);

// CONCATENATED MODULE: ./Scripts/list.js
﻿
function listCtrl ($scope, httpS) {
    /*$http.get("http://localhost:53913/api/countries/")
        .then(function (response) {
            $scope.list = response.data;
        });*/
    //console.log(httpS.gets);
    httpS.gets().then((list) => {
        $scope.list = list;
    });

    

    $scope.delete = (x, indis) => {
        // alert(x);
        /*$http.delete("http://localhost:53913/api/countries/" + x).then(($response) => {
        });*/
        httpS.delete(x);
        $scope.list.splice(indis, 1);

    };

}


function directive(){
    return {
        template: list_cshtml_default.a,    //list.cshtml
        controller: "listCtrl"

    };   

}




// CONCATENATED MODULE: ./Scripts/edit.js
﻿//var app = angular.module("myApp");
 function editCtrl ($scope, httpS, $routeParams, $location) {

    /*$http.get("http://localhost:53913/api/countries/" + $routeParams.id)
        .then(function (response) {
            $scope.country = response.data;

        });*/
    httpS.getCountry($routeParams.id).then((country) => {
        $scope.country = country;
    });
    $scope.guncelle = () => {
        var obj = {
            id: $routeParams.id,
            name: $scope.country.name,
            population: $scope.country.population

        };
        /*$http.put("http://localhost:53913/api/countries/" + $routeParams.id, obj).then(function () {
            $location.path("/");
        });*/
        httpS.update($routeParams.id, obj).then((response) => {
            $location.path("/");
        });

    };



};


function edit(){
    return {
        templateUrl: "edit",    //edit.cshtml
        controller: "editCtrl"
    };

};


// CONCATENATED MODULE: ./Scripts/add.js
﻿//var app = angular.module("myApp", ["ngRoute"]);

function addCtrl ($scope, httpS, $routeParams, $location) {
    $scope.k = $scope.list;
    $scope.ekle = () => {
        $scope.k = 'functionda';
        var obj = {
            name: $scope.country,
            population: $scope.population
        };

       /* $http.post("http://localhost:53913/api/countries/", obj).then(function (response) {
            //console.log(response.data);
            $location.path("/");
            $scope.k = 'basarili';
        }).then(()=> {

            $scope.k = 'basarisiz';
        });*/

        httpS.addCountry(obj).then((response) => {
            $location.path("/");
        });
        
    }

}

function insert(){
    return {
        templateUrl: "add", //add.cshtml
        controller: "addCtrl"
    };


}


// CONCATENATED MODULE: ./Scripts/angular.js
﻿



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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vVmlld3MvQW5ndWxhci9saXN0LmNzaHRtbCIsIndlYnBhY2s6Ly8vLi9TY3JpcHRzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vU2NyaXB0cy9lZGl0LmpzIiwid2VicGFjazovLy8uL1NjcmlwdHMvYWRkLmpzIiwid2VicGFjazovLy8uL1NjcmlwdHMvYW5ndWxhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7O0FDbEZBLHdGQUF3RiwrR0FBK0csY0FBYyxnREFBZ0Qsa0JBQWtCLHdEQUF3RCxrQkFBa0IsMkRBQTJELGtCQUFrQix3REFBd0Qsa0JBQWtCLHVEQUF1RCxrQkFBa0IsNkZBQTZGLDZDQUE2QyxLQUFLLFFBQVEsK0NBQStDLEtBQUssY0FBYyw4Y0FBOGMsTUFBTSx3UEFBd1AsYUFBYSwwREFBMEQsMEdBQTBHLFlBQVksMkRBQTJELDBKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQzl0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRUFBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBLEtBQUs7Ozs7QUFJTDtBQUNBO0FBQ0E7QUFDQSxTQUFTLEVBQUU7QUFDWDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTTs7QUFFQTs7QUFFUTs7OztBQ2xDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLEVBQUU7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFQUFFO0FBQ1g7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNROzs7QUN2Q1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxTQUFTLEVBQUU7O0FBRVg7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDUTs7OztBQ25Dc0I7QUFDTDtBQUNDO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQixhQUFhO0FBQ2I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGNlbnRlciBuZy1jb250cm9sbGVyPVxcXCJsaXN0Q3RybFxcXCI+XFxyXFxuICAgIDx0YWJsZSBzdHlsZT1cXFwid2lkdGg6NTAwcHg7XFxcIiBjbGFzcz1cXFwidGFibGUgdGFibGUtaG92ZXJcXFwiIG5nLW1vZGVsPVxcXCJ0YWJsZVxcXCI+XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICA8dHIgc3R5bGU9XFxcImJvcmRlci1ib3R0b206MXB4IHNvbGlkIGdyYXk7IHBhZGRpbmc6MTBweDtcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDx0aCBzdHlsZT1cXFwicGFkZGluZzoxNXB4O3RleHQtYWxpZ246Y2VudGVyO1xcXCI+Q291bnRyeTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoIHN0eWxlPVxcXCJwYWRkaW5nOjE1cHg7dGV4dC1hbGlnbjpjZW50ZXI7XFxcIj5Qb3B1bGF0aW9uPC90aD5cXHJcXG4gICAgICAgICAgICA8dGggc3R5bGU9XFxcInBhZGRpbmc6MTVweDt0ZXh0LWFsaWduOmNlbnRlcjtcXFwiPkRldGFpbHM8L3RoPlxcclxcbiAgICAgICAgICAgIDx0aCBzdHlsZT1cXFwicGFkZGluZzoxNXB4O3RleHQtYWxpZ246Y2VudGVyO1xcXCI+RGVsZXRlPC90aD5cXHJcXG4gICAgICAgICAgICA8dGggc3R5bGU9XFxcInBhZGRpbmc6MTVweDt0ZXh0LWFsaWduOmNlbnRlcjtcXFwiPlVwZGF0ZTwvdGg+XFxyXFxuICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPHRyIG5nLXJlcGVhdD1cXFwieCBpbiBsaXN0XFxcIiBzdHlsZT1cXFwicGFkZGluZzogMTVweDtcXFwiPlxcclxcbiAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwicGFkZGluZzogMTBweDtcXFwiPnt7eC5uYW1lfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwicGFkZGluZzogMTBweDtcXFwiPnt7eC5wb3B1bGF0aW9ufX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lZGl0XFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwiZGVsZXRlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIG5nLWNsaWNrPVxcXCJkZWxldGUoeC5pZCwkaW5kZXgpXFxcIj4gPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiMhZWRpdC97e3guaWR9fVxcXCIgY2xhc3M9XFxcImJ0biBidG4td2FybmluZ1xcXCIgaWQ9XFxcImVkaXRcXFwiPiA8IS0tbmctY2xpY2s9XFxcImd1bmNlbGxlKCRpbmRleClcXFwiLS0+ICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wZW5jaWxcXFwiPjwvc3Bhbj48L2E+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgICAgXFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIDx0ciBzdHlsZT1cXFwiYm9yZGVyLXRvcDpzb2xpZCAxcHggZ3JheTtwYWRkaW5nOjEwcHg7XFxcIj5cXHJcXG4gICAgICAgICAgICA8dGQgY29sc3Bhbj1cXFwiNVxcXCIgc3R5bGU9XFxcInBhZGRpbmc6MTBweDtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjIWluc2VydFxcXCIgaWQ9XFxcImFkZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyIGJ0bi1sZ1xcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCU7aGVpZ2h0OjQwcHg7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOm1pZGRsZTtcXFwiIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICA8L3RyPlxcclxcblxcclxcbiAgICA8L3RhYmxlPlxcclxcbiAgICBcXHJcXG5cXHJcXG48L2NlbnRlcj5cIjsiLCLvu79cclxuZnVuY3Rpb24gbGlzdEN0cmwgKCRzY29wZSwgaHR0cFMpIHtcclxuICAgIC8qJGh0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo1MzkxMy9hcGkvY291bnRyaWVzL1wiKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAkc2NvcGUubGlzdCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgIC8vY29uc29sZS5sb2coaHR0cFMuZ2V0cyk7XHJcbiAgICBodHRwUy5nZXRzKCkudGhlbigobGlzdCkgPT4ge1xyXG4gICAgICAgICRzY29wZS5saXN0ID0gbGlzdDtcclxuICAgIH0pO1xyXG5cclxuICAgIFxyXG5cclxuICAgICRzY29wZS5kZWxldGUgPSAoeCwgaW5kaXMpID0+IHtcclxuICAgICAgICAvLyBhbGVydCh4KTtcclxuICAgICAgICAvKiRodHRwLmRlbGV0ZShcImh0dHA6Ly9sb2NhbGhvc3Q6NTM5MTMvYXBpL2NvdW50cmllcy9cIiArIHgpLnRoZW4oKCRyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIH0pOyovXHJcbiAgICAgICAgaHR0cFMuZGVsZXRlKHgpO1xyXG4gICAgICAgICRzY29wZS5saXN0LnNwbGljZShpbmRpcywgMSk7XHJcblxyXG4gICAgfTtcclxuXHJcbn1cclxuXHJcbmltcG9ydCBsaXN0IGZyb20gJy4uL1ZpZXdzL0FuZ3VsYXIvbGlzdC5jc2h0bWwnO1xyXG5mdW5jdGlvbiBkaXJlY3RpdmUoKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGVtcGxhdGU6IGxpc3QsICAgIC8vbGlzdC5jc2h0bWxcclxuICAgICAgICBjb250cm9sbGVyOiBcImxpc3RDdHJsXCJcclxuXHJcbiAgICB9OyAgIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgbGlzdEN0cmwsZGlyZWN0aXZlfVxyXG5cclxuIiwi77u/Ly92YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoXCJteUFwcFwiKTtcclxuIGZ1bmN0aW9uIGVkaXRDdHJsICgkc2NvcGUsIGh0dHBTLCAkcm91dGVQYXJhbXMsICRsb2NhdGlvbikge1xyXG5cclxuICAgIC8qJGh0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo1MzkxMy9hcGkvY291bnRyaWVzL1wiICsgJHJvdXRlUGFyYW1zLmlkKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuY291bnRyeSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgIH0pOyovXHJcbiAgICBodHRwUy5nZXRDb3VudHJ5KCRyb3V0ZVBhcmFtcy5pZCkudGhlbigoY291bnRyeSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5jb3VudHJ5ID0gY291bnRyeTtcclxuICAgIH0pO1xyXG4gICAgJHNjb3BlLmd1bmNlbGxlID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBvYmogPSB7XHJcbiAgICAgICAgICAgIGlkOiAkcm91dGVQYXJhbXMuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6ICRzY29wZS5jb3VudHJ5Lm5hbWUsXHJcbiAgICAgICAgICAgIHBvcHVsYXRpb246ICRzY29wZS5jb3VudHJ5LnBvcHVsYXRpb25cclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKiRodHRwLnB1dChcImh0dHA6Ly9sb2NhbGhvc3Q6NTM5MTMvYXBpL2NvdW50cmllcy9cIiArICRyb3V0ZVBhcmFtcy5pZCwgb2JqKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoXCIvXCIpO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICAgICAgaHR0cFMudXBkYXRlKCRyb3V0ZVBhcmFtcy5pZCwgb2JqKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAkbG9jYXRpb24ucGF0aChcIi9cIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG5cclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBlZGl0KCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiBcImVkaXRcIiwgICAgLy9lZGl0LmNzaHRtbFxyXG4gICAgICAgIGNvbnRyb2xsZXI6IFwiZWRpdEN0cmxcIlxyXG4gICAgfTtcclxuXHJcbn07XHJcbmV4cG9ydCB7IGVkaXRDdHJsLGVkaXR9XHJcbiIsIu+7vy8vdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKFwibXlBcHBcIiwgW1wibmdSb3V0ZVwiXSk7XHJcblxyXG5mdW5jdGlvbiBhZGRDdHJsICgkc2NvcGUsIGh0dHBTLCAkcm91dGVQYXJhbXMsICRsb2NhdGlvbikge1xyXG4gICAgJHNjb3BlLmsgPSAkc2NvcGUubGlzdDtcclxuICAgICRzY29wZS5la2xlID0gKCkgPT4ge1xyXG4gICAgICAgICRzY29wZS5rID0gJ2Z1bmN0aW9uZGEnO1xyXG4gICAgICAgIHZhciBvYmogPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICRzY29wZS5jb3VudHJ5LFxyXG4gICAgICAgICAgICBwb3B1bGF0aW9uOiAkc2NvcGUucG9wdWxhdGlvblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgLyogJGh0dHAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NTM5MTMvYXBpL2NvdW50cmllcy9cIiwgb2JqKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAkbG9jYXRpb24ucGF0aChcIi9cIik7XHJcbiAgICAgICAgICAgICRzY29wZS5rID0gJ2Jhc2FyaWxpJztcclxuICAgICAgICB9KS50aGVuKCgpPT4ge1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmsgPSAnYmFzYXJpc2l6JztcclxuICAgICAgICB9KTsqL1xyXG5cclxuICAgICAgICBodHRwUy5hZGRDb3VudHJ5KG9iaikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgJGxvY2F0aW9uLnBhdGgoXCIvXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0KCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiBcImFkZFwiLCAvL2FkZC5jc2h0bWxcclxuICAgICAgICBjb250cm9sbGVyOiBcImFkZEN0cmxcIlxyXG4gICAgfTtcclxuXHJcblxyXG59XHJcbmV4cG9ydCB7aW5zZXJ0LGFkZEN0cmx9XHJcbiIsIu+7v1xyXG5pbXBvcnQgeyBsaXN0Q3RybCwgZGlyZWN0aXZlIH0gZnJvbSAnLi9saXN0J1xyXG5pbXBvcnQgeyBlZGl0Q3RybCwgZWRpdCB9IGZyb20gJy4vZWRpdCdcclxuaW1wb3J0IHsgaW5zZXJ0LCBhZGRDdHJsIH0gZnJvbSAnLi9hZGQnXHJcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZShcIm15QXBwXCIsIFtcIm5nUm91dGVcIl0pO1xyXG5cclxuYXBwLmNvbmZpZygoJHJvdXRlUHJvdmlkZXIpID0+IHtcclxuICAgICRyb3V0ZVByb3ZpZGVyXHJcbiAgICAgICAgLndoZW4oXCIvXCIsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6IFwiPGxpc3Q+PC9saXN0PlwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICAud2hlbihcIi9lZGl0LzppZFwiLCB7XHJcblxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogXCI8ZWRpdD48L2VkaXQ+XCJcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICAud2hlbihcIi9pbnNlcnRcIiwge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogXCI8aW5zZXJ0PjwvaW5zZXJ0PlwiLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm90aGVyd2lzZShcclxuICAgICAgICAgICAgeyByZWRpcmVjdFRvOiAnLycgfVxyXG4gICAgICAgICk7XHJcbn0pO1xyXG5hcHAuc2VydmljZShcImh0dHBTXCIsXHJcbiAgICBmdW5jdGlvbiAoJGh0dHApIHtcclxuICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgZ2V0czogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MzkxMy9hcGkvY291bnRyaWVzLycpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlbGV0ZTogZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5kZWxldGUoXCJodHRwOi8vbG9jYWxob3N0OjUzOTEzL2FwaS9jb3VudHJpZXMvXCIgKyB4KS50aGVuKCgkcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uICh4LCBvYmopIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wdXQoXCJodHRwOi8vbG9jYWxob3N0OjUzOTEzL2FwaS9jb3VudHJpZXMvXCIgKyB4LCBvYmopLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldENvdW50cnk6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICAgICByZXR1cm4gICRodHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NTM5MTMvYXBpL2NvdW50cmllcy9cIiArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIisrXCIscmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhZGRDb3VudHJ5OiBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NTM5MTMvYXBpL2NvdW50cmllcy9cIiwgb2JqKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG5hcHAuY29udHJvbGxlcihcImxpc3RDdHJsXCIsIGxpc3RDdHJsKTtcclxuYXBwLmRpcmVjdGl2ZShcImxpc3RcIiwgZGlyZWN0aXZlKTtcclxuYXBwLmNvbnRyb2xsZXIoXCJhZGRDdHJsXCIsIGFkZEN0cmwpO1xyXG5hcHAuZGlyZWN0aXZlKFwiaW5zZXJ0XCIsIGluc2VydCk7XHJcbmFwcC5jb250cm9sbGVyKFwiZWRpdEN0cmxcIiwgZWRpdEN0cmwpO1xyXG5hcHAuZGlyZWN0aXZlKFwiZWRpdFwiLCBlZGl0KTsiXSwic291cmNlUm9vdCI6IiJ9