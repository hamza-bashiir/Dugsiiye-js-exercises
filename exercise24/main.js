// default parameters
function calculateArea(width,height = width){
    console.log(width * height);
}
console.log(calculateArea(5,10));
console.log(calculateArea(5));