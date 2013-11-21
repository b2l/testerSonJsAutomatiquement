;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var expect = chai.expect;

describe('Notre projet', function() {

    before(function(done) {
        console.log('Test launch');
        setTimeout(function checkIfAppIsRunning() {
            if (!document.getElementById('wrapper')) {
                setTimeout(checkIfAppIsRunning, 1);
            } else {
                done();
            }
        }, 1);
    });

    it ('peut ajouter un élément dans la liste', function() {
        // Given
        var button = document.getElementById('ajouter-element-button');
        var input = document.getElementById('ajouter-element-input');
        input.value = "mon nouvel élément";

        // When
        button.click();

        // Then
        var list = document.getElementById('elements-list');
        expect(list.querySelectorAll('li').length).to.equal(1);
        expect(input.value).to.equal("");
    }); 
});
},{}]},{},[1])
;