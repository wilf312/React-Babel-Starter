(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Polygon = (function () {
  function Polygon(width, height) {
    _classCallCheck(this, Polygon);

    this.name = 'Polygon';
    this.width = width;
    this.height = height;
  }

  _createClass(Polygon, [{
    key: 'sayName',
    value: function sayName() {
      console.log("Hi my name is " + this.name);
    }
  }]);

  return Polygon;
})();

module.exports = Polygon;

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Polygon = require('./Polygon');

var Square = (function (_Polygon) {
  _inherits(Square, _Polygon);

  function Square() {
    var length = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];

    _classCallCheck(this, Square);

    _get(Object.getPrototypeOf(Square.prototype), 'constructor', this).call(this, length, length);
    this.name = 'Square';
  }

  _createClass(Square, [{
    key: 'area',
    get: function get() {
      return this.width * this.height;
    }
  }]);

  return Square;
})(Polygon);

module.exports = Square;

},{"./Polygon":1}],3:[function(require,module,exports){
'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var Square = require('./Square');

for (var i = 0; i < 10; i++) {
  console.log('inside ' + i);
}

console.log('outside ' + i);

function doStuff(person) {
  var name = person.name;
  var age = person.age;
  var job = person.job;

  console.log(name + '(' + age + ') works as a ' + job);
}

doStuff({
  name: 'Jason',
  job: 'Developer',
  age: 31
});

function callback(response) {
  var _response = _slicedToArray(response, 2);

  var status = _response[0];
  var body = _response[1];
}

},{"./Square":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZG1hY2svd29ya3NwYWNlL2JhYmVsLXN0YXJ0ZXIvc3JjL2FwcC9Qb2x5Z29uLmpzIiwiL1VzZXJzL2RtYWNrL3dvcmtzcGFjZS9iYWJlbC1zdGFydGVyL3NyYy9hcHAvU3F1YXJlLmpzIiwiL1VzZXJzL2RtYWNrL3dvcmtzcGFjZS9iYWJlbC1zdGFydGVyL3NyYy9hcHAvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7Ozs7O0lBRVAsT0FBTztBQUNBLFdBRFAsT0FBTyxDQUNDLEtBQUssRUFBRSxNQUFNLEVBQUU7MEJBRHZCLE9BQU87O0FBRVQsUUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7QUFDdEIsUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsUUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7R0FDdEI7O2VBTEcsT0FBTzs7V0FPSixtQkFBRztBQUNSLGFBQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzNDOzs7U0FURyxPQUFPOzs7QUFZYixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7O0FDZHpCLFlBQVksQ0FBQzs7Ozs7Ozs7OztBQUViLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQzs7SUFFN0IsTUFBTTtZQUFOLE1BQU07O0FBQ0MsV0FEUCxNQUFNLEdBQ2dCO1FBQWQsTUFBTSx5REFBRyxFQUFFOzswQkFEbkIsTUFBTTs7QUFFUiwrQkFGRSxNQUFNLDZDQUVGLE1BQU0sRUFBQyxNQUFNLEVBQUU7QUFDckIsUUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7R0FDdEI7O2VBSkcsTUFBTTs7U0FNRixlQUFHO0FBQ1QsYUFBTyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDakM7OztTQVJHLE1BQU07R0FBUyxPQUFPOztBQVk1QixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7O0FDaEJ4QixZQUFZLENBQUM7Ozs7QUFHYixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7O0FBSWpDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDM0IsU0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7Q0FDNUI7O0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBRzVCLFNBQVMsT0FBTyxDQUFDLE1BQU0sRUFBRTtNQUNqQixJQUFJLEdBQWUsTUFBTSxDQUF6QixJQUFJO01BQUUsR0FBRyxHQUFVLE1BQU0sQ0FBbkIsR0FBRztNQUFFLEdBQUcsR0FBSyxNQUFNLENBQWQsR0FBRzs7QUFFcEIsU0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxlQUFlLEdBQUcsR0FBRyxDQUFDLENBQUM7Q0FDdkQ7O0FBRUQsT0FBTyxDQUFDO0FBQ04sTUFBSSxFQUFDLE9BQU87QUFDWixLQUFHLEVBQUUsV0FBVztBQUNoQixLQUFHLEVBQUUsRUFBRTtDQUNSLENBQUMsQ0FBQTs7QUFFRixTQUFTLFFBQVEsQ0FBQyxRQUFRLEVBQUM7aUNBQ0osUUFBUTs7TUFBeEIsTUFBTTtNQUFFLElBQUk7Q0FDbEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBQb2x5Z29uIHtcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMubmFtZSA9ICdQb2x5Z29uJztcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBzYXlOYW1lKCkge1xuICAgIGNvbnNvbGUubG9nKFwiSGkgbXkgbmFtZSBpcyBcIiArIHRoaXMubmFtZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb2x5Z29uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUG9seWdvbiA9IHJlcXVpcmUoJy4vUG9seWdvbicpO1xuXG5jbGFzcyBTcXVhcmUgZXh0ZW5kcyBQb2x5Z29uIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoID0gMTApICB7XG4gICAgc3VwZXIobGVuZ3RoLGxlbmd0aCk7XG4gICAgdGhpcy5uYW1lID0gJ1NxdWFyZSc7XG4gIH1cblxuICBnZXQgYXJlYSgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0O1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTcXVhcmU7XG4iLCIndXNlIHN0cmljdCc7XG5cblxudmFyIFNxdWFyZSA9IHJlcXVpcmUoJy4vU3F1YXJlJyk7XG5cblxuXG5mb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgY29uc29sZS5sb2coJ2luc2lkZSAnICsgaSk7XG59XG5cbmNvbnNvbGUubG9nKCdvdXRzaWRlICcgKyBpKTtcblxuXG5mdW5jdGlvbiBkb1N0dWZmKHBlcnNvbikge1xuICB2YXIgeyBuYW1lLCBhZ2UsIGpvYiB9ID0gcGVyc29uO1xuXG4gIGNvbnNvbGUubG9nKG5hbWUgKyAnKCcgKyBhZ2UgKyAnKSB3b3JrcyBhcyBhICcgKyBqb2IpO1xufVxuXG5kb1N0dWZmKHtcbiAgbmFtZTonSmFzb24nLFxuICBqb2I6ICdEZXZlbG9wZXInLFxuICBhZ2U6IDMxXG59KVxuXG5mdW5jdGlvbiBjYWxsYmFjayhyZXNwb25zZSl7XG4gIHZhciBbc3RhdHVzLCBib2R5XSA9IHJlc3BvbnNlO1xufVxuIl19
