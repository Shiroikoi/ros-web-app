<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto" :class="deny ? 'animate__animated animate__tada' : ''">
        <v-sheet elevation="6" shaped height="400" width="450" class="pa-6" color="#62727b" dark>
          <v-row justify="center" align="center">
            <v-col cols="auto">
              <h2>Login</h2>
            </v-col>
            <v-col cols="12" class="pb-0">
              <v-form ref="form" @submit.prevent lazy-validation>
                <v-text-field
                  v-model="email"
                  clear-icon="mdi-close-circle"
                  clearable
                  @click:clear="clearEmail"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  :type="show ? 'text' : 'password'"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="passwordRules"
                  clear-icon="mdi-close-circle"
                  clearable
                  @click:clear="clearPassword"
                  @click:append="show = !show"
                  label="Password"
                  required
                ></v-text-field>
              </v-form>
            </v-col>
            <v-col cols="12" class="pt-0">
              <v-btn small color="error" class="mr-4" @click="reset">
                Reset Form
              </v-btn>
              <v-btn small type="submit" color="success" @click="submit">
                Submit
              </v-btn>
              <v-dialog width="500" v-model="showDialog">
                <template v-slot:activator="activator">
                  <v-btn color="red lighten-2" dark v-bind="activator.value">
                    Click Me
                  </v-btn>
                </template>
                <span>dialog</span>
              </v-dialog>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import { mapState } from "vuex";
  export default {
    name: "Login",
    beforeRouteEnter(to, from, next) {
      console.log(to);
      if (to.fullPath.match("deny=1")) {
        next((vm) => {
          vm.deny = true;
        });
      } else {
        next();
      }
    },
    data: () => ({
      deny: false,
      showDialog: false,
      email: "",
      password: "",
      show: false,
      emailRules: [(v) => !!v || "E-mail is required", (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"],
      passwordRules: [(v) => !!v || "password is required"],
    }),
    computed: mapState(["loginState", "auth", "userID", "token"]),

    methods: {
      showD() {
        this.showDialog = true;
      },
      async submit() {
        if (!this.validate()) {
          console.log("invalided");
        } else {
          await this.$store.dispatch("login", { email: this.email, password: this.password });
          if (this.loginState == -3) {
            console.log("network");
          } else if (this.loginState == -2) {
            console.log(1);
            this.showDialog = true;
            console.log("password");
          } else if (this.loginState == -1) {
            console.log("usernotfound");
          } else if (this.auth == true) {
            console.log("sucess");
            console.log(this.token);
            localStorage.setItem("ROS-token", this.token);
            this.$router.push({ path: "/user/" + this.userID });
          }
        }
      },
      validate() {
        return this.$refs.form.validate();
      },
      reset() {
        this.$refs.form.reset();
      },
      resetValidation() {
        this.$refs.form.resetValidation();
      },
      clearPassword() {
        this.password = "";
      },
      clearEmail() {
        this.email = "";
      },
    },
  };
</script>
