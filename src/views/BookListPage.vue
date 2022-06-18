<template>
  <div class="d-flex justify-content-center align-content-center relative mb-3">
    <h1>書本列表</h1>
    <div class="d-flex align-items-center">
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <p-inputtext type="text" v-on:input="searchBook" v-model="tempBook"
        placeholder="請輸入書名"></p-inputtext>
      </span>
    </div>
    <div class="absolute top-25 right-0">
      <p-button
        icon="pi pi-plus-circle"
        label="新增"
        class="p-button-success p-button-lg"
        v-on:click="openCommandBook"
      ></p-button>
    </div>
  </div>
  <div class="row">
    <div
      class="col-sm-12 col-md-6 flex justify-content-center"
      v-for="book in booksOfPage"
      v-bind:key="book.id"
    >
      <div class="relative">
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
        <p-button
          icon="bi bi-trash"
          class="p-button-rounded p-button-danger p-button-lg ml-2 absolute top--10 right--5"
          v-on:click="deleteBookById(book)"
        >
        </p-button>
      </div>
    </div>
    <p-paginator v-bind:rows="rows" v-bind:totalRecords="pageCount" ref="paginator"
    v-on:page="onPage($event,isSearch)"></p-paginator>
  </div>
  <command-book ref="commandBook" v-bind:is-new="true" v-on:save-item="saveAddBook"
  v-bind:is-loading="loading" v-bind:tempItem="{}"></command-book>
  <p-confirm-dialog></p-confirm-dialog>
</template>

<script>
// eslint-disable-next-line import/no-cycle
import { getBooks, addBook, deleteBook } from '@/apis/SystemApi';
import commandBook from '@/components/CommandBook.vue';

export default {
  components: {
    'command-book': commandBook,
  },
  data() {
    return {
      books: [],
      loading: false,
      rows: 0,
      booksOfPage: [],
      tempBook: '',
      pageCount: 0,
      isSearch: false,
      currentStart: 0,
      currentEnd: 0,
    };
  },
  async mounted() {
    console.log('mounted');
    await this.getBooks();
    this.rows = 5;
    this.booksOfPage = this.books.slice(0, this.rows);
    this.pageCount = this.books.length;
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
      this.$router.push(`/books/${id}/`);
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
      await this.reloadPageInfo();
      this.loading = false;
    },
    deleteBookById(book) {
      this.$confirm.require({
        message: `確定要刪除此本書籍 『${book.title ? book.title : ''}』 嗎?`,
        header: '刪除警告',
        icon: 'pi pi-exclamation-triangle',
        accept: async () => {
          const response = await deleteBook(book.id).then((res) => res);
          if (response.status !== 200) {
            return;
          }
          this.$toast.add({
            severity: 'success', summary: '刪除成功', detail: '', life: 3000,
          });
          await this.reloadPageInfo();
        },
        reject: () => {
        },
      });
    },
    onPage(event, isSearch) {
      this.currentStart = this.rows * event.page;
      this.currentEnd = this.rows * (event.page + 1);
      if (isSearch) {
        const filterBooks = this.filterBookByTitle();
        this.booksOfPage = filterBooks.slice(this.currentStart, this.currentEnd);
      } else {
        this.booksOfPage = this.books.slice(this.currentStart, this.currentEnd);
      }
    },
    async reloadPageInfo() {
      await this.getBooks();
      this.pageCount = this.books.length;
      this.booksOfPage = this.books.slice(this.currentStart, this.currentEnd);
    },
    filterBookByTitle() {
      const result = this.books.filter((book) => {
        if (!book.title) { return false; }
        return book.title.includes(this.tempBook);
      });
      return result;
    },
    searchBook() {
      // 如果為falsy直接跳回第一頁
      if (!this.tempBook) {
        this.isSearch = false;
        this.booksOfPage = this.books.slice(0, this.rows);
        this.pageCount = this.books.length;
        this.$refs.paginator.d_first = 0;
        return;
      }
      const filterBooks = this.filterBookByTitle();
      this.isSearch = true;
      this.booksOfPage = filterBooks.slice(0, this.rows);
      // 頁數需要也跟著更新
      this.pageCount = filterBooks.length;
      this.$refs.paginator.d_first = 0;
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

  .top--10 {
    top: -10%;
  }

  .right--5 {
    right: -5%;
  }
</style>
