//var app = angular.module("myApp", ["ngRoute"]);

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
export {insert,addCtrl}
