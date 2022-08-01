// Module pattern example:
var foo = (function(){
    var o = { bar: "bar" };
    
    return{
        bar: function(){
            console.log(o.bar);
        }
    };
    
})();

foo.bar();

// Module pattern example #2:
var foo2 = (function(){
    var publicAPI = {
        bar: function(){
            publicAPI.baz();
        },
        baz: function(){
            console.log('baz');
        }
    };
    return publicAPI;
})();

foo2.bar();

// Modern module pattern:
define('foo', function(){
    
    var o = { bar: 'bar' };

    return{
        bar: function(){
            console.log(o.bar);
        }
    };
});
