import axios from '../plugins/axios';

// book 相關API
export const getBooks = () => axios.get('/books/').then((res) => res).catch((err) => err);
export const getBook = (id) => axios.get(`/books/${id}/`).then((res) => res).catch((err) => err);
