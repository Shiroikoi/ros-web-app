<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        <v-sheet elevation="6" shaped height="400" width="450" class="pa-6" color="#62727b" dark>
          <v-row justify="center" align="center">
            <v-col cols="auto">
              <h2>Login</h2>
            </v-col>
            <v-col cols="12" class="pb-0">
              <v-form ref="form" v-model="valid" @submit.prevent lazy-validation>
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
                  :type="show1 ? 'text' : 'password'"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  clear-icon="mdi-close-circle"
                  clearable
                  @click:clear="clearPassword"
                  @click:append="show = !show"
                  label="Password"
                  required
                ></v-text-field>
                <v-checkbox v-model="checkbox" :rules="[(v) => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>
              </v-form>
            </v-col>
            <v-col cols="12" class="pt-0">
              <v-btn small :disabled="!valid" color="success" class="mr-4" @click="validate">
                Validate
              </v-btn>
              <v-btn small color="error" class="mr-4" @click="reset">
                Reset Form
              </v-btn>
              <v-btn small type="submit" color="success" @click="submit">
                Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import axios from "axios";
  export default {
    name: "Login",
    data: () => ({
      email: "",
      password: "",
      show: false,
      valid: true,
      emailRules: [(v) => !!v || "E-mail is required", (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"],

      checkbox: false,
    }),

    methods: {
      submit() {
        let _this = this;
        if (!this.validate()) {
          console.log(1);
        } else {
          let data = { email: this.email, password: this.password };
          axios
            .post("http://localhost:3000/auth", data)
            .then(function(response) {
              console.log(response);
              if (response.status == "200") {
                _this.$router.push({path:"/"});
              } else if (response.status == "403") {
                console.log(2);
              }
            })
            .catch(function(error) {
              console.log(error);
            });
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
