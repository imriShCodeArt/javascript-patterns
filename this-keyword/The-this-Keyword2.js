
  // Now, it's being presented as a property of an object but still- only the "call-site" 
  // determines the value of "this"
  var o1 = {
    bar:'bar1',
    foo: function(){
        console.log(this.bar);
    },
  };
  var o2 = { bar: 'bar2', foo: o1.foo };

  var bar = 'bar3';
  var foo = o1.foo;

  foo();
  o1.foo();
  o2.foo();

