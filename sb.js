var i = 0
function doWhileLoop(num) {
  function incrementVariable() {
    i = i + 1
    return i
}
  do {
    console.log(`${i}I run once regardless.`)
  }  while (incrementVariable() <= num)
  return 0
}

console.log(doWhileLoop(10))
