console.log("introduction to promises");
let  getWater = new Promise(function(resolve, reject){
       setTimeout(function(){
        reject(new Error("no water available"))
       }, 2000); 
       
    });


const grandparentscooking = () => {

    getWater.catch(function(Error){

    console.log(`OMG${Error.message}`);

})

};
grandparentscooking();





 

 