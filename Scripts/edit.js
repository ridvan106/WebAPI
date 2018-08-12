//var app = angular.module("myApp");
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
export { editCtrl,edit}
