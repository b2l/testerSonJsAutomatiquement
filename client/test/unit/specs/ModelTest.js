var expect = chai.expect;
var Model = require('../../../src/js/Model');

describe('Model', function() {

    it('doit pouvoir récupérer la liste des éléments', function() {
        // Given
        var model = new Model();
        model.elements = ["1", "2", "3"];

        // When
        var elements = model.findAll();

        // Then
        expect(elements.length).to.equal(3);
        expect(elements).to.deep.equal(["1", "2", "3"]);
    });

    it('doit être permettre d\'ajouter puis récupérer un élément', function() {
        // Given
        var model = new Model();

        // When
        model.addElement("nouvel élément");
        var allElements = model.findAll();

        // Then
        expect(allElements.length).to.equal(1);
        expect(allElements[0]).to.equal("nouvel élément");
    });
});