import axios from "axios";
export default function loginPOST(authSucess, passwordIncorrect, userNotFound, networkIssue, data) {
  return new Promise((reslove, reject) => {
    axios
      .post("http://localhost:3000/auth", data)
      .then(function(response) {
        if (response.status == "200") {
          console.log(response);
          authSucess();
          reslove({ id: response.headers["ros-userid"], token: response.headers["ros-token"] });
          reslove();
        } else if (response.status == "401") {
          console.log(response);
        }
      })
      .catch(function(error) {
        if (error.response.status == "401") {
          console.log(error.response);
          passwordIncorrect();
          reject();
        } else if (error.response.status == "401") {
          console.log(error.response);
          passwordIncorrect();
          reject();
        } else {
          console.log(error);
          reject();
        }
      });
  });
}
