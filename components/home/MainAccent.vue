<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
const { data: highlights } = useNuxtData("highlights");
const { data: images } = useNuxtData("highlightImages");

const mainAccent = computed(() => highlights.value[2]);
const shortDescription = computed(() => getTranslation(mainAccent.value, "short_description"));
const userDevice = useState("userDevice");
// const eventID = computed(() => mainAccent.value.entase_data[0].id)

onMounted(() => {
  // console.log(mainAccent.value);
  userDevice.value = useDevice();
});
</script>

<template lang="html">
  <div class="row justify-content-center text-light bg-darker">
    <div class="col-12 col-lg-10 col-xl-8 my-3 my-lg-5 px-4 px-md-5 px-lg-4">
      <div id="colContainer" class="row row-cols-auto align-items-center rounded-5 bg-gray-blurred gradient-border">
        <div class="col-12 col-lg-7 p-4 p-lg-5">
          <p class="text-uppercase text-bold fw-bold fs-5 mb-4">
            {{ getTranslation(mainAccent, "name") }}
          </p>
          <span id="playDescription" class="mb-4">
            <p v-for="paragraph in shortDescription.split('\n')">{{ paragraph }}</p>
          </span>
          <!-- Mobile buttons -->
          <div v-if="userDevice?.isMobile" class="col d-flex d-md-none justify-content-between">
            <TicketButton
              :eventID="mainAccent.entase_data?.[0]?.id ?? null"
              size="small"
              color="primary"
              :padding="4"
              class="h-100 me-0 me-md-3"
            >
              <template #text>{{ translations.home.ticket }}</template>
            </TicketButton>
            <StandardButton
              :to="`/events/plays/${mainAccent.slug}`"
              size="small"
              :padding="4"
              color="darker"
              class="h-100"
            >
              <template #text>{{ translations.home.more }}</template>
            </StandardButton>
          </div>
          <!-- Desktop buttons -->
          <div v-else class="col d-none d-md-flex justify-content-between">
            <TicketButton
              :eventID="mainAccent.entase_data?.[0]?.id ?? null"
              size="default"
              color="primary"
              :padding="5"
              class="h-100 me-0 me-md-3"
            >
              <template #text>{{ translations.home.ticket }}</template>
            </TicketButton>
            <StandardButton
              :to="`/events/plays/${mainAccent.slug}`"
              size="default"
              :padding="5"
              color="darker"
              class="h-100"
            >
              <template #text>{{ translations.home.more }}</template>
            </StandardButton>
          </div>
        </div>
        <div class="col-12 col-lg-5 order-first order-lg-last p-4 pe-lg-5">
          <NuxtImg
            format="webp"
            :provider="setProvider()"
            :src="setMediaUrl(`/media/plays/${mainAccent.slug}/photos/main.jpg`)"
            :alt="`${mainAccent.name} - Poster`"
            class="img-fluid w-100 border border-3"
            sizes="250px lg:200px xl:500px"
            :placeholder="[5]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
#playDescription {
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
}

/* p {
  display: inline;
}

p::after {
  content: "\A\A";
  white-space: pre;
} */

.img-fluid {
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 1);
}
</style>
