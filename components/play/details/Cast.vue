<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
const { data: play } = useNuxtData("playData");

const userDevice = useState("userDevice");
const userDisplaySize = useState("userDisplaySize");
const currentSize = ref(userDevice.isMobile ? 150 : 250);
const imageSizes = "150px md:180px lg:250px";
const parsedSizes = parseImageSizes(imageSizes);
</script>

<template lang="html">
  <!-- Production crew -->
  <div class="row mt-3">
    <div class="d-flex align-items-center fs-5 fw-bold mt-4 mb-3 ps-1">
      <Icon name="ph:line-vertical-bold" class="text-primary" />
      <span class="text-light">{{ translations.events.crew }}</span>
    </div>
    <div v-for="(member, index) in play.crew" class="col-6 col-md-4 col-lg-3 mb-3 card-col">
      <!-- :style="`width: ${currentSize}px`" -->
      <ActorCard>
        <template #images>
          <NuxtImg
            format="webp"
            :provider="setProvider()"
            :src="setMediaUrl(`/profile.png`)"
            :alt="`Photo - ${member.name}`"
            class="card-img-top img-fluid gallery-slide"
            width="1000"
            height="1240"
            :sizes="imageSizes"
            loading="lazy"
          />
        </template>
        <template #name>
          {{ getTranslation(member, "name") }}
        </template>
        <template #role>
          {{ translations.events[member.role] }}
        </template>
      </ActorCard>
    </div>
  </div>
  <!-- Cast -->
  <div class="row mt-3">
    <div class="d-flex align-items-center fs-5 fw-bold mt-4 mb-3 ps-1">
      <Icon name="ph:line-vertical-bold" class="text-primary" />
      <span class="text-light">{{ translations.events.cast }}</span>
    </div>
    <div v-for="(actor, index) in play.actors" :key="actor.nickname" class="col-6 col-md-4 col-lg-3 mb-3 card-col">
      <!-- :style="`width: ${currentSize}px`" -->
      <ActorCard
        :link="actor.nickname"
        :buttonSize="userDevice.isMobile ? 'small' : 'default'"
        buttonColor="primary"
        :buttonText="translations.events.more"
        :buttonPadding="2"
      >
        <template #images>
          <NuxtImg
            format="webp"
            :provider="setProvider()"
            :src="setMediaUrl(`/media/actors/${actor.nickname}/profile.jpg`)"
            :alt="`Photo - ${actor.name}`"
            class="card-img-top img-fluid gallery-slide"
            width="1000"
            height="1240"
            :sizes="imageSizes"
            loading="lazy"
          />
        </template>
        <template #name>
          <span class="">{{ getTranslation(actor, "name") }}</span>
        </template>
      </ActorCard>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
