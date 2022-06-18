<template>
  <div class="d-flex justify-content-center align-content-center relative">
    <h1>書本列表</h1>
    <div class="absolute top-25 right-0">
      <p-button
        icon="pi pi-plus-circle"
        class="p-button-rounded p-button-success p-button-lg"
        v-on:click="openCommandBook"
      ></p-button>
    </div>
  </div>
  <div class="row">
    <div
      class="col-sm-12 col-md-6 flex justify-content-center"
      v-for="book in books"
      v-bind:key="book.id"
    >
      <p-card
        class="card-wrapper transition-linear transition-duration-500
        bg-blue-500 hover:bg-yellow-500 text-white hover:text-gray-900"
        v-on:click="goBookDetailById(book.id)"
      >
        <template #title>書名：{{ book.title }}</template>
        <template #content>
          <p>作者：{{ book.author }}</p>
        </template>
      </p-card>
    </div>
  </div>
  <command-book ref="commandBook" v-bind:is-new="true" v-on:save-item="saveAddBook"
  v-bind:is-loading="loading" v-bind:tempItem="{}"></command-book>
</template>

<script>
// eslint-disable-next-line import/no-cycle
import { getBooks, addBook } from '@/apis/SystemApi';
import commandBook from '@/components/CommandBook.vue';

export default {
  components: {
    'command-book': commandBook,
  },
  data() {
    return {
      books: [],
      loading: false,
    };
  },
  mounted() {
    this.getBooks();
  },
  methods: {
    async getBooks() {
      const response = await getBooks().then((res) => res);
      if (response.status !== 200) {
        return;
      }
      this.books = response.data;
    },
    goBookDetailById(id) {
      this.$router.push(`/book_detail/${id}/`);
    },
    openCommandBook() {
      this.$refs.commandBook.show();
    },
    async saveAddBook(book) {
      this.loading = true;
      const response = await addBook(book).then((res) => res);
      if (response.status !== 201) {
        this.loading = false;
        return;
      }
      this.$toast.add({
        severity: 'success', summary: '新增成功', detail: '', life: 3000,
      });
      await this.getBooks();
      this.loading = false;
    },
  },
};
</script>

<style scoped>
  .card-wrapper {
    width: 25rem;
    margin-bottom: 2em;
    cursor: pointer;
  }

  .top-25 {
    top: 25%;
  }
</style>
