<script setup lang="ts"></script>

<template lang="html">
  <div class="card bg-darker stage-card">
    <slot name="images" />
    <div class="card-body">
      <div class="card-title">
        <slot name="title" />
      </div>
      <span class="card-text">
        <slot name="cardText" />
      </span>
      <div class="d-flex flex-column">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
