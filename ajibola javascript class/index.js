// change of text
onclick=document.getElementById("demo1").innerHTML= "hello world";
//changing of text in the inner html
function myfunction(){
    document.getElementById("demo4").innerHTML="text changes"
}
// using symbols to evaluate values
document.write(5+6);
// alerts
alert("you are welcome to my page")
// declaring a statement
var a, b, c;
a =3;
b =3;
c= a + b;
document.getElementById("demo5").innerHTML= c

var goods1 = 5;
var goods2 = 7;
var total = goods1 + goods2;

document.getElementById("demo6").innerHTML= "the value is" +total;

const PI = 3.147567768856886;
console.log(PI)
var cars = document.getElementById('cars')
var add = document.getElementById('addcar')
var adds = document.getElementById('addcars')
console.log(add)
var cars = [
    "toyota",
    "bentley",
    "porche",
    78
]
cars [0] = "lamboghini";
add.addEventListener('click', ()=>{
    cars.unshift('ferarri')
    document.getElementById('cars').innerHTML = cars
})
adds.addEventListener('click', ()=>{ 
    console.log('bdbhb')
    // to add a new list of array 
    cars.splice(0, 1, "audi" ,"range rover")
    document.getElementById('cars1').innerHTML = "new array<br>" + cars;
})
console.log(cars)
// give a random number
var random = document.getElementById('demo8')

random.addEventListener('click',()=>{
    console.log('fjn')
    random = (0,9);{
        return Math.floor(Math.random() * (9 - 0)) + 0;
    }
})
console.log('getRndinteger')
document.getElementById('demo8'). innerHTML = random


//if it pm it tells pm else good evening
var change = document.getElementById('demo9')

change.addEventListener('click',()=>{
    hour = new Date() . getHours
    change ;
    if(hour < 18){
    change = "good pm";
    }

    else{
        change = "good evening"
    }
    document.getElementById('demo9'). innerHTML = change;
})



