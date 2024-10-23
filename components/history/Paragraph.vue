<script setup lang="ts"></script>

<template lang="html">
  <div id="paragraphContainer">
    <slot name="images" />
    <p class="lead text-light"><slot name="text" /></p>
  </div>
</template>

<style lang="css" scoped></style>
