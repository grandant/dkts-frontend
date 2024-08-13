<script setup lang="ts">
const nuxtApp = useNuxtApp();
const userLocale = useState("userLocale");

onMounted(async () => {
  //
});
</script>

<template lang="html">
  <div id="homepage" class="container-fluid">
    <HomeMainCarousel />
    <HomeCalendar />
    <HomeMainAccent />
  </div>
</template>

<style lang="css" scoped>
#homepage {
  margin-top: -54px;
}
</style>
