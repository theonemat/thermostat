describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('is 20 degrees', function(){
    expect(thermostat.temp).toEqual(20);
  });
  it('temp can be incresed', function(){
    thermostat.inc();
    expect(thermostat.temp).toEqual(21);
  });
  it('temp can be decreased', function(){
    thermostat.dec();
    expect(thermostat.temp).toEqual(19);
  });
  it('cant be lower than 10 deg', function(){
for (var i = 0; i < 10; i++) {
    thermostat.dec();
  }
    expect(thermostat.dec).toThrowError(TypeError, 'Temp is already at the minimum');
  });

it('can be reset to default temp', function(){
  thermostat.dec();
  thermostat.reset();
  expect(thermostat.temp).toEqual(20)
  });
});
