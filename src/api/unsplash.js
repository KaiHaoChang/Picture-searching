import axios from "axios";

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers : {
        Authorization: 'Client-ID F1eesQLejtKrV6P8Dk5g2IUsu3-Fo8c7QTu9Xkz5W98'
      }
})