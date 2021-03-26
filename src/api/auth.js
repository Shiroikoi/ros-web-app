import axios from "axios";
export default function authGET(cb1, header) {
  return new Promise((rs, rj) => {
    axios
      .get("http://localhost:3000/auth", { headers: { "ROS-Token": header } })
      .then(function(res) {
        if (res.status == "200") {
          console.log(res);
          rs();
          cb1();
        } else if (res.status == "403") {
          console.log(res);
          rj();
        }
      })
      .catch(function(err) {
        console.log(err);
        rj();
      });
  });
}
