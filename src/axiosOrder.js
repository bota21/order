import axios from "axios";

const instanse = axios.create({
  baseURL: "https://js-react-node-default-rtdb.firebaseio.com/69",
});

export default instanse;
