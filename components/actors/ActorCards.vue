<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
const { data: actors } = useNuxtData("actors");
const userDevice = useState("userDevice");
</script>

<template lang="html">
  <div class="container">
    <div class="row row-cols-auto px-2">
      <div v-for="actor in actors" class="col-6 col-md-4 col-lg-3 col-xl-3 mb-3 p-2 card-col">
        <ActorCard
          :link="actor.nickname"
          :buttonSize="userDevice.isMobile ? 'small' : 'default'"
          buttonColor="primary"
          :buttonText="translations.about.more"
          :buttonPadding="userDevice.isMobile ? 2 : 3"
        >
          <template #images>
            <NuxtImg
              format="webp"
              :provider="setProvider()"
              :src="setMediaUrl(`/media/actors/${actor.nickname}/profile.jpg`)"
              :alt="`Profile - ${actor.name}`"
              class="card-img-top img-fluid rounded-top-4 p-2"
              width="1040"
              height="1290"
              sizes="320px md:220px lg:240 xl:340 xxl:340"
              :placeholder="[10, 14]"
              loading="lazy"
            />
          </template>
          <template #name>
            {{ getTranslation(actor, "name") }}
          </template>
        </ActorCard>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
