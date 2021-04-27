let poseListener = new window.ROSLIB.Topic({
  ros: ros,
  name: "/robot_pose",
  messageType: "geometry_msgs/Pose",
  throttle_rate: 100,
});
poseListener.subscribe(function(pose) {
  robotMarker.x = pose.position.x;
  robotMarker.y = -pose.position.y;
  if (!initScaleSet) {
    robotMarker.scaleX = 1.0 / stage.scaleX;
    robotMarker.scaleY = 1.0 / stage.scaleY;
    initScaleSet = true;
  }
  robotMarker.rotation = stage.rosQuaternionToGlobalTheta(pose.orientation);
});




let poseListener = new window.ROSLIB.Topic({
  ros: that.ROS,
  name: "/tf",
  messageType: "tf2_msgs/TFMessage",
  throttle_rate: 1,
});
poseListener.subscribe(function(pose) {
  if (pose.transforms[0].child_frame_id == "base_footprint") {
    robotMarker.x = pose.transforms[0].transform.translation.x;
    robotMarker.y = pose.transforms[0].transform.translation.y - 1;
    robotMarker.rotation = stage.rosQuaternionToGlobalTheta(
      pose.transforms[0].transform.rotation
    );
  }
});
gridClient.on("change", function() {
  window.viewer.scaleToDimensions(
    gridClient.currentGrid.width,
    gridClient.currentGrid.height
  );
});
