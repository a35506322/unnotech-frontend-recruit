import { useVuelidate } from '@vuelidate/core';

export default {
  props: ['isNew', 'isLoading', 'tempItem'],
  data() {
    return {
      isVisible: false,
      item: {},
      v$: useVuelidate({ $lazy: true }),
    };
  },
  methods: {
    show() {
      this.isVisible = true;
    },
    close() {
      this.isVisible = false;
    },
    async saveItem() {
      // 設置$lazy: true 需使用非同步驗證
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      this.$emit('saveItem', this.item);
      // 新增完將item重製可以再新增
      if (this.isNew) {
        this.item = {};
        this.v$.$reset();
      }
    },
  },
  watch: {
    isVisible: {
      // eslint-disable-next-line no-unused-vars
      handler(newVal, oldVal) {
        this.v$.$reset();
        this.item = JSON.parse(JSON.stringify(this.tempItem));
      },
    },
  },
};
