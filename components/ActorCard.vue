<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    link?: string;
    buttonSize?: string;
    buttonColor?: string;
    buttonText?: string;
    buttonPadding?: number;
  }>(),
  {
    buttonPadding: 4,
  },
);

const isSmall = ref(false);

if (props.buttonSize === "small") {
  isSmall.value = true;
}
</script>

<template lang="html">
  <div class="card bg-darker text-light actor-card">
    <NuxtLinkLocale v-if="link" :to="`/about/actors/${link}`">
      <slot name="images" />
    </NuxtLinkLocale>
    <slot v-else name="images" />
    <div class="card-body p-2">
      <div class="card-title text-truncate fw-bold">
        <slot name="name" />
      </div>
      <span>
        <slot name="role" />
      </span>
      <NuxtLinkLocale
        v-if="link"
        :to="`/about/actors/${link}`"
        :class="[{ 'btn-sm': isSmall }, `btn-${buttonColor}`, `py-${buttonPadding}`]"
        type="button"
        class="btn d-flex justify-content-center mt-5 px-3"
      >
        {{ buttonText }}
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<style lang="css" scoped>
.card-title {
  max-width: 95%;
}

.bg-darker {
  --bs-bg-opacity: 1;
}

.btn-darker {
  color: white;
  background: rgba(41, 41, 41, 1);
  box-shadow: 4px 4px 20px 3px rgba(0, 0, 0, 0.25);
}

.btn-darker:hover {
  background: rgba(0, 0, 0, 0.8);
}
</style>
