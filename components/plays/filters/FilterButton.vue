<script setup lang="ts">
const props = defineProps<{
  filterName?: string;
  filterValue?: string;
}>();

const model = defineModel();

onMounted(() => {
  // watchEffect(() => {
  //   console.log(current.value);
  // });
});
</script>

<template lang="html">
  <input v-model="model" type="checkbox" class="btn-check" :id="filterName" :value="filterValue" autocomplete="on" />
  <label :for="filterName" class="btn btn-outline-primary border-primary rounded-5 w-100 px-5">
    {{ filterName }}
  </label>
</template>

<style lang="css" scoped>
.btn {
  /* max-width: max-content; */
}
</style>
