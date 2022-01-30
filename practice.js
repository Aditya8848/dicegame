// function slicer(){
// var name1 = prompt("What is your name?");
// var slice1stletter = name1.slice(0,1);
// var sliceotherletters = name1.slice(1,100);
// alert("Hello " + slice1stletter.toUpperCase() + sliceotherletters.toLowerCase());
// }


// function doginfo(){
// var dogAge = prompt("Enter the age of your dog");
// var humanAge = ((dogAge-2)*4)+21;
// alert ("your dog would be " + humanAge +" if it were a human.");
// }

//  function getMilk(money){
//      var bottlePrice = 1.5;
//      var totalBottle = Math.floor(money/bottlePrice);
//      alert("Price of 1 bottle is $" +bottlePrice + ". For $" + money + " you will get " + totalBottle + " bottle of milk");
//  }

//  getMilk(15);

// function age(currentage){
//     var maxage = 90;
//     var remainingYears = 90-currentage;
//     var remainingMonths = remainingYears * 12;
//     var remainingWeeks = remainingYears * 52.;
//     alert ("Remaining Years = " + remainingYears);
//     alert ("Remaining Months = " + remainingMonths);
//     alert ("Remaining Weeks = " + remainingWeeks);
// }

// age(12)

// function buyMilk(costPerBottle, money){
//     return money % costPerBottle;
// }

// var changeAmt = buyMilk(2,13);
// alert(changeAmt);

// function bmiCalculator (weight,height){
//     var bmiMath = weight/(height*height);
//     return Math.floor(bmiMath);
// }
// var bmi = bmiCalculator(75,1.77);
// if (bmi<18.5){
//     alert ("Your BMI is "+bmi+". You are underweight");
// }else if(bmi>=18.5 && bmi<=24.9){
//     alert ("Your BMI is "+bmi+". You are normal weight");
// }else{
//     alert ("Your BMI is "+bmi+". You are over weight");
// }

// prompt("What is your name: ");
// prompt("What is your crush name: ");

// function loveCalculator(){
//     var num = Math.random();
//     num = (num*100);
//     num = Math.floor(num)+1;

//     if (num >=90){
//         alert( "You are "+ num +"% compatible. You are meant for each other");
//     }else if (num >=50 && num<=89) {
//         alert("You are "+ num +"% compatible. You can work things out.");
//     }else{
//         alert("You are "+ num +"% compatible. Quit");
//     }
// }
// loveCalculator();


// var year = prompt("Enter the year");

// function isleapYear(year){
//   if (year % 4 === 0){
//       if(year%100 === 0){
//         if (year%400 === 0){
//             return "Leap Year"
//         }
//         else{
//             return "Not a Leap Year"
//         }
//       }else{
//           return "Leap Year"
//       }
//   }else{
//       return "Not a leap Year"
//   }
// }
// alert(isleapYear(year));

// var guestList = ["Aditya","Reiyaz","Reita","Dev Raj"];
// var name1 = prompt ("What is your name");
// if (guestList.includes(name1) === true){
//     alert("Welcome to the party");
// }else{
//     alert("Sorry you are not invited to the party.");
// }

// var output = [];
// function fizzBuzz() {
//   for (count = 1; count <= 100; count++) {
//     if (count % 3 === 0 && count % 5 === 0) {
//       output.push("FizzBuzz");
//     } else if (count % 5 === 0) {
//       output.push("Buzz");
//     } else if (count % 3 === 0) {
//       output.push("Fizz");
//     } else {
//       output.push(count);
//     }
//   }
//   alert(output);
// }
// fizzBuzz(); 



// function billPay(names){
//     var length = names.length;
//     var personPosition = (Math.floor(Math.random()*length));
//     var billPayer = names[personPosition];
//     alert ("Today "+billPayer+" has to pay for lunch")
// }
// billPay(["God","Ghantu","Bishal(Messi)","Dhode","Anushka","Pinte","Phaiju","Srivasa","Buzz","Moti","Dalli"])

// var count = 99;

// function beer(){
//     while(count>=0){
//         if (count>1){
//             console.log(count+"bottles on the wall. "+count+" bottles of beer.");
//             console.log("Take one down and pass it around "+(count-1) + " bottles of beer on the wall.");
//         }
//         if (count === 1){
//             console.log(count+"bottle on the wall. "+count+" bottle of beer.");
//             console.log("Take one down and pass it around, no more bottles of beer on the wall.");
//         count--;
//     } 
// }
// beer()

// function beer(){
//     for(count =99; count>=0; count--){ 
//         if (count>1){
//             console.log(count+"bottles on the wall. " + count + " bottles of beer.");
//             console.log("Take one down and pass it around "+ (count-1) + " bottles of beer on the wall.");
//         }
//         if (count === 1){
//             console.log(count+"bottle on the wall. "+ count+ " bottle of beer.");
//             console.log("Take one down and pass it around, no more bottles of beer on the wall.");
//         }
//     } 
// }
// beer()

// function fib(n){
//     var output =[];
//     if (n===1){
//         output=[0];
//     }else if (n===2){
//         output = [0,1];
//     }else{
//         output = [0,1]
//         for( var i=2; i<n; i++){   
//             output.push(output[output.length-2]+output[output.length-1])
//         }
//     }
//     console.log(output)
// }

// fib(10)

//--------------------------------Dice Game Code Begin--------------------------------//
function rollDice(){
var randomNumber = Math.floor(Math.random()*6 + 1);
var randomImage = "dice"+randomNumber+".png";
var imgSource = "images/"+randomImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imgSource);

var randomNumber1 = Math.floor(Math.random()*6+1);
var randomImage1 = "dice"+randomNumber1+".png";
var imgSource1 = "images/"+randomImage1;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imgSource1);

if(randomNumber>randomNumber1){
    document.getElementById("start").innerText=("Player 1 wins");
}else if(randomNumber===randomNumber1){
    document.getElementById("start").innerText=("Draw");
}else{
    document.getElementById("start").innerText=("Player 2 Wins");
}
}

function rightDiceRotate(){

    var cube = document.getElementById("image2");
    var randomRotate = Math.random()*100;
    cube.style.transform = "rotate("+randomRotate+"deg)";
    
}
function leftDicerotate(){
    var cube2 = document.getElementById("image1");
    var randomRotate1 = Math.random()*100;
    cube2.style.transform = "rotate("+randomRotate1+"deg)";
}


//--------------------------------Dice Game Code End--------------------------------//