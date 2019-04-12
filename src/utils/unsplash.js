import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization:
      'Client-ID 0bfa78ed588a5844ca3fccae8ed374ace2be68c9a32014b2d610f7bec7e544be'
  }
});

export default unsplash;
