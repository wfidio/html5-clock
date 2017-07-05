/**
 * Created by user on 2016-06-28.
 */
setInterval(function(){
    var len = ballList.length;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,canvasWidth,canvasHeight);

    ctx.fillStyle = HOUR_COLOR;
    drawTime(HOUR_BALL_1,ctx);
    drawTime(HOUR_BALL_2,ctx);
    ctx.fillStyle = MINUTE_COLOR;
    drawTime(MINUTE_BALL_1,ctx);
    drawTime(MINUTE_BALL_2,ctx);
    ctx.fillStyle = SECOND_COLOR;
    drawTime(SECOND_BALL_1,ctx);
    drawTime(SECOND_BALL_2,ctx);


    for(num in ballList){
        //console.log(ballList[i]);
        ctx.fillStyle = ballList[num].color;
        ctx.beginPath();
        ctx.arc(ballList[num].posX,ballList[num].posY,RADIUS,0,Math.PI*2);
        ballList[num].move();
        if(ballList[num].posX<0||ballList[num].posX>canvasWidth){
            delete ballList[num];
        }
        if(ballList[num]!=null&&ballList[num].posY>canvasHeight-RADIUS&&Math.abs(ballList[num].velocityY)>500){
            ballList[num].velocityY*=-0.5;
            //ballList[num].velocityY -= FRICTION;
            ballList[num].posY-=5*RADIUS;
        }
        if(ballList[num]!=null&&Math.abs(ballList[num].velocityY)<1){
            ballList[num].velocityY=0;
        }
        //for(num2 in ballList){
        //    if(num==num2||ballList[num2]==null||ballList[num]==null)
        //        continue;
        //    else{
        //        if(ballList[num].isCollapsed(ballList[num2])){
        //            ballList[num].velocityY*=-1;
        //            ballList[num].velocityX*=-1;
        //            ballList[num2].velocityX*=-1;
        //            ballList[num2].velocityY*=-1;
        //        }
        //    }
        //}
        ctx.fill();
    }
    drawSpan(ctx);
},17);


function drawSpan(context){
    context.fillStyle = "black";
    context.beginPath();
    context.arc(400,100,RADIUS,0,Math.PI*2);
    context.arc(400,200,RADIUS,0,Math.PI*2);
    context.fill();
    context.beginPath();
    context.arc(800,100,RADIUS,0,Math.PI*2);
    context.arc(800,200,RADIUS,0,Math.PI*2);
    context.fill();
}

function drawTime(type,context){
    var color;
    var list = [];
    switch (type){
        case HOUR_BALL_1:
            list = hourBallList_1;
            color = HOUR_COLOR;
            break;
        case HOUR_BALL_2:
            list = hourBallList_2;
            color = HOUR_COLOR;
            break;
        case MINUTE_BALL_1:
            list = minuteBallList_1;
            color = MINUTE_COLOR;
            break;
        case MINUTE_BALL_2:
            list = minuteBallList_2;
            color = MINUTE_COLOR;
            break;
        case SECOND_BALL_1:
            list = secondBallList_1;
            color = SECOND_COLOR;
            break;
        case SECOND_BALL_2:
            list = secondBallList_2;
            color = SECOND_COLOR;
            break;
        default :
            break;
    }
    context.fillStyle = color;
    for(var num in list){
        context.beginPath();
        context.arc(list[num].posX,list[num].posY,RADIUS,0,Math.PI*2);
        context.fill();
    }


}