<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: string;
    // TODO: Change back to string!
    eventID?: any;
    color: string;
    padding?: number;
    paddingY?: number;
  }>(),
  {
    padding: 5,
    paddingY: 2,
  },
);

const userLocale = useState("userLocale");
const isSmall = ref(false);

if (props.size === "small") {
  isSmall.value = true;
}
</script>

<template lang="html">
  <a
    v-if="eventID"
    :class="[{ 'btn-sm': isSmall }, `btn-${color}`, `px-${padding}`, `py-${paddingY}`]"
    :href="`https://www.entase.bg/book?eid=${eventID}&lc=${userLocale}`"
    @click.prevent="openTicketPopup(`https://www.entase.bg/book?eid=${eventID}&lc=${userLocale}`)"
    type="button"
    class="btn rounded-5"
  >
    <slot name="text" />
  </a>
</template>

<style lang="css" scoped>
.btn-primary {
  box-shadow: rgba(216, 31, 37, 0.7) 4px 4px 15px;
}
</style>
