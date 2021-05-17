function countdownTimer() {
    console.log("counterdownTimer Working");
    var currTime = 50;
    document.getElementById("countdownStatus").innerHTML = currTime;
    currTime = currTime - 5;

    //timer for 45
    setTimeout(function(){
        //stuff in here happen after timeout
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime - 5;
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