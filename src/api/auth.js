import axios from "axios";
export default function authGET(authSucess, header) {
  return new Promise((rs, rj) => {
    axios
      .get("http://100.2.34.28:3000/auth", { headers: { "ROS-Token": header } })
      .then(function(response) {
        if (response.status == "200") {
          console.log(response);
          authSucess(response.headers["ros-userid"]);
          rs();
        } else if (response.status == "403") {
          console.log(response);
          rj();
        }
      })
      .catch(function(err) {
        console.log(err);
        rj();
      });
  });
}
