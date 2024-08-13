<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
const { data: images } = useNuxtData("commonImages");

const userDevice = useState("userDevice");
const stages = ["main", "small", "children"];
const stagesData = useState("stagesData", () => translations.value.stages);

const stageImages = images.value.stages;
const mainStageImages = stageImages.main.layout;
const smallStageImages = stageImages.small.layout;
const childrenStageImages = stageImages.children.layout;

const galleryRefs = {
  main: ref<HTMLElement[]>([]),
  small: ref<HTMLElement[]>([]),
  children: ref<HTMLElement[]>([]),
};

const galleries = {
  main: useDynamicGallery(
    computed(() => galleryRefs.main.value[0]),
    stageImages.main.layout,
    "/media/stages/main",
    stagesData.value.main_title,
  ),
  small: useDynamicGallery(
    computed(() => galleryRefs.small.value[0]),
    stageImages.small.layout,
    "/media/stages/small",
    stagesData.value.small_title,
  ),
  children: useDynamicGallery(
    computed(() => galleryRefs.children.value[0]),
    stageImages.children.layout,
    "/media/stages/children",
    stagesData.value.children_title,
  ),
};
watchEffect(() => {
  stagesData.value = translations.value.stages;
});

onMounted(() => {
  galleries.main.initGallery({ allowMediaOverlap: false });
  galleries.small.initGallery({ allowMediaOverlap: false });
  galleries.children.initGallery({ allowMediaOverlap: false });
});
</script>

<template lang="html">
  <div class="container my-3">
    <div class="row row-cols-auto justify-content-center mx-0 px-0 mx-xl-5 px-xl-5">
      <div v-for="stage in stages" class="col-12 col-md-6 col-lg-4 px-2 px-xl-4 mt-3 card-col">
        <StageCard>
          <template #images>
            <NuxtImg
              format="webp"
              :provider="setProvider()"
              :src="setMediaUrl(`/media/stages/${stage}/photos/1.jpg`)"
              :alt="`${stage} - Photo`"
              class="img-fluid card-img-top"
              sizes="150px md:150px lg:220px xl:150px xxl:320px"
              placeholder
            />
          </template>
          <template #title>
            <h1 class="fs-4 fw-bold">{{ stagesData[`${stage}_title`] }}</h1>
          </template>
          <template #cardText>
            <p v-for="p in stagesData[stage].split('\n')">
              {{ p }}
            </p>
          </template>
          <template #buttons>
            <span :ref="galleryRefs[stage]" @click="galleries[stage].openGallery(1)" class="row px-2">
              <StandardButton color="primary mt-3" :rounded="1" :paddingY="userDevice.isMobile ? 1 : 3">
                <template #text>
                  {{ stagesData.floor }}
                </template>
              </StandardButton>
            </span>
            <span @click="galleries[stage].openGallery()" class="row px-2">
              <StandardButton class="mt-3" color="darker" :rounded="1" :paddingY="userDevice.isMobile ? 1 : 3">
                <template #text>
                  {{ stagesData.seating }}
                </template>
              </StandardButton>
            </span>
          </template>
        </StageCard>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.bg-darker {
  --bs-bg-opacity: 1;
}
</style>
