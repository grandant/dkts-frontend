<script setup lang="ts">
const { data: actors } = await useFetch(setApiUrl("/actors/"), {
  key: "actors",
  headers: { "X-User-Locale": useState("userLocale") },
});
</script>

<template lang="html">
  <div id="actorsVue">
    <NuxtPage />
  </div>
</template>

<style lang="css" scoped></style>
