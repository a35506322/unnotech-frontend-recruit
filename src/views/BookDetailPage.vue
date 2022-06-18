<template>
  <div class="d-flex justify-content-center align-items-center">
    <h1>{{ book.title }}</h1>
    <p-button
        icon="bi bi-pencil-square"
        label="編輯"
        class="p-button-success p-button-lg ml-2"
        v-on:click="openCommandBook"
      ></p-button>
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
  <command-book ref="commandBook" v-bind:is-new="false" v-on:save-item="saveUpdateBook"
  v-bind:is-loading="loading" v-bind:tempItem="book"></command-book>
</template>

<script>
// eslint-disable-next-line import/no-cycle
import { getBook, updateBook } from '@/apis/SystemApi';
import commandBook from '@/components/CommandBook.vue';
import { compareObjectDifferentialProperties } from '@/methods/common';

export default {
  components: {
    'command-book': commandBook,
  },
  data() {
    return {
      book: {},
      loading: false,
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
    openCommandBook() {
      this.$refs.commandBook.show();
    },
    async saveUpdateBook(newBook) {
      const compareBook = compareObjectDifferentialProperties(this.book, newBook);
      this.loading = true;
      const response = await updateBook(this.$route.params.id, compareBook).then((res) => res);
      if (response.status !== 200) {
        this.loading = false;
        return;
      }
      this.$toast.add({
        severity: 'success', summary: '修改成功', detail: '', life: 3000,
      });
      await this.getBook();
      this.loading = false;
      this.$refs.commandBook.close();
    },
  },
};
</script>
