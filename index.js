/* 
it('add(a, b) adds two numbers and returns the result', function() {
  expect(add(a, b)).toEqual(a + b)
})
it('subtract(a, b) subtracts b from a and returns the result', function() {
  expect(subtract(a, b)).toEqual(a - b)
})

it('multiply(a, b) multiplies two numbers and returns the result', function() {
  expect(multiply(a, b)).toEqual(a * b)
})

it('divide(a, b) divides a by b and returns the result', function() {
  expect(divide(a, b)).toEqual(a / b)
})
*/
function add(a, b){
  return a+b
}

function subtract(a, b){
  return a-b
}
function multiply(a, b){
  return a*b
}
function divide(a, b){
  return a/b
}
/***************************************************************************
 * it('inc(n) increments n and returns the result', function() {
  expect(inc(a)).toEqual(a + 1)
})

it('dec(n) decrements n and returns the result', function() {
  expect(dec(a)).toEqual(a - 1)
})
*/
function inc(n){
  return n+1;
}
function dec(n){
  return n-1
}
/***************************************************************************
 * describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })

  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})
*/
function makeInt(n){
    return parseInt(n)
}

function makeInt(n){
    return parseInt(n,10)
}
