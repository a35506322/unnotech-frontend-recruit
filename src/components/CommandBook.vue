<template>
  <p-dialog
    v-bind:header="isNew ? '新增書本' : '修改書本'"
    position="top"
    modal="true"
    v-model:visible="isVisible"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '50vw' }"
    class="p-fluid"
  >
    <form @submit.prevent="saveItem" class="p-fluid">
      <div class="field">
        <label for="title">書本名稱<span class="text-pink-800"> (必填)</span></label>
        <p-inputtext id="title" v-model.trim="v$.item.title.$model" autofocus
        v-bind:class="{'p-invalid':v$.item.title.$invalid}"></p-inputtext>
        <small v-if="v$.item.title.required.$invalid" class="p-error">
          書本名稱為必輸
        </small>
      </div>
      <div class="field">
        <label for="author">作者<span class="text-pink-800"> (必填)</span></label>
        <p-inputtext id="author" v-model.trim="v$.item.author.$model" autofocus
        v-bind:class="{'p-invalid':v$.item.author.$invalid}"></p-inputtext>
        <small v-if="v$.item.author.required.$invalid" class="p-error">
          作者為必輸
        </small>
      </div>
      <div class="field">
        <label for="description">備註<span class="text-pink-800"> (必填)</span></label>
        <p-textarea
          id="description"
          v-model.trim="v$.item.description.$model"
          v-bind:class="{'p-invalid':v$.item.description.$invalid}"
          autofocus
          v-bind:autoResize="true"
          rows="5"
          cols="30"
        ></p-textarea>
        <small v-if="v$.item.description.required.$invalid" class="p-error">
          備註為必輸
        </small>
      </div>
      <div class="p-dialog-footer">
        <p-button
          label="取消"
          icon="pi pi-times"
          v-on:click="close"
          class="p-button-text"
        ></p-button>
        <p-button label="儲存" icon="pi pi-check" type="submit" v-bind:loading="isLoading"></p-button>
      </div>
    </form>
  </p-dialog>
</template>

<script>
import { required } from '@vuelidate/validators';
import commandDialogMixins from '@/mixins/CommandDialogMixins';

export default {
  mixins: [commandDialogMixins],
  validations() {
    return {
      item: {
        title: { required },
        author: { required },
        description: { required },
      },
    };
  },
};
</script>

<style></style>
