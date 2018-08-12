
function listCtrl ($scope, httpS) {
    $http.get("http://localhost:53913/api/countries/")
        .then(function (response) {
            $scope.list = response.data; // html içersindeki bind edilecek data
        });
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

import list from '../Views/Angular/list.cshtml';
function directive(){
    return {
        template: list,    //list.cshtml
        controller: "listCtrl"

    };   

}

export { listCtrl,directive}

