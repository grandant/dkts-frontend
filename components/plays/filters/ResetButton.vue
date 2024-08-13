<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
const currentFilter = useState("current");
const currentRadio = useState("currentRadio");
const audienceFilter = useState("audience");
const genreFilter = useState("genre");

const resetFilters = () => {
  currentFilter.value = [];
  currentRadio.value = "true";
  audienceFilter.value = [];
  genreFilter.value = [];
};
</script>

<template lang="html">
  <div class="btn-group me-0" role="group" aria-label="Reset button">
    <button @click="resetFilters" type="reset" class="btn btn-primary rounded-5 px-5">
      {{ translations.events.reset }}
    </button>
  </div>
</template>

<style lang="css" scoped></style>
