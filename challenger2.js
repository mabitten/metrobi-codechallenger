/**
 * Logs each item in an array with exponentially increasing delays.
 * 
 * @param  array - The array of items to log.
 * 
 * @example
 * printWithExponentialDelay(["a", "b", "c", "d"])
 */
const printWithExponentialDelay = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0 ) return null;

    arr.map((_, i) => Math.pow(2, i)).forEach((delay, i) => {
      setTimeout(() => {
        console.log(`${arr[i]} (${delay} segundos)`);
      }, delay * 1000);
    });
}