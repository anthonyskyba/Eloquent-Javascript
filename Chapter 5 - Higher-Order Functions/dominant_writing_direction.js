function dominantDirection(text) {
  function majority(string) {
    let text1 = (textScripts(string) + ",").split(" "), nums = [], names = []
    while (text1.length != 0) {
      nums.unshift(text1[0].split("%")[0])
      names.unshift(text1[1].split(",")[0])
      text1.shift()
      text1.shift()
    }
    let x = 0
    for (num of nums)
      if (Number(num) > x) x = Number(num)
    return names[nums.indexOf(String(x))]
  }
  for (script of SCRIPTS) {
    if (script.name == majority(text)) return script.direction
  }
  return null
}


console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
