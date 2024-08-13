<script setup lang="ts">
const props = defineProps<{
  date: string;
  time: string;
  details: {
    databaseID: number;
    name: string;
    slug: string;
    translation?: string;
  };
  eventID: string;
}>();

const { data: translations } = useNuxtData("translations");
const eventDate = computed(() => props.date.split("-"));

onMounted(() => {
  //
});
</script>

<template lang="html">
  <div class="row mt-3">
    <div class="col">
      <StagePill ref="stagePillElement" :stage="details.stage" class="stage-pill">
        <template #stage>
          <span class="d-flex justify-content-center align-items-center stage-name">
            {{ getTranslation(details, "stage") }}</span
          >
        </template>
      </StagePill>
    </div>
  </div>
  <div class="row row-cols-auto mb-3">
    <!-- Col-1 -->
    <div class="col d-flex flex-column align-items-end pe-1">
      <NuxtLinkLocale class="" :to="`/events/plays/${details.slug}`">
        <slot name="images" />
      </NuxtLinkLocale>
    </div>
    <!-- Col-2 -->
    <div class="col d-flex flex-column align-items-start ps-1">
      <p class="fs-6 fw-bold mb-0">{{ eventDate[0] }} {{ eventDate[1] }}</p>
      <span>{{ eventDate[2] }}</span>
      <p class="fst-italic fs-5 mt-md-4">{{ time }}</p>
    </div>
    <!-- Col-3 -->
    <div class="col-4 d-flex flex-column flex-grow-1 justify-content-between align-items-start ps-1">
      <div>
        <NuxtLinkLocale class="nav-link" :to="`/events/plays/${details.slug}`">
          <p class="d-flex d-block d-md-none fw-bold mb-0">
            {{ getTranslation(details, "name") }}
          </p>
        </NuxtLinkLocale>
        <span class="d-block d-md-none"> {{ getTranslation(details, "genre") }} </span>
        <p class="d-none d-md-block text-uppercase text-bold fw-bold fs-5 mb-0">
          {{ getTranslation(details, "name") }}
        </p>
      </div>
      <TicketButton size="small" :eventID="eventID" color="primary" :padding="4" :paddingY="1" class="mt-2">
        <template #text> {{ translations.events.ticket }} </template>
      </TicketButton>
    </div>
  </div>
  <div class="row"><hr class="m-0" /></div>
</template>

<style lang="css" scoped>
.stage-pill {
  width: 81px;
}

.stage-name {
  font-size: x-small;
}
</style>
