import axios from "axios";

const addProperty = (fields) => {
  axios
    .post("https://surreal-api.herokuapp.com/api/v1/PropertyListing/", fields)
    .then((res) => {
      console.log(res);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default addProperty;
