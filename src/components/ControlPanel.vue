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
                </v-container>
              </v-card>
            </v-col>
            <v-col cols="auto">
              <v-card width="350" height="600">
                <v-container>
                  <v-row justify="center">
                    <v-col cols="auto"><img width="180" height="180" /> </v-col>
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
                <v-btn @click="addMap">add map</v-btn>
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
      tab: null,
      text: "123",
      connected: false,
      loading: false,
      url: "",
      tfClient: null,
      urdfClient: null,
    }),
    methods: {
      connect() {
        this.loading = true;
        let xixi = this;
        function cb(signal) {
          if (signal == 1) {
            Promise.resolve().then(() => {
              xixi.connected = true;
              xixi.loading = false;
            });
          } else {
            Promise.resolve().then(() => {
              xixi.connected = false;
              xixi.loading = false;
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
      addView() {
        let VNC = document.createElement("iframe");
        let view = document.querySelector("#view");
        VNC.src = "http://100.2.159.185:8080/guacamole/";
        VNC.width = "100%";
        VNC.height = "600px";
        view.append(VNC);
      },
      addMap() {
        let ros = new window.ROSLIB.Ros({
          url: "ws://100.2.159.185:9090",
        });
        window.viewer = new window.ROS2D.Viewer({
          divID: "map",
          width: 800,
          height: 600,
        });
        new window.ROS2D.OccupancyGridClient({
          ros: ros,
          rootObject: window.viewer.scene,
        });
      },
    },
  };
</script>
