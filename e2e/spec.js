describe('Add some country in data table', function () {
    it('should add country', function () {

        browser.get('http://localhost:53913/countries');
        element(by.id('add')).click();
        element(by.model('country')).sendKeys('asd');
        element(by.model('population')).sendKeys(1250);
        browser.sleep(500);
        element(by.id('insert')).click();       
    });
  
});

describe('Testing edit button', () => {
    it("edit last row", () => {
        var rows = element.all(by.tagName("tr"));

        rows.count().then((count) => {
            var temp = rows.get(count-2);
            temp.all(by.id('edit')).click();
            browser.sleep(500);
            expect(element(by.model("country.name")).getAttribute('value')).toBe('asd');
            expect(element(by.model("country.population")).getAttribute('value')).toBe('1250');

            element(by.model("country.name")).clear();
            element(by.model("country.name")).sendKeys('added value');
            element(by.model("country.population")).clear();
            element(by.model("country.population")).sendKeys(8080);
            browser.sleep(500);
            element(by.id("Eadd")).click();

            
        })
        

    });


});

describe('Testing edit button', () => {
    it("Delete last row", () => {
        browser.get('http://localhost:53913/countries');
        var rows = element.all(by.tagName("tr"));

        rows.count().then((count) => {
            var temp = rows.get(count - 2);
            browser.sleep(1000);
            temp.all(by.id('delete')).click();
        });

    });

});