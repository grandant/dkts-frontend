<script setup lang="ts">
defineProps<{
  playLink?: string;
  isCurrent?: boolean;
  ticketLink?: string;
  paddingY?: number;
}>();

const userLocale = useState("userLocale");

onMounted(() => {
  // if (imageSizes.value) {
  //   imageSizes.value.push(width.value);
  // }
});
</script>

<template lang="html">
  <div class="card bg-transparent border border-0 play-card">
    <NuxtLinkLocale :to="`/events/plays/${playLink}`">
      <slot name="images" />
    </NuxtLinkLocale>
    <div class="card-body d-flex px-0 fw-bold">
      <span class="card-title d-block d-md-none fs-6 m-1 ms-2">
        <slot name="name"> </slot>
      </span>
      <span class="card-title d-none d-md-block fs-5 m-1 ms-2">
        <slot name="name"> </slot>
      </span>
      <a
        v-if="isCurrent && ticketLink"
        :href="`https://www.entase.bg/book?eid=${ticketLink}&lc=${userLocale}`"
        class="link-light m-1 me-2 d-flex align-items-center"
        @click.prevent="openTicketPopup(`https://www.entase.bg/book?eid=${ticketLink}&lc=${userLocale}`)"
      >
      </a>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
