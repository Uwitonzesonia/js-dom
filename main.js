function f1() {
 console.log('f1');
} 
function f1() {
    console.log('f2');
    
} 
function main() {
    console.log('main')
    setTimeout(f1 , 0);
    new Promise(function(resolved,rejected){
        resolve(I am Promised);
    }).then(resolve => console.log(resolve)); 
    f2();
}   
  main();


 

 