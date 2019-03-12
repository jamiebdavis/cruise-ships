function Ship(port) {
  this.startingPort = port;
}

Ship.prototype.setSail = function() {
  return (this.startingPort = null);
};

module.exports = Ship;
