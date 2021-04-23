<template>
  <v-container class="pa-0 ma-0" fluid>
    <v-tabs v-model="tab" color="#ffa726" background-color="#37474f" dark>
      <v-tab key="1">Robot State</v-tab>
      <v-tab key="2">Control Panel1</v-tab>
      <v-tab ket="3">Control Panel2</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item key="1">
        <v-container>
          <v-row justify="center">
            <v-col cols="auto">
              <v-card width="650" height="600">
                <v-container>
                  <v-row justify="center">
                    <v-col cols="8">
                      <v-text-field
                        dense
                        v-model="url"
                        label="type websocket address here"
                      >
                        <template v-slot:append-outer>
                          <v-btn
                            small
                            color="#ffa726"
                            tile
                            :loading="loading"
                            :disabled="loading"
                            @click="connect"
                          >
                            connect
                          </v-btn>
                        </template>
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="3">
                      <v-text-field
                        dense
                        v-model="pubTopicName"
                        label="topic name"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="5">
                      <v-text-field dense v-model="pubMsgType" label="msgtype">
                        <template v-slot:append-outer>
                          <v-btn
                            small
                            color="#ffa726"
                            tile
                            @click="pubTopic"
                            :disabled="!connected"
                          >
                            publish
                          </v-btn>
                        </template>
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="3">
                      <v-text-field
                        dense
                        v-model="subTopicName"
                        label="topic name"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="5">
                      <v-text-field dense v-model="subMsgType" label="msgtype">
                        <template v-slot:append-outer>
                          <v-btn
                            small
                            color="#ffa726"
                            tile
                            :disabled="!connected"
                            @click="subTopic"
                          >
                            subscribe
                          </v-btn>
                        </template>
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="3">
                      <v-text-field
                        dense
                        v-model="srvName"
                        label="service name"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="5">
                      <v-text-field dense v-model="srvType" label="srvtype">
                        <template v-slot:append-outer>
                          <v-btn
                            small
                            color="#ffa726"
                            tile
                            :disabled="!connected"
                            @click="callSrv"
                          >
                            call service
                          </v-btn>
                        </template>
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="4">
                      <v-text-field
                        dense
                        v-model="getParamName"
                        label="param name"
                      >
                        <template v-slot:append-outer>
                          <v-btn
                            small
                            color="#ffa726"
                            tile
                            :disabled="!connected"
                            @click="getParam"
                          >
                            get
                          </v-btn>
                        </template>
                      </v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-text-field
                        dense
                        v-model="setParamName"
                        label="param name"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        dense
                        v-model="setParamType"
                        label="paramtype"
                      >
                        <template v-slot:append-outer>
                          <v-btn
                            small
                            color="#ffa726"
                            tile
                            :disabled="!connected"
                            @click="setParam"
                          >
                            set
                          </v-btn>
                        </template>
                      </v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
            <v-col cols="auto">
              <v-card width="350" height="600">
                <v-container>
                  <v-row justify="center">
                    <v-col cols="auto"><img width="150" height="150" /> </v-col>
                    <v-col cols="auto" class="px-8 py-0">
                      connected:
                      <v-icon v-if="connected" color="success"
                        >mdi-check-bold</v-icon
                      >
                      <v-icon v-if="!connected" color="red"
                        >mdi-close-thick</v-icon
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

      <v-tab-item key="2">
        <v-container class="">
          <v-row justify="center">
            <v-col cols="auto">
              <v-card width="900" height="600">
                <v-container class="pa-0">
                  <div id="view"></div>
                </v-container>
              </v-card>
            </v-col>
            <v-col cols="auto" class="pl-0">
              <v-card width="200" height="600">
                <v-btn @click="addView">add view</v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

      <v-tab-item key="3">
        <v-container>
          <v-row justify="center">
            <v-col cols="auto">
              <v-card width="800" height="600">
                <v-container class="pa-0">
                  <div id="map"></div>
                </v-container>
              </v-card>
            </v-col>
            <v-col cols="auto" class="pl-0">
              <v-card width="300" height="600">
                <v-container class="">
                  <v-row>
                    <v-col cols="6">
                      <v-btn tile @click="addMap">create map</v-btn>
                    </v-col>
                    <v-col cols="6">
                      <v-btn tile @click="addNav">navgate</v-btn>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="pb-0" cols="4">
                      <v-text-field dense label="X" v-model="scaleX">
                      </v-text-field>
                    </v-col>
                    <v-col class="pb-0" cols="7">
                      <v-text-field dense label="Y" v-model="scaleY">
                        <template v-slot:append-outer>
                          <v-btn small tile @click="scale">scale</v-btn>
                        </template>
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="py-0" cols="4">
                      <v-text-field dense label="X" v-model="shiftX">
                      </v-text-field>
                    </v-col>
                    <v-col class="py-0" cols="7">
                      <v-text-field dense label="Y" v-model="shiftY">
                        <template v-slot:append-outer>
                          <v-btn small tile @click="shift">shift</v-btn>
                        </template>
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center" class="pt-1">
                    <v-col class="py-0"
                      ><v-switch inset label="keyboard controll"></v-switch
                    ></v-col>
                    <v-col cols="12" class="text-center">
                      <v-btn>forward</v-btn>
                    </v-col>
                    <v-col>
                      <v-btn>left</v-btn>
                    </v-col>
                    <v-col>
                      <v-btn color="red">stop</v-btn>
                    </v-col>
                    <v-col>
                      <v-btn>right</v-btn>
                    </v-col>
                    <v-col cols="12" class="text-center">
                      <v-btn>down</v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>
