'use strict';

var Polygon = require('./Polygon');

class Square extends Polygon {
  constructor(length = 10)  {
    super(length,length);
    this.name = 'Square';
  }

  get area() {
    return this.width * this.height;
  }

}

module.exports = Square;
