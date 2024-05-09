/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const spaceCraftParameters = {
  initialVelocity: 10000,    //initial velocity (km/hr)
  acceleration: 3,           // acceleration (m/s^2)
  time: 3600,                // 1 hour = 3600 s
  initialDistance: 0,        // distance (km)
  initialFuel : 5000,        // remaining fuel (kg)
  fuelBurnRate: 0.5          // fuel burn rate (kg/s)
}

const newDistance = (spaceCraftParameters.initialDistance + ((spaceCraftParameters.initialVelocity/3.6)*spaceCraftParameters.time))/1000 //calculates new distance
const remainingFuel = spaceCraftParameters.initialFuel - spaceCraftParameters.fuelBurnRate*spaceCraftParameters.time //calculates remaining fuel
const newVelocity = calculateNewVelocity(spaceCraftParameters) //calculates new velocity based on acceleration

function calculateNewVelocity ({acceleration, initialVelocity, time})  { 

  if (!acceleration) {
    throw new Error('Please input acceleration value in m/s^2');
  }
  if (!initialVelocity) {
    throw new Error('Please input initial velocity value in km/h');   
  }                  
  if (!time) {
    throw new Error('Please input time value in s');
  }
  return (initialVelocity/3.6 + (acceleration*time))*3.6
}

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
