<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
const current = useState("current");
const audience = useState("audience");

const audienceFilterNames = useState("audienceFilterNames", () => []);

const audienceFilterValues = useState("audienceFilterValues", () => ["adults", "children"]);

const genreFilterNames = useState("genreFilterNames", () => []);

const genreFilterValues = useState("genreFilterValues", () => [
  "drama",
  "comedy",
  "other",
  "puppet-show",
  "children-play",
]);

const updateAudienceFilterNames = (newTranslations) =>
  (audienceFilterNames.value = [
    { name: newTranslations.events.adults, visible: true },
    { name: newTranslations.events.children, visible: true },
  ]);

const updateGenreFilterNames = (newTranslations) =>
  (genreFilterNames.value = [
    { name: newTranslations.events.drama, visible: true },
    { name: newTranslations.events.comedy, visible: true },
    { name: newTranslations.events.other, visible: true },
    { name: newTranslations.events.puppet, visible: true },
    { name: newTranslations.events.childPlay, visible: true },
  ]);

watch(translations, (newTranslations) => {
  updateAudienceFilterNames(newTranslations);
  updateGenreFilterNames(newTranslations);
});

watchEffect(() => {
  const selectedFilters = audience.value;
  if (selectedFilters.length === 1) {
    if (selectedFilters.includes("adults")) {
      genreFilterNames.value.forEach((filter) => {
        if (filter.name === translations.value.events.puppet || filter.name === translations.value.events.childPlay) {
          filter.visible = false;
        }
      });
    } else if (selectedFilters.includes("children")) {
      genreFilterNames.value.forEach((filter) => {
        if (
          filter.name === translations.value.events.drama ||
          filter.name === translations.value.events.comedy ||
          filter.name === translations.value.events.other
        ) {
          filter.visible = false;
        }
      });
    }
  } else {
    genreFilterNames.value.forEach((filter) => {
      filter.visible = true;
    });
  }
});

onMounted(() => {
  updateAudienceFilterNames(translations.value);
  updateGenreFilterNames(translations.value);
  // watchEffect(() => {
  //   console.log(translations.value);
  // });
});
</script>

<template lang="html">
  <div id="mobileFilters" class="container-fluid d-block d-md-none sticky-top z-1 bg-custom">
    <div class="container d-flex py-2">
      <button
        type="button"
        class="btn btn-primary d-flex align-items-center rounded-5 mx-auto px-5"
        data-bs-toggle="modal"
        data-bs-target="#filtersModal"
      >
        <Icon name="bi:filter-circle-fill" class="text-light me-2" />
        Filters
      </button>
    </div>
  </div>
  <PlaysFiltersMobileFilters />
  <!-- Desktop Filters -->
  <div id="desktopFilters" class="container-fluid d-none d-md-block sticky-top z-1 bg-custom">
    <div class="container d-flex text-center py-3">
      <div class="btn-group gap-3 me-3" role="group" aria-label="Plays filter button group">
        <PlaysFiltersFilterButton v-model="current" :filterName="translations.events.current" filterValue="true" />
        <PlaysFiltersFilterDropdown
          category="audience"
          :filterNames="audienceFilterNames"
          :filterValues="audienceFilterValues"
        />
        <PlaysFiltersFilterDropdown
          category="genre"
          :filterNames="genreFilterNames"
          :filterValues="genreFilterValues"
        />
      </div>
      <PlaysFiltersResetButton class="ms-auto" />
    </div>
  </div>
</template>

<style lang="css" scoped>
#mobileFilters {
  top: 54px;
  margin-top: -54px;
}

#desktopFilters {
  top: 54px;
  margin-top: -70px;
}
</style>
