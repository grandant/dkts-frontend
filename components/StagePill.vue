<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    stage: string;
    paddingX?: number;
  }>(),
  {
    paddingX: 0,
  },
);

const stagePillColors = {
  "Small Stage": "warning",
  "Main Stage": "primary",
  "Children Stage": "success",
  "Outside the Theatre": "info",
};
</script>

<template lang="html">
  <div :class="[`text-bg-${stagePillColors[stage]}`, `px-${paddingX}`]" class="badge px-md-3 py-0 py-md-1">
    <slot name="stage" />
  </div>
</template>

<style lang="css" scoped></style>
