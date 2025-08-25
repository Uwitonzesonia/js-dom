let  getWater = new Promise(function(resolve, reject){
    // Got the water 
let value ="water";
resolve(value);
});

const grandparentscooking = () => {

    getWater.then(function(result){

    console.log(`cooking with ${result}`)

})

};
grandparentscooking();





 

 