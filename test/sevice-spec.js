/*
describe('My controller', function () {
  var $controller;

  beforeEach(module('myApp'));

  beforeEach(inject(function (_$controller_) {
      $controller = _$controller_;
  }));

  it('greets', function () {
      var $scope = {list:["asd",123]};
      var controller = $controller('addCtrl', {
          $scope: $scope
      });
      $scope.country = "aaa";
      $scope.population = 123;
      console.log($scope.k);
      $scope.ekle();
      expect($scope.k).toBe(undefined);
      console.log($scope.k);
  })
})

*///*********************************************************************************************************************** */
/*it('Test Spy',()=>{
    var spy = spyOn(ulke,'population').and.returnValue(10);
    ulke.population();
    
    expect(ulke.population()).toBe(10);
    expect(spy).toHaveBeenCalled();

  });
  /* SPY ile test *************************************************************************** */
  /*it('testCallCount',()=>{
    $httpBackend.expectGET('http://localhost:53913/api/countries/').respond(200, [{name:"england",population:125}, {name:"france",population:12}, {name:"turkey",population:15}]);
    createController();
    $httpBackend.flush();
    var spy = spyOn(ulke,'population').and.returnValue(1200);
    $scope.list.push(ulke)

    expect($scope.list.length).toBe(4); // ulke eklendi mi
    expect($scope.list[3].population()).toBe(1200); // spy degeri degismismi
    expect(ulke.population.calls.count()).toBe(1); // 1 kere spy cagrıldı
    expect(ulke.population.calls.any()).toBe(true); // spy en az bir kez cagrildi mi?
    expect(spy).toHaveBeenCalled(); // spy hic cagrildimi
    

  });*/

///*********************************************************************************************************************** */
var ulke = { // ulke objesi
  id:12,
  name: "adadas",
  population :123
  
};
var $controller,httpS,mocks;

describe('tesiting my service and listController', function () {
  

  beforeEach(module('myApp'));

  beforeEach(inject(function($controller, $rootScope,_httpS_,$q) {
    $scope = $rootScope.$new();
    httpS = _httpS_;
    mocks = $q.when([
      {id:1,name:"england",population:125}, 
      {id:2,name:"france",population:12},
      {id:3,name:"turkey",population:15}
   
    ]);

    spy = spyOn(httpS,'gets').and.returnValue(mocks);
    spy2 = spyOn(httpS,'addCountry').and.returnValue((ulke)=>{mocks.push(ulke)});
    createController = function() {
      return $controller('listCtrl', {
        $scope: $scope
      });
    };
    createControllerAdd = function() {
      return $controller('addCtrl', {
        $scope: $scope
      });
    };
    httpS.gets(); //spy cagrildi
   httpS.addCountry(ulke); // ulke eklendi
  }));
 


  it('Test method of httpS service methods', function () {
    
    
    
    expect(httpS.gets).toBeDefined(); // httpS.gets() burada da bir kez çağrılır call first
    expect(httpS.getCountry).toBeDefined();
    expect(httpS.addCountry).toBeDefined(); 
   

  });
  it('testing $scope.list and spy',()=>{
    createController(); //controller created
    $scope.$apply();  // consola yazılması için gerekli         
   
    expect(spy).toHaveBeenCalled(); //spy cagrildimi
    expect(httpS.gets.calls.any()).toBe(true); // en az bir kere kullanıldı mı call second
    expect(httpS.gets.calls.count()).toBe(2); //cagrilma sayisi 3 olmali    
    expect($scope.list).toBeDefined();
    expect($scope.list.length).toBe(3);
    expect($scope.list[0].name).toBe("england");

  });
  it('testing spy2 and AddCountry with parameter ulke',()=>{
    
     
   createControllerAdd();
   $scope.$apply();   
   expect(spy2).toHaveBeenCalledWith(ulke); // call with parameter (1)
   expect(httpS.addCountry.calls.any()).toBe(true);     
    

  });

});
//**************************************************  *********************************************************** */
