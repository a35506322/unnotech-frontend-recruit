<template>
  <div class="d-flex justify-content-center">
    <h1>書本列表</h1>
  </div>
  <div class="row row-cols-2">
    <div clsss="col" v-for="(book) in books" v-bind:key="book.id">
      <div class="d-flex justify-content-center col-12 mb-1">
         <div class="card" style="width: 18rem;height: 18rem;">
          <div class="card-body">
            <h5 class="card-title">書名：{{book.title}}</h5>
            <h5 class="card-title">作者：{{book.author}}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBooks } from '@/apis/SystemApi';

export default {
  data() {
    return {
      books: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      const response = await getBooks().then((data) => data);
      if (response.status === 200) {
        this.books = response.data;
      }
    },
  },
};
</script>
