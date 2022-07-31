var foo = (function(){
    var o = { bar: "bar" };

    return { obj: o };
})();

console.log(foo.obj.bar);

//  This is not a closure because closure is:
//  "When a FUNCTION remembers it's lexical scope even though the FUNCTION is 
//  executing outside of it's lexical scope". Here we have an OBJECT that keeps a reference to var o