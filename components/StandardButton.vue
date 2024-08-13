<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    link?: string;
    size?: string;
    color: string;
    rounded?: number;
    padding?: number;
    paddingY?: number;
  }>(),
  {
    rounded: 5,
    padding: 5,
    paddingY: 2,
  },
);

const isSmall = ref(false);

if (props.size === "small") {
  isSmall.value = true;
}
</script>

<template lang="html">
  <NuxtLinkLocale
    :class="[{ 'btn-sm': isSmall }, `btn-${color}`, `rounded-${rounded}`, `px-${padding}`, `py-${paddingY}`]"
    :to="link"
    type="button"
    class="btn"
  >
    <slot name="text" />
  </NuxtLinkLocale>
</template>

<style lang="css" scoped>
.btn-darker {
  color: white;
  background: rgba(41, 41, 41, 1);
  box-shadow: 4px 4px 20px 3px rgba(0, 0, 0, 0.25);
}

.btn-darker:hover {
  background: rgba(0, 0, 0, 0.8);
}
</style>
