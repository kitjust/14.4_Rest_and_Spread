// ES5
function filterOutOdds() {
	var nums = Array.prototype.slice.call(arguments);
	return nums.filter(function(num) {
		return num % 2 === 0
	});
}
// ES2015 Version
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)
filterOutOdds(1,2,3,4,5,6,7,8) // [2, 4, 6, 8]

// findMin
const findMin = (...args) => Math.min(...args)
findMin(3,6,9,-1) // -1

//mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})
mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]
doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]

//Slice and Dice
const removeRandom = items => {
	let r = Math.floor(Math.random() * items.length);
	return [...items.slice(0, r), ...items.slice(r + 1)];
}
removeRandom([0,1,2,3,4,5,6,7]) // [0, 1, 2, 4, 5, 6, 7]


// Return a new array with every item in array1 and array2
const extend = (array1, array2) => {
	return [...array1, ...array2];
}

// addKeyVal
const addKeyVal = (obj, key, val) => {
	let newObj = { ...obj }
	newObj[key] = val;
	return newObj;
	// or 
	// return { ...obj, [key]: val }; // this is called an "object enhancement"
}

// Return a new object with a key removed
const removeKey = (obj, key) => {
	let newObj = { ...obj }
	delete newObj[key]
	return newObj;
	// or
	// ({ [key]: undefined, ...obj } = obj);
	// return obj;
}

// Combine two objects and return a new object
const combine = (obj1, obj2) => {
	return { ...obj1, ...obj2 };
}

// Return a new object with a modified key and value
const update = (obj, key, val) => {
	let newObj = { ...obj }
	newObj[key] = val;
	return newObj;
	// or
	// return { ...obj, [key]: val };
}