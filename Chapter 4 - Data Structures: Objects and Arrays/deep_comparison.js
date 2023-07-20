function deepEqual(num1, num2) {
    if (num1 && num2 != null) {
        if (typeof num1 == typeof num2) {
            if (typeof num1 && typeof num2 == "object") {
                if (Object.keys(num1).length == Object.keys(num2).length) {
                    for (let x = 0; x < Object.keys(num1).length;) {
                        if (num1[x] == num2[x]) x++
                        else return false
                    }
                    let values1 = [], values2 = []
                    for (element of Object.keys(num1)) {
                        values1.push(num1[element])
                        values2.push(num2[element])
                    }
                    for (let z = 0; z < values1.length;) {
                        if (typeof values1[z] && typeof values2[z] == "object") {
                            if (deepEqual(values1[z], values2[z]) == true) z++
                            else return false
                        } else {
                            if (values1[z] === values2[z]) z++
                            else return false
                        }
                    }
                    return true
                } else return false
            }
                if (num1 == num2) return true
                return false
            }
    } else if (num1 && num2 == null) return true 
    else return false
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
