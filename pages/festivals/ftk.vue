<script setup lang="ts">
const nuxtApp = useNuxtApp();
const runtimeConfig = useRuntimeConfig();
const apiBase = runtimeConfig.public.apiBase;
const userLocale = useState("userLocale");

//   Fetching from local file for now
const { data: ftkData } = await useFetch<Record<string, any> | null>(`${apiBase}/ftk_${userLocale.value}.json`, {
  getCachedData: (key) => {
    return nuxtApp.payload?.data[key] || nuxtApp.static?.data[key];
  },
});
</script>

<template lang="html">
  <div class="container">
    <div class="col-12 col-lg-11 text-center">
      <NuxtImg
        format="webp"
        :provider="setProvider()"
        :src="setMediaUrl(`/media/festivals/ftk/cover.jpg`)"
        alt=""
        class="img-fluid"
        sizes=""
        placeholder
        loading="eager"
      />
    </div>
    <div class="text-center my-4">
      <h1 class="display-4 text-center text-light">{{ ftkData.name }}</h1>
      <p class="lead text-start text-light">{{ ftkData.description }}</p>
    </div>
    <div>
      <!-- Mission -->
      <h1 class="display-6 text-center text-light">
        {{ ftkData.mission.title }}
      </h1>
      <p class="lead text-light">{{ ftkData.mission.description }}</p>
      <!-- Structure -->
      <h1 class="display-6 text-center text-light">
        {{ ftkData.structure.title }}
      </h1>
      <p class="lead text-light">
        {{ ftkData.structure.description }}
      </p>
      <p class="lead text-light fw-bold">
        {{ ftkData.structure.professional_plays.title }}
      </p>
      <p class="lead text-light">
        {{ ftkData.structure.professional_plays.description }}
      </p>
      <p class="lead text-light fw-bold">
        {{ ftkData.structure.amateur_plays.title }}
      </p>
      <p class="lead text-light">
        {{ ftkData.structure.amateur_plays.description }}
      </p>
      <!-- Additional Program -->
      <h1 class="display-6 text-center text-light">
        {{ ftkData.additional_program.title }}
      </h1>
      <p class="lead text-light">
        {{ ftkData.additional_program.description }}
      </p>
      <ul class="text-light">
        <li v-for="p in ftkData.additional_program.content" :key="p">
          <p class="lead text-light">
            {{ p }}
          </p>
        </li>
      </ul>
      <!-- Awards -->
      <h1 class="display-6 text-center text-light">
        {{ ftkData.awards.title }}
      </h1>
      <p class="lead text-light">
        {{ ftkData.awards.description }}
      </p>
      <ul class="text-light">
        <li v-for="p in ftkData.awards.categories" :key="p">
          <p class="lead text-light">
            {{ p }}
          </p>
        </li>
      </ul>
      <!-- Significance -->
      <h1 class="display-6 text-center text-light">
        {{ ftkData.significance.title }}
      </h1>
      <p class="lead text-light">
        {{ ftkData.significance.description }}
      </p>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
