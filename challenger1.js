/**
 * Finds duplicate items in an array, including objects and return them.
 * 
 * @param array - The array to search for duplicates.
 * @returns - An array of duplicate items.
 * 
 * @example
 * const data = [
 *      1, 2, 3, 4, 5, 1, 3, 4, // Duplicate numbers
 *      "apple", "banana", "apple", // Duplicate strings
 *      { id: 1, name: "John" },
 *      { id: 2, name: "Jane" },
 *      { id: 1, name: "John" }, // Duplicate object
 *      [1, 2],
 *      [1, 2], // Duplicate array
 *  ];
 * 
 * console.log(findDuplicate(data));
 */

const findDuplicate = (array) => {
    if (!Array.isArray(array) || array.length === 0) return [];

    const aux = {};
    const itemsDuplicates = [];
  
    for (const item of array) {
        const itemKey = typeof item === "object" ? JSON.stringify(item) : item;

        aux[itemKey] = (aux[itemKey] || 0) + 1;
    }

    for (const itemKey in aux) {
        if (aux[itemKey] > 1) {
            try {
                itemsDuplicates.push(JSON.parse(itemKey));
            } catch {
                itemsDuplicates.push(itemKey);
            }
        }
    }
  
    return itemsDuplicates;
};