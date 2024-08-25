<script setup lang="ts">
const nuxtApp = useNuxtApp();

const userLocale = useState("userLocale", () => nuxtApp.$i18n.locale.value);
const userTimezone = useState("userTimezone", () => {
  if (process.client) {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  return "Europe/Sofia";
});

const { data: translations } = await useFetch(setApiUrl("/translations/"), {
  key: "translations",
  headers: { "X-User-Locale": useState("userLocale") },
});

const { data: searchData } = await useFetch(setApiUrl("/search/"), {
  key: "searchData",
  headers: { "X-User-Locale": useState("userLocale") },
});

const { data: highlights } = await useFetch(setApiUrl("/plays/highlights"), {
  key: "highlights",
  headers: { "X-User-Locale": useState("userLocale") },
});

const { data: events } = await useFetch(setApiUrl("/calendar/"), {
  key: "calendar",
  headers: {
    "X-User-Locale": useState("userLocale"),
    "X-User-Timezone": useState("userTimezone"),
  },
});

const { data: commonImages, error } = await useFetch(setApiUrl("/media/common-images"), {
  key: "commonImages",
});

const userDevice = useState("userDevice", () => useDevice());

const { isSupported, orientation } = useScreenOrientation();
const userScreenOrientation = useState("userScreenOrientation", () => orientation.value);

const { width } = useWindowSize();
const userDisplaySize = useState("userDisplaySize", () => "");

watchEffect(() => {
  // console.log(userDevice.value);
  // userDevice.value = useDevice();
  userDisplaySize.value = getDisplaySize(width.value);
  userLocale.value = nuxtApp.$i18n.locale.value;
  userScreenOrientation.value = orientation.value;
});

useSeoMeta({
  title: () => translations.value.common.title,
  description: () => translations.value.common.description,
  ogTitle: () => translations.value.common.title,
  ogDescription: () => translations.value.common.description,
  ogImage: "/index.jpg",
  ogUrl: "https://www.dktshumen.com",
  twitterTitle: () => translations.value.common.title,
  twitterDescription: () => translations.value.common.description,
  twitterImage: "/index.jpg",
  twitterCard: "summary",
});

onMounted(() => {
  // console.log(userTimezone.value);
});
</script>

<template>
  <NuxtLayout name="default">
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="css">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
