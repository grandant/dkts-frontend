<script setup lang="ts">
const currentFilter = useState("current", () => []);
const audienceFilter = useState("audience", () => []);
const genreFilter = useState("genre", () => []);
const loading = ref(true);

const { data: plays } = await useFetch(setApiUrl("/plays/"), {
  key: "plays",
  headers: { "X-User-Locale": useState("userLocale") },
  // watch: [loading],
});

// watchEffect(() => {
//   console.log(loading.value);
//   console.log(plays.value);
// });

onMounted(() => {
  // loading.value = false;
});
</script>

<template lang="html">
  <div id="playsVue">
    <NuxtPage />
  </div>
</template>

<style lang="css" scoped></style>
