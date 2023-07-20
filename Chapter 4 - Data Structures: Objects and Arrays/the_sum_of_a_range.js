const range = (num1, num2, scale = 1) => {
    let output = [num1]
    if (scale == 0)
      scale = 1
    if (num1 < num2) {
      for (num1; num1 < num2; num1 += scale){
        output.push(num1 + scale)
      }
    } else {
      if (scale > -1)
        scale = -scale
      for (num2; num1 > num2; num1 += scale){
        output.push(num1 + scale)
      }
    }
    return output
  }

  const sum = array => {
    let output = 0
    for (let counter = 0; counter < array.length; counter++) {
      output += array[counter]
    }
    return output
  }
  
  console.log(range(1, 10))
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1))
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55