<script>
  export default {
    name: "ControlPanel",
    data: () => ({
      scaleX: 0,
      shiftX: 0,
      shiftY: 0,
      scaleY: 0,
      tab: null,
      text: "123",
      connected: false,
      loading: false,
      url: "",
      tfClient: null,
      urdfClient: null,
      pubMsgType: null,
      subMsgType: null,
      pubTopicName: null,
      subTopicName: null,
      srvName: null,
      srvType: null,
      getParamName: null,
      getParamType: null,
      setParamName: null,
      setParamType: null,
      handel: function(event) {
        if (event.code == "KeyA") {
          return null;
        } else if (event.code == "KeyW") {
          return null;
        } else if (event.code == "KeyD") {
          return null;
        } else if (event.code == "KeyX") {
          return null;
        } else if (event.code == "KeyS") {
          return null;
        }
      },
    }),
    computed: {
      ROS() {
        return this.$store.state.ROS;
      },
    },
    methods: {
      connect() {
        this.loading = true;
        let that = this;
        setTimeout(() => {
          that.loading = false;
        }, 10000);
        function cb(signal) {
          if (signal == 1) {
            Promise.resolve().then(() => {
              that.connected = true;
              that.loading = false;
            });
          } else {
            Promise.resolve().then(() => {
              that.connected = false;
              that.loading = false;
            });
          }
        }
        this.$store.commit(
          "createROS",
          new window.ROSLIB.Ros({
            url: this.url,
          })
        );

        this.$store.state.ROS.on("connection", function() {
          console.log("connected");
          cb(1);
        });
        this.$store.state.ROS.on("error", function() {
          console.log("error");
          cb(-1);
        });
        this.$store.state.ROS.on("close", function() {
          console.log("closed");
          cb(-1);
        });
      },
      pubTopic() {
        let that = this;
        let topic = new window.ROSLIB.Topic({
          ros: that.ROS,
          name: that.pubTopicName,
          messageType: that.pubMsgType,
        });
        window.ROSMSG = new window.ROSLIB.Message({
          linear: {
            x: 0.1,
            y: 0.0,
            z: 0.0,
          },
          angular: {
            x: 0.0,
            y: 0.0,
            z: 0.0,
          },
        });
        topic.publish(window.ROSMSG);
      },
      subTopic() {},
      callSrv() {},
      getParam() {},
      setParam() {},
      addView() {
        let VNC = document.createElement("iframe");
        let view = document.querySelector("#view");
        VNC.src = "http://100.2.199.124:8080/guacamole/#/?username=admin&password=admin";
        VNC.width = "100%";
        VNC.height = "600px";
        view.append(VNC);
      },
      addMap() {
        let that = this;
        let map = document.querySelector("#map");
        if (map.firstChild) map.firstChild.remove();
        window.viewer = new window.ROS2D.Viewer({
          divID: "map",
          width: 800,
          height: 600,
        });
        let gridClient = new window.ROS2D.OccupancyGridClient({
          ros: that.ROS,
          rootObject: window.viewer.scene,
        });

        let stage = window.viewer.scene.getStage();
        let robotMarker = new window.ROS2D.NavigationArrow({
          size: 0.2, //25
          strokeSize: 0.01,
          fillColor: window.createjs.Graphics.getRGB(255, 128, 0, 0.66),
          pulse: false,
        });
        robotMarker.visible = true;
        window.viewer.scene.addChild(robotMarker);
        let poseListener = new window.ROSLIB.Topic({
          ros: that.ROS,
          name: "/tf",
          messageType: "tf2_msgs/TFMessage",
          throttle_rate: 1,
        });
        poseListener.subscribe(function(pose) {
          if (pose.transforms[0].child_frame_id == "base_footprint") {
            robotMarker.x = pose.transforms[0].transform.translation.x;
            robotMarker.y = pose.transforms[0].transform.translation.y;
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
      },
      addNav() {
        let that = this;
        let map = document.querySelector("#map");
        if (map.firstChild) map.firstChild.remove();

        window.viewer = new window.ROS2D.Viewer({
          divID: "map",
          width: 800,
          height: 600,
        });
        window.nav = window.NAV2D.OccupancyGridClientNav({
          ros: that.ROS,
          rootObject: window.viewer.scene,
          viewer: window.viewer,
          serverName: "/move_base",
          actionName: "move_base_msgs/MoveBaseAction",
        });
        (function() {
          let pathView = new window.ROS2D.PathShape({
            ros: that.ROS,
            strokeSize: 0.02,
            strokeColor: "green",
          });

          window.viewer.scene.addChild(pathView);

          let pathTopic = new window.ROSLIB.Topic({
            ros: that.ROS,
            name: "/move_base/NavfnROS/plan",
            messageType: "nav_msgs/Path",
          });

          pathTopic.subscribe(function(message) {
            pathView.setPath(message);
          });
        })();
      },

      scale() {
        window.viewer.scaleToDimensions(this.scaleX, this.scaleY);
      },
      shift() {
        window.viewer.shift(this.shiftX, this.shiftY);
      },
      forward() {
        return null;
      },
      left() {
        return null;
      },
      down() {
        return null;
      },
      right() {
        return null;
      },
      stop() {
        return null;
      },
      Keyboard(signal) {
        if (signal) {
          document.addEventListener("keydown", this.handel);
        } else {
          document.addEventListener("keydown", this.handel);
        }
      },
    },
  };
</script>
<style scoped>
  .text-center {
    text-align: center;
  }
</style>
