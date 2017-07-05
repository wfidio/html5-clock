/**
 * Created by user on 2016-06-27.
 */

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var canvasWidth = c.width;
var canvasHeight = c.height;

var ballList = [];
var hourBallList_1 = [];
var hourBallList_2 = [];
var minuteBallList_1 = [];
var minuteBallList_2 = [];
var secondBallList_1 = [];
var secondBallList_2 = [];

var clock;
var hourChange1 = hourChange2 = minuteChange1 = minuteChange2 = secondChange1 = false;
var secondChange2 = true;

setInterval(function(){

    //console.log(tempBallList);
    if(clock==null){
        clock = new Clock();
    }
    var hour_1 = parseInt(clock.hour/10);
    var hour_2 = clock.hour%10;
    var minute_1 = parseInt(clock.minute/10);
    var minute_2 = clock.minute%10;
    var second_1 = parseInt(clock.second/10);
    var second_2 = clock.second%10;


    if(ballList.length==0){
        pushBallList(SECOND_BALL_1,second_1);
        pushBallList(SECOND_BALL_2,second_2);
        pushBallList(MINUTE_BALL_1,minute_1);
        pushBallList(MINUTE_BALL_2,minute_2);
        pushBallList(HOUR_BALL_1,hour_1);
        pushBallList(HOUR_BALL_2,hour_2);
    }


    ballList = ballList.concat(secondBallList_2);
    pushBallList(SECOND_BALL_2,second_2);

    if(secondChange1){
        ballList = ballList.concat(secondBallList_1);
        pushBallList(SECOND_BALL_1,second_1);
        secondChange1 = false;
    }

    if(minuteChange1){
        ballList = ballList.concat(minuteBallList_1);
        pushBallList(MINUTE_BALL_1,minute_1);
        minuteChange1 = false;
    }

    if(minuteChange2){
        ballList = ballList.concat(minuteBallList_2);
        pushBallList(MINUTE_BALL_2,minute_2);
        minuteChange2 = false;
    }

    if(hourChange1){
        ballList = ballList.concat(hourBallList_1);
        pushBallList(HOUR_BALL_1,hour_1);
        hourChange1 = false;
    }

    if(hourChange2){
        ballList = ballList.concat(hourBallList_2);
        pushBallList(HOUR_BALL_2,hour_2);
        hourChange2 = false;
    }

    clock.work();

    if(hour_1 != parseInt(clock.hour/10)){
        hourChange1 = true;
    }

    if(hour_2 != clock.hour%10){
        hourChange2 = true;
    }

    if(minute_1 != parseInt(clock.minute/10)){
        minuteChange1 = true;
    }

    if(minute_2 != clock.minute%10){
        minuteChange2 = true;
    }

    if(second_1 != parseInt(clock.second/10)){
        secondChange1 = true;
    }


},1000);



function pushBallList(type,num){
    var posX;
    var list = [];
    var color;
    var pushBallList = [];
    switch (type){
        case HOUR_BALL_1:
            posX = 50;
            color = HOUR_COLOR;
            break;
        case HOUR_BALL_2:
            posX = 250;
            color = HOUR_COLOR;
            break;
        case MINUTE_BALL_1:
            posX = 450;
            color = MINUTE_COLOR;
            break;
        case MINUTE_BALL_2:
            posX = 650;
            color = MINUTE_COLOR;
            break;
        case SECOND_BALL_1:
            posX = 850;
            color = SECOND_COLOR;
            break;
        case SECOND_BALL_2:
            posX = 1050;
            color = SECOND_COLOR;
            break;
        default :
            break;
    }


    for(var x in NUMBER_CONSTRUCT[num]){
        var ball = new Ball(NUMBER_CONSTRUCT[num][x][0]+posX,NUMBER_CONSTRUCT[num][x][1]+50,color);
        ball.setVelocityX(Math.random()*100-50);
        ball.setVelocityY(Math.random()-0.5);
        list.push(ball);
    }


    switch (type){
        case HOUR_BALL_1:
            hourBallList_1 = list;
            break;
        case HOUR_BALL_2:
            hourBallList_2 = list;
            break;
        case MINUTE_BALL_1:
            minuteBallList_1 = list;
            break;
        case MINUTE_BALL_2:
            minuteBallList_2 = list;
            break;
        case SECOND_BALL_1:
            secondBallList_1 = list;
            break;
        case SECOND_BALL_2:
            secondBallList_2 = list;
            break;
        default :
            break;
    }
}




function contain(element,arr){
    for(var i = 0;i<arr.length;i++){
        if(arr[i].toString()==element.toString()){
            return true;
        }
    }
    return false;
}


function arr_substraction(arr1,arr2){
    var arr = [];
    for(var num in arr1){
        if(contain(arr1[num],arr2)){
            arr1.shift();
        }
    }
    return arr1;
}
