describe("Test for directive list", function () {
    var $scope;
    var table;
       beforeEach(module("myApp"));
       beforeEach(inject(($q,httpS)=>{
        mocks = $q.when([
          {id:1,name:"england",population:125}, 
          {id:2,name:"france",population:12},
          {id:3,name:"turkey",population:15}
       
        ]);
    
       spy = spyOn(httpS,'gets').and.returnValue(mocks);
         
       }));
       beforeEach(inject(function($rootScope, $compile) {
        
           $scope = $rootScope.$new();
           var element = angular.element("<list></list>");//list directive 
           compiledElement = $compile(element)($scope);
           $scope.$digest();    //baglanti saglaniyo
           table = compiledElement.find('table');
       }));
   
      it("Test table in listCtrl", function() {          
        
        expect(table).toBeDefined();   //table tanımlı mı          
        
       });
       it("is there elemnts in table ?",()=>{
            expect(table.text()).toBeDefined();
        });
        it("is there table element is Treue (3)",()=>{
           tr = compiledElement.find("tr");
           expect(tr.length).toBe($scope.list.length+2);   //2 tane ekstra satır var header and plus button
        });
        it("is there specific element in table",()=>{
            td = compiledElement.find("td");
            expect(td[0].innerHTML).toBe('england');

        });
        it('is there edit button of edit',()=>{
          var td = angular.element(compiledElement.find("td")[4]).find('a').attr('href');
          expect(td).toBe('#!edit/1');  //edit linki var mı?
        });
        
   
    });  