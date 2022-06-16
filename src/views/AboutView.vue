<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.axios.get('https://fe-interview-api.unnotech.com/books/').then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>
