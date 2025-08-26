function add(a,b){
    return a+b;
}
function multiply(num){
    return num*2;
}
function subtract(num){
    return num - 5;
}

function main() {
    const sum = add(5,10);
    console.log("sum:",sum);
    const product = multiply(sum);
    console.log("product:",product);
    const result = subtract(product);
    console.log("result:",result);
}
main();

 

 