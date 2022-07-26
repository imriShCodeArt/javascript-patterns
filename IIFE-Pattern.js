function iife1(){
    var foo = 'foo';

    (function(){
        var foo = 'foo2';
            console.log(foo);
    })();

    console.log(foo);
}

// iife1();

function iife2(){
    var foo = 'foo';

    (function(bar){
        var foo = bar;
            console.log(foo);
    })(foo);

    console.log(foo);
}

iife2();

