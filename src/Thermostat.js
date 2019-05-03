function Thermostat(){
  this.temp = 20
  this.mintemp = 10
  this.defaulttemp = 20
}
Thermostat.prototype.inc = function () {
  this.temp += 1
};
Thermostat.prototype.dec = function () {
  if (this.temp === this.mintemp ) {
    throw new TypeError ('Temp is already at the minimum');
  }
  this.temp += -1
};
Thermostat.prototype.reset = function () {
  this.temp = this.defaulttemp
};
