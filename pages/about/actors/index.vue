<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
</script>

<template lang="html">
  <div id="actorsIndexVue" class="mt-3">
    <PageTitle :text="translations.common.collective" />
    <ActorsActorCards />
  </div>
</template>

<style lang="css" scoped></style>
