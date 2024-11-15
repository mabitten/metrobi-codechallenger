/**
    We could simply launch the egg floor by floor until we find the floor that breaks, and that would leave one egg, we would have a time frame of O(n) where n will be the total number of floors.
    However, we can reduce the number of tests per floor by using one egg to decrease and another to find the floor.
    The idea is to divide it into two phases, the first egg gradually searches on floor x and then we will go up to floor x - 1 each time it is successful. So we will get something like x -> x+(x-1) -> x+(x−1)+(x−2) and so on. When the egg breaks, we understand that the critical floor will be between the last safe floor and the floor where the egg broke.
    So, we go to the second egg, which will do a linear search from the last safe floor to the floor where the egg broke.
    For 100 floors, we will have an account like x(x+1)/2 >= 100, with that we will have a time space equal to O(n^2) and space complexity O(n)
*/


/**
 * Calculates the minimum number of drops required in the worst-case scenario to find
 * the highest floor from which an egg can be dropped without breaking.
 * This solution uses dynamic programming to optimize the solution.
 * 
 * @param number totalFloors - The total number of floors in the building.
 * @returns number The minimum number of drops required in the worst-case scenario.
 * 
 * @example
 * 
 * twoEggDrop(100);
 */
const twoEggDrop = (totalFloors) => {
    const calculateDrops = (remainingFloors, memo) => {
      if (memo[remainingFloors] !== -1) {
        return memo[remainingFloors];
      }

      let minDrops = remainingFloors;
  
      for (let floor = 1; floor < remainingFloors; floor++) {
        minDrops = Math.min(minDrops, Math.max(floor, 1 + calculateDrops(remainingFloors - floor, memo)));
      }
  
      memo[remainingFloors] = minDrops;
      return minDrops;
    };
  
    const memo = Array(totalFloors + 1).fill(-1);
  
    return calculateDrops(totalFloors, memo);
  };
  