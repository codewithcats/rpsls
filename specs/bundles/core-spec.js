(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _form = require('./form');

var Result = function Result(winner) {
  return { winner: winner };
};

var duel = function duel(form1, form2) {
  var index = (form1.index /* avoid negative */ + 5 - form2.index) % 5;
  if ([1, 2].indexOf(index) >= 0) return new Result(form1);else if ([3, 4].indexOf(index) >= 0) return new Result(form2);else return new Result(null);
};

exports.duel = duel;
exports.Result = Result;

},{"./form":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Form = function Form(shape, index) {
  this.shape = shape;
  this.index = index;
};

Form.ROCK = new Form('Rock', 5);
Form.SPOCK = new Form('Spock', 6);
Form.PAPER = new Form('Paper', 7);
Form.LIZARD = new Form('Lizard', 8);
Form.SCISSOR = new Form('Scissor', 9);

exports.Form = Form;

},{}],3:[function(require,module,exports){
'use strict';

var _rpslsDuel = require('../../rpsls/duel');

var _rpslsForm = require('../../rpsls/form');

describe('duel', function () {

  describe('Rock vs Scissor', function () {

    it('should be Rock that win', function () {
      var result = (0, _rpslsDuel.duel)(_rpslsForm.Form.ROCK, _rpslsForm.Form.SCISSOR);
      expect(result.winner).toBe(_rpslsForm.Form.ROCK);
    });

    it('should be Rock that win even if we swap a param order', function () {
      var result = (0, _rpslsDuel.duel)(_rpslsForm.Form.SCISSOR, _rpslsForm.Form.ROCK);
      expect(result.winner).toBe(_rpslsForm.Form.ROCK);
    });
  });
});

},{"../../rpsls/duel":1,"../../rpsls/form":2}],4:[function(require,module,exports){
'use strict';

require('./duel-spec');

},{"./duel-spec":3}]},{},[4]);
