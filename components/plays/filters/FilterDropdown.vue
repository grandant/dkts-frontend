<script setup lang="ts">
const props = defineProps<{
  category?: string;
  filterNames?: string[];
  filterValues?: string[];
}>();

const { data: translations } = useNuxtData("translations");
const filterCategory = useState(props.category);

onMounted(() => {
  // watchEffect(() => {
  //   console.log(filterCategory.value);
  // });
});
</script>

<template lang="html">
  <div class="dropdown">
    <button
      class="btn btn-primary dropdown-toggle rounded-5 px-5"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ translations.events[props.category] }}
    </button>
    <ul class="dropdown-menu" data-bs-theme="dark">
      <li v-for="(filter, key) in filterNames" class="m-3">
        <PlaysFiltersFilterButton
          v-if="filter.visible"
          v-model="filterCategory"
          :filterName="filter.name"
          :filterValue="filterValues[key]"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.dropdown-menu {
  /* min-width: max-content; */
}
</style>
