<template>
  <div class="d-flex justify-content-center">
    <h1>{{ book.title }}</h1>
  </div>
  <div class="row">
    <div class="col-12">
      <h2>名稱：</h2>
      <span class="p-fluid text-2xl" >{{ book.title }}</span>
    </div>
    <div class="col-12">
      <h2>作者：</h2>
      <span class="p-fluid text-2xl" >{{ book.author }}</span>
    </div>
    <div class="col-12">
      <h2>備註：</h2>
      <p class="text-lg" >{{ book.description }}</p>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-cycle
import { getBook } from '@/apis/SystemApi';

export default {
  data() {
    return {
      book: {},
    };
  },
  mounted() {
    this.getBook();
  },
  methods: {
    async getBook() {
      const response = await getBook(this.$route.params.id).then((res) => res);
      if (response.status !== 200) {
        return;
      }
      this.book = response.data;
    },
  },
};
</script>
