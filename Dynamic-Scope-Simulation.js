// SIMULATING DYNAMIC SCOPING
// "CHEATING" JS LEXICAL SCOPING USING EVAL

// function foo has no var named "bar"
function foo() {
  var bar = 'foo'
  return 'console.log(bar);'
}

function baz() {
  var bar = 'bar'
  eval(foo())
}
function baz2() {
  var bar = 'bar2'
  return foo()
}

function bam() {
  var bar = 'bam'
  eval(baz2())
}

baz()   // prints: 'bar'

bam()   // prints: 'bam'
