import axios from '../plugins/axios';

// book 相關API
export const getBooks = () => axios.get('/books/').then((res) => res).catch((err) => err);
export const getBook = (id) => axios.get(`/books/${id}/`).then((res) => res).catch((err) => err);
export const addBook = (book) => axios.post('/books/', book).then((res) => res).catch((err) => err);
export const updateBook = (id, book) => axios.patch(`/books/${id}/`, book).then((res) => res).catch((err) => err);
export const deleteBook = (id) => axios.delete(`/books/${id}/`).then((res) => res).catch((err) => err);
