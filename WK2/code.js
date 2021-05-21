//a function is initiated as a count down timer.
function countdownTimer() {
    //prints a message in the console of the website
    console.log("counterdownTimer Working");
    //a variable is initiated and is assigned a fixed numeric value
    var currTime = 50;
    document.getElementById("countdownStatus").innerHTML = currTime;
    //the variable is subtracting 5 from itself
    currTime = currTime - 5;

    //timer for 45
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
        //5000 = 5 seconds because the computer reads this code in miliseconds
    }, 5000);

    //timer for 40
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 10000);

    //timer for 35
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 15000);

    //timer for 30
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 20000);

    //timer for 25
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 25000);

    //timer for 20
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 30000);

    //timer for 15
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 35000);

    //timer for 10
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 40000);

    //timer for 5
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 45000);

    //timer for 0
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = "Blastoff!";
        currTime = currTime - 5;
    }, 50000);
}
// the function tag initiates a special piece of code that can be referenced to in the html code that performs whatever was coded within the functions brackets.
function playCraps(){
    //the console.log tag prints a message in the console of the website.
    console.log("craps game initiated!");
    //the var tag initiates a variable that is used throughout the code, also has a mathamatic equation that comes up with a random number within the 1-6 range.
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    //the document.getElementById assignes a ID and send it to the .innerHTML that is updated to the variable.
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    // initiates a new variable that adds together the other two variables.
    var dieSum = die1 + die2;
    document.getElementById("diceSum").innerHTML = dieSum;
    // an if else and else if funtion that checks the program if a condition is met and then executes the else or else if.
    if(dieSum == 7 || dieSum == 11){
        document.getElementById("crapsStatus").innerHTML = "Craps! you lose!";
    }else if(die1 == die2 && die1 % 2 == 0){
        document.getElementById("crapsStatus").innerHTML = "Doubles! you win!";
    }else{
        document.getElementById("crapsStatus").innerHTML = "you did not lose or win, please try again!";
    }
}