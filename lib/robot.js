'use strict';
function Robot() {
  this.orient = function(direction){
    if (direction === 'east' || direction === 'west' || direction === 'north' || direction === 'south') {
      this.bearing = direction
    }
    else {throw new Error('Invalid Robot Bearing')}
  };
  this.turnRight = function(){
    if (this.bearing === 'north') {
      this.bearing = 'east'
    }
    else if (this.bearing === 'east') {
      this.bearing = 'south'
    }
    else if (this.bearing === 'south') {
      this.bearing = 'west'
    }
    else if (this.bearing === 'west') {
      this.bearing = 'north'
    }
  };
  this.turnLeft = function(){
    if (this.bearing === 'north') {
      this.bearing = 'west'
    }
    else if (this.bearing === 'west') {
      this.bearing = 'south'
    }
    else if (this.bearing === 'south') {
      this.bearing = 'east'
    }
    else if (this.bearing === 'east') {
      this.bearing = 'north'
    }
  };
  this.at = function(coordinate1, coordinate2){
    this.coordinates = []
    this.coordinates.push(coordinate1, coordinate2)
  };
  this.advance = function(){
    if (this.bearing === 'north') {
    this.coordinates[1] += 1 }
    else if (this.bearing === 'east') {
    this.coordinates[0] += 1 }
    else if (this.bearing === 'south') {
    this.coordinates[1] -= 1 }
    else if (this.bearing === 'west') {
    this.coordinates[0] -= 1 }
  };

  this.instructions = function(letters){
    var instructionsArray = []
    for (var letter = 0; letter < letters.length; letter++) {
      if (letters[letter] === "L"){
        instructionsArray.push('turnLeft')
      }
      else if (letters[letter] === "R"){
        instructionsArray.push("turnRight")
      }
      else if (letters[letter] === "A"){
        instructionsArray.push("advance")
      }
    }
    return instructionsArray
  };
  this.place = function(currentOrigin){
    this.at(currentOrigin.x, currentOrigin.y)
    this.bearing = currentOrigin.direction
  };
  this.evaluate = function(letterDirections){
    this.instructions(letterDirections).forEach(instruction => {
      this[instruction]()
    }, this)

    // var methods = this.instructions(letterDirections)
    // for (var method = 0; method < methods.length; method++){
    //   var currentMethod = methods[method];
    //   this[currentMethod]()
    // }
  }
}
