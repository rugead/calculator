(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var calculator = require('./calculator');

},{"./calculator":2}],2:[function(require,module,exports){
'use strict';

var numberStr = '';
var aaa = 0;
var bbb = 0;
var operant = '';
var statusNumber = 'aaa';
var statusOperant = '';
var statusDecimal = '';
var result = 0;
var rrr = '';

function logger(aaa, operant, bbb, result, statusNumber, statusOperant, numberStr, rrr, statusDecimal) {
  console.log('111 aaa: ', aaa, operant, bbb, ' = ', result, 'statusNumber: ', statusNumber, 'statusOperant: ', statusOperant, 'numberStr: ', numberStr, 'statusDecimal: ', statusDecimal);
  console.log('rrr: ', rrr);
}

var showResult = function showResult(result) {
  document.querySelector('.showResult').innerHTML = result;
};
var showResultPath = function showResultPath(rrr) {
  document.querySelector('.showResultPath').innerHTML = rrr;
};

var operators = {
  x: function x(a, b) {
    return a * b;
  },

  '+': function _(a, b) {
    return a + b;
  },

  '-': function _(a, b) {
    return a - b;
  },

  '/': function _(a, b) {
    return a / b;
  }
};

var number = function number(n) {
  if (statusDecimal === 'decimal' && n === '.') {
    return;
  }
  if (n === '.') {
    statusDecimal = 'decimal';
  }

  numberStr = numberStr.concat(n);
  rrr = rrr.concat(n);
  showResultPath(rrr);
  if (statusNumber === 'aaa' && (statusOperant.length === 0 || statusOperant.indexOf('default') === 0)) {
    aaa = parseFloat(numberStr);
    statusOperant = 'default';
    logger(aaa, operant, bbb, result, statusNumber, statusOperant, numberStr, rrr, statusDecimal);
  } else if (statusNumber === 'aaa' && statusOperant.length !== 0) {
    bbb = parseFloat(numberStr);
    result = operators[operant](aaa, bbb);
    statusNumber = 'bbb';
    showResult(result);
    logger(aaa, operant, bbb, result, statusNumber, statusOperant, numberStr, rrr, statusDecimal);
  } else if (statusNumber === 'bbb') {
    bbb = parseFloat(numberStr);
    result = operators[operant](aaa, bbb);
    statusNumber = 'bbb';
    showResult(result);
    logger(aaa, operant, bbb, result, statusNumber, statusOperant, numberStr, rrr, statusDecimal);
  }
};

var op = function op(o) {
  if (statusOperant.length === 0) {
    return alert('Please select a number first');
  }
  rrr = rrr.concat(' ' + o + ' ');
  showResultPath(rrr);
  if (statusNumber === 'aaa') {
    numberStr = '';
    statusDecimal = '';
    statusOperant = o;
    operant = o;
    logger(aaa, operant, bbb, result, statusNumber, statusOperant, numberStr, rrr);
  } else if (statusNumber === 'bbb') {
    logger(aaa, operant, bbb, result, statusNumber, statusOperant, numberStr, rrr);
    result = operators[operant](aaa, bbb);
    aaa = result;
    bbb = 0;
    statusDecimal = '';
    numberStr = '';
    statusNumber = 'aaa';
    operant = o;
    showResult(result);
    logger(aaa, operant, bbb, result, statusNumber, statusOperant, numberStr, rrr);
  }
};

var equal = function equal() {
  if (operant.length === 0) {
    return alert('Please give something to calculate');
  }
  result = operators[operant](aaa, bbb);
  showResult(result);
  aaa = result;
  bbb = 0;
  numberStr = '';
  statusNumber = 'aaa';
  statusDecimal = '';
  showResultPath(rrr);
  logger(aaa, operant, bbb, result, statusNumber, statusOperant, numberStr, rrr);
};

var reset = function reset() {
  result = 0;
  rrr = '';
  aaa = 0;
  bbb = 0;
  statusDecimal = '';
  showResultPath('');
  showResult(0);
  numberStr = '';
  statusNumber = 'aaa';
  operant = '';
  statusOperant = '';
  logger(aaa, operant, bbb, result, statusNumber, statusOperant, numberStr, rrr);
};

// let removeLastNumber = () => {
//   numberStr = numberStr.slice(0, -1);
//   rrr = rrr.slice(0, -1);
//   console.log('öööö', rrr, numberStr);
//   number();
//   console.log('öööö', rrr, numberStr);
//
// };
// TODO remove a number from numberStr


document.querySelector('#null').addEventListener('click', function () {
  return number(0);
});
document.querySelector('#one').addEventListener('click', function () {
  return number(1);
});
document.querySelector('#two').addEventListener('click', function () {
  return number(2);
});
document.querySelector('#three').addEventListener('click', function () {
  return number(3);
});
document.querySelector('#four').addEventListener('click', function () {
  return number(4);
});
document.querySelector('#five').addEventListener('click', function () {
  return number(5);
});
document.querySelector('#six').addEventListener('click', function () {
  return number(6);
});
document.querySelector('#seven').addEventListener('click', function () {
  return number(7);
});
document.querySelector('#eight').addEventListener('click', function () {
  return number(8);
});
document.querySelector('#nine').addEventListener('click', function () {
  return number(9);
});
document.querySelector('#comma').addEventListener('click', function () {
  return number('.');
});
// document.querySelector('#pop').addEventListener('click', () => removeLastNumber());


document.querySelector('#plus').addEventListener('click', function () {
  return op('+');
});
document.querySelector('#minus').addEventListener('click', function () {
  return op('-');
});
document.querySelector('#multiply').addEventListener('click', function () {
  return op('x');
});
document.querySelector('#divide').addEventListener('click', function () {
  return op('/');
});
document.querySelector('#equal').addEventListener('click', function () {
  return equal('=');
});
document.querySelector('#reset').addEventListener('click', function () {
  return reset();
});

},{}]},{},[1])
//# sourceMappingURL=app.js.map
