function foo(){
    var bar = "bar";

   setTimeout(function(){
    console.log(bar);
   }, 100);
}

function foo2(){
    var bar = 0;

   setTimeout(function(){
    console.log(bar++);
   }, 1000);
   setTimeout(function(){
    console.log(bar++);
   }, 1200);
}

function foo3(){
    var bar = 0;

   setTimeout(function(){
    console.log(bar++);
        setTimeout(function(){
            console.log(bar++);
        }, 100);
   }, 200);
}

// foo();
// foo2();
foo3();