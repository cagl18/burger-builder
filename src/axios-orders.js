import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builde.firebaseio.com/'
});

export default instance;
