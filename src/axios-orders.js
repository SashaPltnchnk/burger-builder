import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-react-burger-builder-91efd.firebaseio.com/'
});

export default instance;