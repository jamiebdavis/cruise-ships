function Ship(currentPort) {
    this.currentPort = currentPort;
};
Ship.prototype.setSail = function() {
    this.currentPort = null
}

module.exports = Ship;