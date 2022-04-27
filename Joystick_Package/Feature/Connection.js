// Connecting to ROS
var ros = new ROSLIB.Ros({
    url: 'ws://10.10.0.96:9090'
  });

  //判断是否连接成功并输出相应的提示消息到web控制台
  ros.on('connection', function () {
    console.log('Connected to websocket server.');
  });

  ros.on('error', function (error) {
    console.log('Error connecting to websocket server: ', error);
  });

  ros.on('close', function () {
    console.log('Connection to websocket server closed.');
  });

  // Publishing a Topic
  var cmdVel = new ROSLIB.Topic({
    ros: ros,
    name: 'ls50_velocity_controller/cmd_vel',
    messageType: 'geometry_msgs/Twist'
  });//创建一个topic,它的名字是'/cmd_vel',,消息类型是'geometry_msgs/Twist'

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
  });//创建一个message

  function func()//在点击”Publish”按钮后发布消息，并对消息进行更改
  {
    cmdVel.publish(twist);//发布twist消息
    twist.linear.x = 1.0;
    twist.linear.y = 0.0;
    twist.linear.z = 0.0;
    twist.angular.x = 0.0;
    twist.angular.y = 0.0;
    twist.angular.z = 0.0;
  }

  // Subscribing to a Topic
  var listener = new ROSLIB.Topic({
    ros: ros,
    name: '/chatter',
    messageType: 'std_msgs/String'
  });//创建一个topic,它的名字是'/chatter',,消息类型是'std_msgs/String'

  function subscribe()//在点击”Subscribe”按钮后订阅'/chatter'的消息，并将其显示到网页中
  {
    listener.subscribe(function (message) {
      document.getElementById("output").innerHTML = ('Received message on ' + listener.name + ': ' + message.data);
    });
  }

  function unsubscribe()//在点击”Unsubscribe”按钮后取消订阅'/chatter'的消息
  {
    listener.unsubscribe();
  }