<script setup lang="ts">
const { data: translations } = useNuxtData("translations");

// const { data: images } = await useFetch(setApiUrl("/images/history"), {
//   getCachedData(key) {
//     return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
//   },
// });

onMounted(async () => {
  // await refresh();
});
</script>

<template lang="html">
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-11 text-center">
        loading="lazy"
        <img
          format="webp"
          :src="`/media/history/top.jpg`"
          alt=""
          class="img-fluid"
          sizes=""
          placeholder
          loading="eager"
        />
      </div>
      <div class="text-center my-3">
        <h1 class="display-4 text-light">{{ translations.history["text_title"] }}</h1>
      </div>
    </div>
    <!-- P 1 -->
    <HistoryParagraph>
      <template #text>
        {{ translations.history.p1 }}
      </template>
    </HistoryParagraph>
    <!-- P 2 -->
    <HistoryParagraph>
      <template #images>
        <figure class="figure col-12 col-md-4 col-xl-2 float-end">
          <img
            format="webp"
            :src="`/media/history/1.jpg`"
            alt=""
            class="img-fluid w-100"
            sizes=""
            placeholder
            loading="lazy"
          />
          <figcaption class="figure-caption text-center">{{ translations.history["pic1"] }}</figcaption>
        </figure>
      </template>
      <template #text>
        {{ translations.history.p2 }}
      </template>
    </HistoryParagraph>
    <!-- P 3 -->
    <HistoryParagraph>
      <template #text>
        {{ translations.history.p3 }}
      </template>
    </HistoryParagraph>
    <!-- P 4 -->
    <HistoryParagraph>
      <template #images>
        <div class="row justify-content-center">
          <figure class="figure col-12 col-md-11 col-lg-9">
            <img
              format="webp"
              :src="`/media/history/2.jpg`"
              alt=""
              class="img-fluid w-100"
              sizes=""
              placeholder
              loading="lazy"
            />
            <figcaption class="figure-caption text-center">{{ translations.history["pic2"] }}</figcaption>
          </figure>
        </div>
      </template>
      <template #text>
        {{ translations.history.p4 }}
      </template>
    </HistoryParagraph>
    <!-- P 5 -->
    <HistoryParagraph>
      <template #images>
        <figure class="figure col-12 col-md-4 col-xl-3 float-end">
          <img
            format="webp"
            :src="`/media/history/3.jpg`"
            alt=""
            class="img-fluid w-100"
            sizes=""
            placeholder
            loading="lazy"
          />
          <figcaption class="figure-caption text-center">{{ translations.history["pic3"] }}</figcaption>
        </figure>
      </template>
      <template #text>
        {{ translations.history.p5 }}
      </template>
    </HistoryParagraph>
    <!-- P 6 -->
    <HistoryParagraph>
      <template #text>
        {{ translations.history.p6 }}
      </template>
    </HistoryParagraph>
    <div class="row align-items-center">
      <figure class="figure col-12 col-md-6">
        <img
          format="webp"
          :src="`/media/history/4.jpg`"
          alt=""
          class="img-fluid w-100"
          sizes=""
          placeholder
          loading="lazy"
        />
        <figcaption class="figure-caption text-center">{{ translations.history["pic4"] }}</figcaption>
      </figure>
      <figure class="figure col-12 col-md-6">
        <img
          format="webp"
          :src="`/media/history/5.jpg`"
          alt=""
          class="img-fluid w-100"
          sizes=""
          placeholder
          loading="lazy"
        />
        <figcaption class="figure-caption text-center">{{ translations.history["pic5"] }}</figcaption>
      </figure>
    </div>
    <!-- P 7 -->
    <HistoryParagraph>
      <template #text>
        {{ translations.history.p7 }}
        <br />
        <br />
        {{ translations.history.p8 }}
        <br />
        <br />
        {{ translations.history.p9 }}
        <br />
        <br />
        {{ translations.history.p10 }}
        <br />
        <br />
        {{ translations.history.p11 }}
      </template>
    </HistoryParagraph>
    <div class="row align-items-center">
      <figure class="figure col-12 col-md-5">
        <img
          format="webp"
          :src="`/media/history/6.jpg`"
          alt=""
          class="img-fluid w-100"
          sizes=""
          placeholder
          loading="lazy"
        />
        <figcaption class="figure-caption text-center">{{ translations.history["pic6"] }}</figcaption>
      </figure>
      <figure class="figure col-12 col-md-3">
        <img
          format="webp"
          :src="`/media/history/7.jpg`"
          alt=""
          class="img-fluid w-100"
          sizes=""
          placeholder
          loading="lazy"
        />
        <figcaption class="figure-caption text-center">{{ translations.history["pic7"] }}</figcaption>
      </figure>
      <figure class="figure col-12 col-md-4">
        <img
          format="webp"
          :src="`/media/history/8.jpg`"
          alt=""
          class="img-fluid w-100"
          sizes=""
          placeholder
          loading="lazy"
        />
        <figcaption class="figure-caption text-center">{{ translations.history["pic8"] }}</figcaption>
      </figure>
    </div>
    <!-- P 8 -->
    <HistoryParagraph>
      <template #text>
        {{ translations.history.p12 }}
        <br />
        <br />
        {{ translations.history.p13 }}
        <br />
        <br />
        {{ translations.history.p14 }}
        <br />
        <br />
        {{ translations.history.p15 }}
      </template>
    </HistoryParagraph>
    <!-- P 9 -->
    <HistoryParagraph>
      <template #images>
        <figure class="figure col-12 col-md-4 col-xl-3 float-end">
          <img
            format="webp"
            :src="`/media/history/9.jpg`"
            alt=""
            class="img-fluid w-100"
            sizes=""
            placeholder
            loading="lazy"
          />
          <figcaption class="figure-caption text-center">{{ translations.history["pic9"] }}</figcaption>
        </figure>
      </template>
      <template #text>
        {{ translations.history.p16 }}
      </template>
    </HistoryParagraph>
    <!-- P 10 -->
    <HistoryParagraph>
      <template #text>
        {{ translations.history.p17 }}
      </template>
    </HistoryParagraph>
    <!-- P 11 -->
    <HistoryParagraph>
      <template #images>
        <figure class="figure col-12 col-md-7 col-xl-5 float-start">
          <img
            format="webp"
            :src="`/media/history/10.jpg`"
            alt=""
            class="img-fluid w-100"
            sizes=""
            placeholder
            loading="lazy"
          />
          <figcaption class="figure-caption text-center">{{ translations.history["pic10"] }}</figcaption>
        </figure>
      </template>
      <template #text>
        {{ translations.history.p18 }}
      </template>
    </HistoryParagraph>
    <!-- P 12 -->
    <HistoryParagraph>
      <template #text>
        {{ translations.history.p19 }}
        <br />
        <br />
        {{ translations.history.p20 }}
      </template>
    </HistoryParagraph>
    <div class="row align-items-center">
      <figure class="figure col-12 col-md-6">
        <img
          format="webp"
          :src="`/media/history/11.jpg`"
          alt=""
          class="img-fluid w-100"
          sizes=""
          placeholder
          loading="lazy"
        />
        <figcaption class="figure-caption text-center">{{ translations.history["pic11"] }}</figcaption>
      </figure>
      <figure class="figure col-12 col-md-6">
        <img
          format="webp"
          :src="`/media/history/12.jpg`"
          alt=""
          class="img-fluid w-100"
          sizes=""
          placeholder
          loading="lazy"
        />
        <figcaption class="figure-caption text-center">{{ translations.history["pic11"] }}</figcaption>
      </figure>
    </div>
    <!-- P 13 -->
    <HistoryParagraph>
      <template #text>
        {{ translations.history.p21 }}
        <br />
        <br />
        {{ translations.history.p22 }}
        <br />
        <br />
        {{ translations.history.p23 }}
        <br />
        <br />
        {{ translations.history.p24 }}
      </template>
    </HistoryParagraph>
    <div class="row">
      <figure class="figure col-12 col-md-6">
        <img
          format="webp"
          :src="`/media/history/13.jpg`"
          alt=""
          class="img-fluid w-100"
          sizes=""
          placeholder
          loading="lazy"
        />
        <figcaption class="figure-caption text-center">{{ translations.history["pic12"] }}</figcaption>
      </figure>
      <figure class="figure col-12 col-md-6">
        <img
          format="webp"
          :src="`/media/history/14.jpg`"
          alt=""
          class="img-fluid w-100"
          sizes=""
          placeholder
          loading="lazy"
        />
        <figcaption class="figure-caption text-center">{{ translations.history["pic12"] }}</figcaption>
      </figure>
    </div>
  </div>
</template>

<style lang="css" scoped>
img {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
