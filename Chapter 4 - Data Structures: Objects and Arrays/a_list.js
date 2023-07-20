function arrayToList(array) {
    if (array.length == 0) return null
    output = {value: array.shift(), rest: arrayToList(array)}
    return output
}

function listToArray(list) {
    let output = []
    while (list != null) {
        output.push(list.value)
        list = list.rest
    }
    return output
}

function prepend(element, list) {
    if (typeof list != "object") {
        return {value: element, rest: list}
    }
    return {value: element, rest: list}
}

function nth(list, index) {
    if (index == 0) return list.value
    if (list == undefined) return null
    index--
    list = list.rest
    return nth(list, index)
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
