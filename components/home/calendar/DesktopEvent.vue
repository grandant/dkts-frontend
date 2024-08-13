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
const stagePillElement = ref(null);
const marginTop = ref(null);
const { width, height } = useElementSize(stagePillElement);

onMounted(() => {
  marginTop.value = height.value + 3;
});
</script>

<template lang="html">
  <div class="row row-cols-auto gap-0 gap-lg-3 gap-xl-5 mx-0 mx-xl-5 my-4 px-0 px-xl-3 pt-2">
    <!-- Col-1 -->
    <div class="col d-flex flex-column align-items-end ps-0">
      <slot name="images" />
    </div>
    <!-- Col-2 -->
    <div id="colTwo" class="col d-flex flex-column align-items-center ps-1">
      <p class="fs-5 fw-bold mb-0 dynamic-element" :style="{ marginTop: marginTop + 'px' }">
        {{ eventDate[0] }} {{ eventDate[1] }}
      </p>
      <p>{{ eventDate[2] }}</p>
      <p class="fst-italic fs-5">{{ time }}</p>
    </div>
    <!-- Col-3 -->
    <div class="col d-flex flex-column justify-content-between align-items-start col-3-custom">
      <StagePill ref="stagePillElement" :stage="details.stage">
        <template #stage>
          {{ getTranslation(details, "stage") }}
        </template>
      </StagePill>
      <div>
        <p id="title" class="text-uppercase text-bold fw-bold fs-5 mb-0">
          {{ getTranslation(details, "name") }}
        </p>
        <p class="">{{ getTranslation(details, "genre") }}</p>
        <p class="">{{ getTranslation(details, "director") }}</p>
        <p class="">{{ details.length }}</p>
      </div>
    </div>
    <!-- Col-4 -->
    <div class="col d-lg-flex flex-column flex-grow-1 justify-content-center align-items-center text-center">
      <TicketButton :eventID="eventID" color="primary" class="align-self-lg-end mt-3 mt-lg-0 mb-lg-4">
        <template #text> {{ translations.events.ticket }} </template>
      </TicketButton>
      <StandardButton :link="`/events/plays/${details.slug}`" color="darker" class="align-self-lg-end mt-3 ms-4">
        <template #text> {{ translations.events.more }} </template>
      </StandardButton>
      <!-- <div class="row row-cols-auto d-flex d-xl-inline-flex">
        <TicketButton :eventID="eventID" color="primary" class="align-self-lg-end">
          <template #text> {{ translations.events.ticket }} </template>
        </TicketButton>

        <StandardButton :link="`/events/plays/${details.slug}`" color="darker" class="align-self-lg-end">
          <template #text> {{ translations.events.more }} </template>
        </StandardButton>
      </div> -->
    </div>
  </div>
  <div class="mx-0 mx-xl-5 my-4 px-0 px-xl-3"><hr class="m-0" /></div>
</template>

<style lang="css" scoped>
.dynamic-element {
  /* transition: margin-top 0.3s ease; */
}
</style>
