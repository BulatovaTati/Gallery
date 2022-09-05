import axios from 'axios';

export default class Gallery {
  #API_KEY = '29527006-ad6e7c34d6702116665004a30';
  #BASE_URL = 'https://pixabay.com/api/';

  constructor() {
    this.page = 1;
    this.searchQuery = '';
    this.per_page = 40;
  }

  async fetchPictures() {
    const url = await axios.get(this.#BASE_URL, {
      params: {
        key: this.#API_KEY,
        q: this.searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: this.page,
        per_page: this.per_page,
      },
    });

    return url.data;
  }
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

// const axios = require('axios').default;
// axios.defaults.baseURL = 'https://pixabay.com/api';
// axios.defaults.params = {
//   key: API_KEY,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: 'true',
// };