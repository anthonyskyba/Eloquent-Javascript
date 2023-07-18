function every(array, test) {
  	let x = 0
	for (element of array) if (test(element)) x++
 	if (x == array.length) return true
  	return false
}

function every2(array, test) {
	let x = [array[0]]
	if (array.length == 0 && test(array) == true) return true
	if (x.some(test)) {
		array.shift()
		return every1(array, test)
	}
	return false
}

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 5, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true
