/**
 * @param carrotTypes - List of objects representing types of carrots.
 * @param capacity - The maximum weight the bag can carry.
 * @returns - The amount we can carry in our bag.
 * 
 * @example
 * const carrotTypes = [
 *   { kg: 5, price: 100 },
 *   { kg: 7, price: 150 },
 *   { kg: 3, price: 70 }
 * ];
 * const capacity = 36;
 * getMaxValue(carrotTypes, capacity) wait for 450
 */
const getMaxValue = (carrotTypes, capacity) => {
    const acumulate = new Array(capacity + 1).fill(0);
  
    for (let currentCapacity = 1; currentCapacity <= capacity; currentCapacity++) {
      carrotTypes.forEach(({ kg, price }) => {
        if (kg <= currentCapacity) {
          acumulate[currentCapacity] = Math.max(acumulate[currentCapacity], acumulate[currentCapacity - kg] + price);
        }
      });
    }
  
    return acumulate[capacity];
};