import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://js-react-node-default-rtdb.firebaseio.com/products'
})

export default instanse;