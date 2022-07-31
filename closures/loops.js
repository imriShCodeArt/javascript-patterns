function loop(){
    for (var i = 0; i < 5; i++) {
        setTimeout(function(){
            console.log('i: ' + i);
        }, i*100);
    }
}

function loop2(){
    for (var i = 0; i < 5; i++) {
        (function(i){
            setTimeout(function(){
                console.log('i: ' + i);
            }, i*100);
        })(i);
    }
}

function loop3(){
    for (let i = 0; i < 5; i++) {
        setTimeout(function(){
            console.log('i: ' + i);
        }, i*100);
    }
}

loop3();
// loop2();