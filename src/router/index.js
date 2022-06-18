import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/book_list',
    name: 'book_list',
    component: () => import('../views/BookListPage.vue'),
  },
  {
    path: '/book_detail/:id/',
    name: 'book_detail',
    component: () => import('../views/BookDetailPage.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
