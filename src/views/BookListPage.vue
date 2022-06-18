<template>
  <div class="d-flex justify-content-center align-content-center relative">
    <h1>書本列表</h1>
    <div class="absolute top-25 right-0">
      <p-button
        icon="pi pi-plus-circle"
        class="p-button-rounded p-button-success p-button-lg"
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
  <command-book ref="commandBook"></command-book>
</template>

<script>
// eslint-disable-next-line import/no-cycle
import { getBooks } from '@/apis/SystemApi';
import CommandBook from '@/components/CommandBook.vue';

export default {
  components: {
    'command-book': CommandBook,
  },
  data() {
    return {
      books: [],
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
