import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/books',
    name: 'book_list',
    component: () => import('../views/BookListPage.vue'),
  },
  {
    path: '/books/:id',
    name: 'book_detail',
    component: () => import('../views/BookDetailPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'book_list',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
