const reverseArray = array => {
    let output = []
    for (element of array) output.unshift(element)
    return output
}

const reverseArrayInPlace = array => {
    let counter1 = 0
    let array2 = array.slice(0)
    for (let counter2 = array.length - 1; counter2 >= 0; counter2--) {
        array[counter1] = array2[counter2]
        counter1++
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
