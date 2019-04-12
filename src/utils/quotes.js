import axios from 'axios';

const quotes = axios.create({
  baseURL: 'https://quotes.rest/',
  headers: { Accept: 'application/json' }
});

export default quotes;
