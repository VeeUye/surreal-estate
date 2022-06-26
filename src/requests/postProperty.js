import axios from "axios";

const addProperty = (fields, setAlert) => {
  axios
    .post("https://surreal-api.herokuapp.com/api/v1/PropertyListing/", fields)
    .then((res) => {
      setAlert({
        message: "Property Added",
        isSuccess: true,
      });
      console.log(res);
      console.log(res.data);
    })
    .catch((err) => {
      setAlert({
        message: "Server Error. Please try again later",
        isSuccess: false,
      });
      console.log(err);
    });
};

export default addProperty;
