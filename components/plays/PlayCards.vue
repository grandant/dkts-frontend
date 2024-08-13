<script setup lang="ts">
const { data: plays } = useNuxtData("plays");
const currentFilter = useState("current");
const audienceFilter = useState("audience");
const genreFilter = useState("genre");
const activeFilters = computed(() => {
  return [...currentFilter.value, ...audienceFilter.value, ...genreFilter.value];
});

const filteredPlays = computed(() =>
  plays.value.filter((play) => useFilters(play, currentFilter, audienceFilter, genreFilter)),
);

onMounted(() => {
  // watchEffect(() => {
  //   console.log(audienceFilter.value);
  // });
});
</script>

<template lang="html">
  <div class="container mt-4">
    <Transition>
      <div :key="activeFilters.length" class="row row-cols-auto justify-content-center">
        <div
          v-for="play in filteredPlays"
          :key="play"
          :data-groups="play.filter"
          class="col-6 col-md-4 col-lg-3 col-xl-3 mb-3 card-col"
        >
          <div class="row row-cols-auto justify-content-between text-light mx-0 stage-pill">
            <StagePill :stage="play.stage" :paddingX="1">
              <template #stage>
                {{ getTranslation(play, "stage") }}
              </template>
            </StagePill>
            <div class="col pe-0">
              {{ play.length }}
            </div>
          </div>
          <PlayCard :playLink="play.slug" :isCurrent="play.current" :ticket-link="play.entase_data?.[0]?.id ?? null">
            <template #images>
              <NuxtImg
                format="webp"
                :provider="setProvider()"
                :src="setMediaUrl(`/media/plays/${play.slug}/poster.jpg`)"
                :alt="`${play.name} - Poster`"
                class="card-img-top img-fluid rounded-0"
                :width="10"
                :height="14"
                sizes="150px sm:35vw md:15vw lg:10vw xl:15vw"
                :placeholder="[10, 14]"
              />
            </template>

            <template #name>
              {{ getTranslation(play, "name") }}
            </template>
          </PlayCard>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="css" scoped>
.v-enter-active {
  transition: all 0.8s;
}

.v-leave-active {
  transition: all 0.2s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

@media (max-width: 767px) {
  .stage-pill {
    font-size: small;
  }
}
</style>
