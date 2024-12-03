<script setup lang="ts">
const { data: events } = useNuxtData("calendar");

const hasEvents = computed(() => {
  return (
    events &&
    Object.keys(events.value || {}).some((key) => Array.isArray(events.value[key]) && events.value[key].length > 0)
  );
});

onMounted(async () => {
  //
});
</script>

<template lang="html">
  <div id="homepage" class="container-fluid">
    <HomeMainCarousel />
    <div v-if="hasEvents">
      <HomeCalendar />
    </div>
    <HomeMainAccent />
  </div>
</template>

<style lang="css" scoped>
#homepage {
  margin-top: -54px;
}
</style>
