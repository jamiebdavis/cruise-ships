function Ship(port) {
  this.currentPort = port;
}

Ship.prototype.setSail = function() {
  return (this.currentPort = null);
};

Ship.prototype.dock = function(port) {
  return (this.currentPort = port);
};

module.exports = Ship;
