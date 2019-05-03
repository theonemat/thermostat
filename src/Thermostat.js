function Thermostat(){
  this.temp = 20
}
Thermostat.prototype.inc = function () {
  this.temp += 1

};
Thermostat.prototype.dec = function () {
  this.temp += -1

};
