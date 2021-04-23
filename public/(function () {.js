(function () {
  let pathView = new window.ROS2D.PathShape({
    ros: ros,
    strokeSize: 0.02,
    strokeColor: "green",
  });

  window.viewer.scene.addChild(pathView);

  let pathTopic = new window.ROSLIB.Topic({
    ros: ros,
    name: "/move_base/NavfnROS/plan",
    messageType: "nav_msgs/Path",
  });

  pathTopic.subscribe(function (message) {
    pathView.setPath(message);
  });
})();
