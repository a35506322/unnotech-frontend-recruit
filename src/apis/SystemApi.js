import axios from '../plugins/axios';

// book 相關API
export const getBooks = () => axios.get('/book/').then((res) => res).catch((err) => err);

export const getBooks2 = () => axios.get('/books/').then((res) => res.data);
