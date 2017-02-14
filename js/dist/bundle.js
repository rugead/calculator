(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const calculator = require('./calculator');

},{"./calculator":2}],2:[function(require,module,exports){
let numberStr = '';
let aaa = 0;
let bbb = 0;
let operant = '';
let statusNumber = 'aaa';
let statusOperant = '';
let statusDecimal = '';
let result = 0;
let rrr = '';

function logger( aaa, operant, bbb, result, statusNumber,  statusOperant, numberStr, rrr, statusDecimal) {
  console.log('111 aaa: ', aaa, operant, bbb, ' = ', result, 'statusNumber: ', statusNumber, 'statusOperant: ', statusOperant, 'numberStr: ', numberStr, 'statusDecimal: ', statusDecimal);
  console.log('rrr: ', rrr);
}

let showResult = (result) => { document.querySelector('.showResult').innerHTML = result; };
let showResultPath = (rrr) => { document.querySelector('.showResultPath').innerHTML = rrr; };

let operators = {
    x: function (a, b) {return a * b; },

  '+': function (a, b) { return a + b; },

  '-': function (a, b) { return a - b; },

  '/': function (a, b) { return a / b; }
};

let number = (n) => {
    if (statusDecimal === 'decimal' && n === '.') { return; }
    if (n === '.') {statusDecimal = 'decimal'; }

    numberStr = numberStr.concat(n);
    rrr = rrr.concat( n );
    showResultPath(rrr);
    if ((statusNumber === 'aaa') && ((statusOperant.length === 0) || statusOperant.indexOf('default') === 0)) {
      aaa = parseFloat(numberStr);
      statusOperant =  'default';
      logger( aaa, operant, bbb, result, statusNumber,  statusOperant, numberStr, rrr, statusDecimal);
    } else if ((statusNumber === 'aaa')  && (statusOperant.length !== 0)) {
      bbb  = parseFloat(numberStr);
      result = operators[operant](aaa, bbb);
      statusNumber = 'bbb';
      showResult(result);
      logger( aaa, operant, bbb, result, statusNumber,  statusOperant, numberStr, rrr, statusDecimal);
    } else if (statusNumber === 'bbb') {
      bbb  = parseFloat(numberStr);
      result = operators[operant](aaa, bbb);
      statusNumber = 'bbb';
      showResult(result);
      logger( aaa, operant, bbb, result, statusNumber,  statusOperant, numberStr, rrr, statusDecimal);
    }
};

let op = (o) => {
  if (statusOperant.length === 0)  { return alert('Please select a number first'); }
  rrr = rrr.concat(' ' + o + ' ');
  showResultPath(rrr);
  if (statusNumber === 'aaa') {
    numberStr = '';
    statusDecimal = '';
    statusOperant = o;
    operant = o;
    logger( aaa, operant, bbb, result, statusNumber,  statusOperant, numberStr, rrr);
  } else if  (statusNumber === 'bbb') {
    logger( aaa, operant, bbb, result, statusNumber,  statusOperant, numberStr, rrr);
    result = operators[operant](aaa, bbb);
    aaa = result;
    bbb = 0;
    statusDecimal = '';
    numberStr ='';
    statusNumber = 'aaa';
    operant = o;
    showResult(result);
    logger( aaa, operant, bbb, result, statusNumber,  statusOperant, numberStr, rrr);
  }
};

let equal = () => {
  if (operant.length === 0)  { return alert('Please give something to calculate'); }
  result = operators[operant](aaa, bbb);
  showResult(result);
  aaa = result;
  bbb = 0;
  numberStr = '';
  statusNumber = 'aaa';
  statusDecimal = '';
  showResultPath(rrr);
  logger( aaa, operant, bbb, result, statusNumber,  statusOperant, numberStr, rrr);
};

let reset = () => {
  result = 0;
  rrr = '';
  aaa = 0;
  bbb = 0;
  statusDecimal = '';
  showResultPath('');
  showResult(0);
  numberStr ='';
  statusNumber = 'aaa';
  operant = '';
  statusOperant = '';
  logger( aaa, operant, bbb, result, statusNumber,  statusOperant, numberStr, rrr);
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


document.querySelector('#(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const calculator = require('./calculator');

},{"./calculator":2}],2:[function(require,module,exports){
let numberStr = '';
let aaa = 0;
let bbb = 0;
let operant = '';
let statusNumber = 'aaa';
let statusOperant = '';
let statusDecimal = '';
let result = 0;
let rrr = '';

function logger( aaa, operant, bbb, result, statusNumber,  statusOperant, numberStr, rrr, statusDecimal) {
  console.log('111 aaa: ', aaa, operant, bbb, ' = ', result, 'statusNumber: ', statusNumber, 'statusOperant: ', statusOperant, 'numberStr: ', numberStr, 'statusDecimal: ', statusDecimal);
  console.log('rrr: ', rrr);
}

let showResult = (result) => { document.querySelector('.showResult').innerHTML = result; };
let showResultPath = (rrr) => { document.querySelector('.showResultPath').innerHTML = rrr; };

let operators = {
    x: function (a, b) {return a * b; },

  '+': function (a, b) { return a + b; },

  '-': function (a, b) { return a - b; },

  '/': function (a, b) { return a / b; }
};

let number = (n) => {
    if (statusDecimal === 'decimal' && n === '.') { return; }
    if (n === '.') {statusDecimal = 'decimal'; }

    numberStr = numberStr.concat(n);
    rrr = rrr.concat( n );
    showResultPath(rrr);
    if ((statusNumber === 'aaa') && ((statusOperant.length === 0) || statusOperant.indexOf('default') === 0)) {
      aaa = parseFloat(numberStr);
      statusOperant =  'default';
      logger( aaa, operant, bbb, result, statusNumber,  statusOperant, numberStr, rrr, statusDecimal);
    } else if ((statusNumber === 'aaa')  && (statusOperant.length !== 0)) {
      bbb  = parseFloat(numberStr);
      result = operators[operant](aaa, bbb);
      statusNumber = 'bbb';
      showResult(result);
      logger( aaa, operant, bbb, result, statusNumber,  statusOperant, numberStr, rrr, statusDecimal);
    } else if (statusNumber === 'bbb') {
      bbb  = parseFloat(numberStr);
      result = operators[operant](aaa, bbb);
      statusNumber = 'bbb';
      showResult(result);
      logger( aaa, operant, bbb, result, statusNumber,  statusOperant, numberStr, rrr, statusDecimal);
    }
};

let op = (o) => {
  if (statusOperant.length === 0)  { return alert('Please select a number first'); }
  rrr = rrr.concat(' ' + o + ' ');
  showResultPath(rrr);
  if (statusNumber === 'aaa') {
    numberStr = '';
    statusDecimal = '';
    statusOperant = o;
    operant = o;
    logger( aaa, operant, bbb, result, statusNumber,  statusOperant, numberStr, rrr);
  } else if  (statusNumber === 'bbb') {
    logger( aaa, operant, bbb, result, statusNumber,  statusOperant, numberStr, rrr);
    result = operators[operant](aaa, bbb);
    aaa = result;
    bbb = 0;
    statusDecimal = '';
    numberStr ='';
    statusNumber = 'aaa';
    operant = o;
    showResult(result);
    logger( aaa, operant, bbb, result, statusNumber,  statusOperant, numberStr, rrr);
  }
};

let equal = () => {
  if (operant.length === 0)  { return alert('Please give something to calculate'); }
  result = operators[operant](aaa, bbb);
  showResult(result);
  aaa = result;
  bbb = 0;
  numberStr = '';
  statusNumber = 'aaa';
  statusDecimal = '';
  showResultPath(rrr);
  logger( aaa, operant, bbb, result, statusNumber,  statusOperant, numberStr, rrr);
};

let reset = () => {
  result = 0;
  rrr = '';
  aaa = 0;
  bbb = 0;
  statusDecimal = '';
  showResultPath('');
  showResult(0);
  numberStr ='';
  statusNumber = 'aaa';
  operant = '';
  statusOperant = '';
  logger( aaa, operant, bbb, result, statusNumber,  statusOperant, numberStr, rrr);
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


document.querySelector('#null').addEventListener('click', () => number(0));
document.querySelector('#one').addEventListener('click', () => number(1));
document.querySelector('#two').addEventListener('click', () => number(2));
document.querySelector('#three').addEventListener('click', () => number(3));
document.querySelector('#four').addEventListener('click', () => number(4));
document.querySelector('#five').addEventListener('click', () => number(5));
document.querySelector('#six').addEventListener('click', () => number(6));
document.querySelector('#seven').addEventListener('click', () => number(7));
document.querySelector('#eight').addEventListener('click', () => number(8));
document.querySelector('#nine').addEventListener('click', () => number(9));
document.querySelector('#comma').addEventListener('click', () => number('.'));
// document.querySelector('#pop').addEventListener('click', () => removeLastNumber());


document.querySelector('#plus').addEventListener('click', () => op('+'));
document.querySelector('#minus').addEventListener('click', () => op('-'));
document.querySelector('#multiply').addEventListener('click', () => op('x'));
document.querySelector('#divide').addEventListener('click', () => op('/'));
document.querySelector('#equal').addEventListener('click', () => equal('='));
document.querySelector('#reset').addEventListener('click', () => reset());

},{}]},{},[1]);
').addEventListener('click', () => number(0));
document.querySelector('#one').addEventListener('click', () => number(1));
document.querySelector('#two').addEventListener('click', () => number(2));
document.querySelector('#three').addEventListener('click', () => number(3));
document.querySelector('#four').addEventListener('click', () => number(4));
document.querySelector('#five').addEventListener('click', () => number(5));
document.querySelector('#six').addEventListener('click', () => number(6));
document.querySelector('#seven').addEventListener('click', () => number(7));
document.querySelector('#eight').addEventListener('click', () => number(8));
document.querySelector('#nine').addEventListener('click', () => number(9));
document.querySelector('#comma').addEventListener('click', () => number('.'));
// document.querySelector('#pop').addEventListener('click', () => removeLastNumber());


document.querySelector('#plus').addEventListener('click', () => op('+'));
document.querySelector('#minus').addEventListener('click', () => op('-'));
document.querySelector('#multiply').addEventListener('click', () => op('x'));
document.querySelector('#divide').addEventListener('click', () => op('/'));
document.querySelector('#equal').addEventListener('click', () => equal('='));
document.querySelector('#reset').addEventListener('click', () => reset());

},{}]},{},[1]);
