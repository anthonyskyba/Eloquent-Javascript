const isEven = num => {
  if (num == 0)
    return true
  else if (num == 1)
    return false
  else if (num < 0)
    return isEven(num + 2)
  else
    return isEven(num - 2)
}
