
  // Here, the "this" keyword is refrencing the global object
  function foo() {
    console.log(this.bar);
  }

  var bar = 'bar1';
  var o2 = { bar: 'bar2', foo: foo };
  var o3 = { bar: 'bar3', foo: foo };

  foo();
  o2.foo();
  o3.foo();

