<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
const current = useState("current");
const currentRadio = useState("currentRadio");
const audience = useState("audience");
const audienceFilterNames = useState("audienceFilterNames");
const audienceFilterValues = useState("audienceFilterValues");
const genre = useState("genre");
const genreFilterNames = useState("genreFilterNames");
const genreFilterValues = useState("genreFilterValues");

onMounted(() => {
  currentRadio.value = true;
});
</script>

<template lang="html">
  <div class="modal fade" id="filtersModal" tabindex="-1" aria-labelledby="filtersModal" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen text-light">
      <div class="modal-content bg-gray-blurred">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="filtersModal">Event Filters</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body fs-5">
          <!-- Current filter -->
          <div class="row d-flex justify-content-center mt-3">
            <div class="col-5 ps-0">
              <input
                v-model="current"
                type="radio"
                class="btn-check"
                name="current-filter"
                id="currentTrue"
                value="true"
                autocomplete="on"
              />
              <label class="btn btn-outline-primary rounded-5 w-100" for="currentTrue">
                {{ translations.events.current }}
              </label>
            </div>
            <div class="col-5 pe-0">
              <input
                v-model="current"
                type="radio"
                class="btn-check"
                name="current-filter"
                id="currentFalse"
                value=""
                :checked="currentRadio"
                autocomplete="on"
              />
              <label class="btn btn-outline-primary rounded-5 w-100" for="currentFalse">All</label>
            </div>
          </div>
          <!-- Audience filters -->
          <div class="col-12 d-flex flex-column ms-3 mt-4">
            <span class="mb-2 fw-bold">{{ translations.events.audience }}</span>
            <div v-for="(filter, key) in audienceFilterNames" class="form-check form-switch">
              <input
                v-model="audience"
                :id="audienceFilterValues[key]"
                :value="audienceFilterValues[key]"
                autocomplete="on"
                class="form-check-input"
                type="checkbox"
                role="switch"
              />
              <label class="form-check-label" :for="audienceFilterValues[key]">{{ filter.name }}</label>
            </div>
          </div>
          <!-- Genre filters -->
          <div class="col-12 d-flex flex-column ms-3 mt-4">
            <span class="mb-2 fw-bold"> {{ translations.events.genre }}</span>
            <div v-for="(filter, key) in genreFilterNames" class="form-check form-switch">
              <input
                v-model="genre"
                :id="genreFilterValues[key]"
                :value="genreFilterValues[key]"
                autocomplete="on"
                class="form-check-input"
                type="checkbox"
                role="switch"
                :disabled="!filter.visible"
              />
              <label class="form-check-label" :for="genreFilterValues[key]">{{ filter.name }}</label>
            </div>
          </div>
          <!-- Reset button -->
          <div class="col-12 text-center mt-5">
            <PlaysFiltersResetButton />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.bg-gray-blurred {
  --bs-bg-opacity: 0.01;
}
</style>
