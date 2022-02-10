// set is structure data uniqe, he can manipulate data with similarity with others data.

const numberSet = new Set([1, 2, 3, 2, 1, 4, 5]);

// add data using add
numberSet.add(6);
numberSet.add(7);
numberSet.add(8);
// delete to delete data
numberSet.delete(5);
console.log(numberSet);
