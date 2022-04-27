// Connecting to ROS
var ros = new ROSLIB.Ros({
    // url: 'ws://10.10.0.76:9090'
    url: 'ws://localhost:9090'
});

// Publishing a Topic
// 创建一个topic,它的名字是'/cmd_vel',,消息类型是'geometry_msgs/Twist'
var cmdVel = new ROSLIB.Topic({
    ros: ros,
    // name: 'ls50_velocity_controller/cmd_vel',
    name: 'turtle1/cmd_vel',
    messageType: 'geometry_msgs/Twist'
});

// Create a Msg
var twist = new ROSLIB.Message({
    linear: {
        x: 0.0,
        y: 0.0,
        z: 0.0
    },
    angular: {
        x: -0.0,
        y: -0.0,
        z: -0.0
    }
});

// Subscribing to a Topic
// 创建一个topic,它的名字是'/chatter',,消息类型是'std_msgs/String'
var listener = new ROSLIB.Topic({
    ros: ros,
    name: '/chatter',
    messageType: 'std_msgs/String'
});

//#region Function
function Publish()//在点击”Publish”按钮后发布消息，并对消息进行更改
{
    //发布twist消息
    // cmdVel.publish(twist);
    // console.log("ChangeValue : " , ChangeValue)
    // console.log("ChangeValue Type : " , typeof(ChangeValue))
    // twist.linear.x = ChangeValue;
    twist.linear.x = 1;
    console.log("twist.linear.x : ")
    console.log(twist.linear.x)
    
    twist.linear.y = 0.0;
    twist.linear.z = 0.0;
    twist.angular.x = 0.0;
    twist.angular.y = 0.0;
    twist.angular.z = 0.0;

    cmdVel.publish(twist);
}

function Subscribe()//在点击”Subscribe”按钮后订阅'/chatter'的消息，并将其显示到网页中
{
    listener.subscribe(function (message) {
        document.getElementById("output").innerHTML = ('Received message on ' + listener.name + ': ' + message.data);
    });
}

function Unsubscribe()//在点击”Unsubscribe”按钮后取消订阅'/chatter'的消息
{
    listener.unsubscribe();
}
//#endregion

// var joy1IinputPosX = document.getElementById("joy1PosizioneX");
// var joy1InputPosY = document.getElementById("joy1PosizioneY");
// var joy1Direzione = document.getElementById("joy1Direzione");
// var joy1X = document.getElementById("joy1X");
// var joy1Y = document.getElementById("joy1Y");
// var Joy1 = new JoyStick('joy1Div', {}, function (stickData) {
//     joy1IinputPosX.value = stickData.xPosition;
//     joy1InputPosY.value = stickData.yPosition;
//     joy1Direzione.value = stickData.cardinalDirection;
//     joy1X.value = stickData.x;
//     joy1Y.value = stickData.y;
// });

// var joy2Param = { "title": "joystick2", "autoReturnToCenter": false };
// var Joy2 = new JoyStick('joy2Div', joy2Param);

// var joy2IinputPosX = document.getElementById("joy2PosizioneX");
// var joy2InputPosY = document.getElementById("joy2PosizioneY");
// var joy2Direzione = document.getElementById("joy2Direzione");
// var joy2X = document.getElementById("joy2X");
// var joy2YV = document.getElementById("joy2Y").value;
// var joy2Y = document.getElementById("joy2Y");
// console.log("Here is JOY2Y : ");
// console.log(joy2YV)

// console.log("Here is JOY2Y type : ");
// console.log(typeof(joy2YV))


// console.log("Here is JOY2Y change : ");
// let ChangeValue = parseFloat(joy2YV)

// console.log("Here is ChangeValue  : ");
// console.log(ChangeValue)


// console.log("Here is ChangeValue  Type : ");
// console.log(typeof(ChangeValue))


// setInterval(function () { joy2IinputPosX.value = Joy2.GetPosX(); }, 50);
// setInterval(function () { joy2InputPosY.value = Joy2.GetPosY(); }, 50);
// setInterval(function () { joy2Direzione.value = Joy2.GetDir(); }, 50);
// setInterval(function () { joy2X.value = Joy2.GetX(); }, 50);
// setInterval(function () { joy2Y.value = Joy2.GetY(); }, 50);
// var a = 1;
// console.log("a : ");
// console.log((parseFloat(a)));
// console.log("JOY2Y : ");
// console.log((parseFloat(setInterval(joy2Y.value))));