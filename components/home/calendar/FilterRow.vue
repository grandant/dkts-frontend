<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
const model = defineModel();
</script>

<template lang="html">
  <div class="d-flex justify-content-center gap-5">
    <input
      v-model="model"
      type="radio"
      class="btn-check"
      name="options-base"
      id="option5"
      autocomplete="on"
      value="adults"
    />
    <label class="calendar-filter" for="option5">{{ translations.events.adults }}</label>

    <input
      v-model="model"
      type="radio"
      class="btn-check"
      name="options-base"
      id="option6"
      autocomplete="on"
      value="children"
    />
    <label class="calendar-filter" for="option6">{{ translations.events.children }}</label>
  </div>
  <div class="row px-0 px-xl-2"><hr class="m-0" /></div>
</template>

<style lang="css" scoped>
.calendar-filter {
  text-align: center;
  text-transform: uppercase;
  min-width: 100px;
  height: 35px;
  opacity: 0.75;
}

.calendar-filter:hover {
  opacity: 1;
  cursor: pointer;
}

@media (max-width: 767px) {
  .calendar-filter {
    min-width: 80px;
  }
}

input[type="radio"]:checked + .calendar-filter {
  font-weight: bold;
  opacity: 1;
  box-shadow: rgba(255, 0, 0, 1) 0px -10px 2px -7px inset;
}
</style>
