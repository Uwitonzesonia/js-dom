console.log("3.callback");
function foo(bar) {
    bar();
}

foo(function () {
    console.log("bar");
})

orderPizza('veg','cheesebarbeque',function(msg){
    console.log(msg);
});
function orderPizza(type, name, callback) {
    console.log(`pizza ${type} ${name} is ordered`);

    setTimeout(function() {
        const msg = `pizza ${type} ${name} is ready`
       callback(msg);
    },3000);
} 




 

 