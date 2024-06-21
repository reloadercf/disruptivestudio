import axios from 'axios';

export default {
  user: axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
  }),
};
