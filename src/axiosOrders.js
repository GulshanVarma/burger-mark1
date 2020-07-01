import axios from 'axios'

const instance = axios.create({
        baseURL:'https://burger-mark-1.firebaseio.com/'
    });

export default instance;