<script setup lang="ts">
const props = defineProps<{
  categories?: string[];
  filterNames?: string[];
  filterValues?: string[];
}>();

const { data: translations } = useState("translations");
</script>

<template lang="html">
  <div v-for="(filter, key) in filterNames" class="form-check form-switch">
    <input
      v-model="model"
      :id="filter"
      class="form-check-input"
      type="checkbox"
      :value="filterValues[key]"
      role="switch"
    />
    <label class="form-check-label" :for="name">{{ key }}</label>
  </div>
</template>

<style lang="css" scoped></style>
