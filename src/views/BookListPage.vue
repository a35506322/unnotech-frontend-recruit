<template>
  <div class="d-flex justify-content-center">
    <h1>書本列表</h1>
  </div>
  <div class="row row-cols-2">
    <div clsss="col">
      <div class="d-flex justify-content-center col-12">
         <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>
    </div>
    <div clsss="col">
      <div class="d-flex justify-content-center col-12">
         <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
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
