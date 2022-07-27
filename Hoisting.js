// FUNCTIONS GETS HOISTED FIRST ON COMPILATION
foo();

var foo = 2;

function foo(){
    console.log('bar');
}

function foo(){
    console.log('foo');
}