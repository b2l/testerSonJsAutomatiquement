function Model() {
    this.elements = [];
}

Model.prototype.init = function() {};

Model.prototype.addElement = function(element) {
    this.elements.push(element);
};

Model.prototype.findAll = function() {
    return this.elements;
};

module.exports = Model;