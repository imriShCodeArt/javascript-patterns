var tahoe = {
    resorts:['Kirkwood', 'Squaw', 'Alpine', 'Heavenly', 'Northstar'],
    print: function(delay=1000){
        setTimeout(function(){
            console.log(`THIS RESORTS: \n${this.resorts}`);
            console.log(this === window );
            console.log('********************************')
            console.log(' ')
        }, delay);
    }
};
var tahoe2 = {
    resorts:['Kirkwood', 'Squaw', 'Alpine', 'Heavenly', 'Northstar'],
    print: function(delay=1000){
        setTimeout(()=>{
            console.log(`THIS RESORTS: \n${this.resorts}`);
            console.log(this === tahoe2 );
            console.log('********************************')
        }, delay);
    }
};

tahoe.print();   // prints: "undefined"
tahoe2.print();  // prints: "['Kirkwood', 'Squaw', 'Alpine', 'Heavenly', 'Northstar']"
