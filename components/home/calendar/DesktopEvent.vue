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

const stagePillElement: Ref<HTMLElement | null> = ref(null);
const marginTop: Ref<number | null> = ref(null);
const { height: stagePillHeigth } = useElementSize(stagePillElement);

const readMoreButton: Ref<HTMLElement | null> = ref(null);
const buttonWidth: Ref<number | null> = ref(null);
const { width: readMoreBtnWidth } = useElementSize(readMoreButton);

onMounted(() => {
  marginTop.value = stagePillHeigth.value + 3;
  buttonWidth.value = readMoreBtnWidth.value;
});
</script>

<template lang="html">
  <!-- row-cols-auto gap-0 gap-lg-2 gap-xl-4 mx-0 mx-xl-5 my-4 px-0 px-xl-3 pt-2 -->
  <div class="row mx-0 mx-xl-5 my-4 px-0 px-xl-3 pt-2">
    <!-- Col-1 -->
    <div class="col d-flex flex-column align-items-start col-max">
      <NuxtLinkLocale class="" :to="`/events/plays/${details.slug}`">
        <slot name="images" />
      </NuxtLinkLocale>
    </div>
    <!-- Col-2 -->
    <div id="colTwo" class="col d-flex flex-column align-items-center ps-1 col-max">
      <p class="fs-5 fw-bold mb-0 dynamic-element" :style="{ marginTop: marginTop + 'px' }">
        {{ eventDate[0] }} {{ eventDate[1] }}
      </p>
      <p>{{ eventDate[2] }}</p>
      <p class="fst-italic fs-5">{{ time }}</p>
    </div>
    <!-- Col-3 -->
    <div class="col d-flex flex-column justify-content-between align-items-start">
      <StagePill ref="stagePillElement" :stage="details.stage">
        <template #stage>
          {{ getTranslation(details, "stage") }}
        </template>
      </StagePill>
      <div>
        <NuxtLinkLocale class="nav-link" :to="`/events/plays/${details.slug}`">
          <p id="title" class="text-uppercase text-bold fw-bold fs-5 mb-0">
            {{ getTranslation(details, "name") }}
          </p>
        </NuxtLinkLocale>
        <p class="">{{ getTranslation(details, "genre") }}</p>
        <p class="">{{ getTranslation(details, "director") }}</p>
        <p class="">{{ details.length }} {{ translations.events.minutes }}</p>
      </div>
    </div>
    <!-- Col-4 - tablet-->
    <div id="colFourTablet" class="col d-flex d-xl-none flex-column justify-content-center align-items-end col-max">
      <TicketButton :eventID="eventID" color="primary" :padding="4" :style="{ width: buttonWidth + 'px' }" class="">
        <template #text> {{ translations.events.ticket }} </template>
      </TicketButton>
      <StandardButton
        ref="readMoreButton"
        :link="`/events/plays/${details.slug}`"
        color="darker"
        :padding="4"
        class="mt-4"
      >
        <template #text> {{ translations.events.more }} </template>
      </StandardButton>
    </div>
    <!-- Col-4 - desktop -->
    <div class="col-5 d-none d-xl-flex flex-column justify-content-center align-items-end col-four">
      <div>
        <TicketButton :eventID="eventID" color="primary" class="me-4">
          <template #text> {{ translations.events.ticket }} </template>
        </TicketButton>
        <StandardButton :link="`/events/plays/${details.slug}`" color="darker" class="">
          <template #text> {{ translations.events.more }} </template>
        </StandardButton>
      </div>
    </div>
  </div>
  <div class="mx-0 mx-xl-5 my-4 px-0 px-xl-3"><hr class="m-0" /></div>
</template>

<style lang="css" scoped>
.col-max {
  max-width: max-content;
}
</style>
