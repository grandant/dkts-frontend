<script setup lang="ts">
// TODO: Make social media links updated per device type
</script>

<template lang="html">
  <div class="d-flex justify-content-center">
    <span id="address" class="col-11 col-md-10 text-uppercase fw-bold fs-4">
      <slot name="heading" />
    </span>
  </div>
  <div class="d-flex justify-content-center justify-content-md-start gap-5 gap-md-4 mt-1 mt-md-3 pb-1">
    <a href="https://www.facebook.com/theatershumen" class="link-light" target="_blank" rel="noopener noreferrer">
      <Icon name="bi:facebook" class="footerIcon" />
    </a>
    <a href="https://www.instagram.com/theatreshumen/" class="link-light" target="_blank" rel="noopener noreferrer">
      <Icon name="bi:instagram" class="footerIcon" />
    </a>
    <a
      href="https://www.youtube.com/channel/UCH_Y_6oQvor2qyFkmBtAoXw?cbrd=1"
      class="link-light"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="bi:youtube" class="footerIcon" />
    </a>
    <a
      href="https://open.spotify.com/show/1o2riigiuhcISFq9rp1ajo"
      class="link-light"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="bi:spotify" class="footerIcon" />
    </a>
    <!-- <a href="https://podcast.dktshumen.com" class="link-light" target="_blank" rel="noopener noreferrer">
      <Icon name="bi:rss" class="footerIcon" />
    </a> -->
  </div>
</template>

<style lang="css" scoped>
#address {
  /* display: inline-block; */
  /* text-align: left; */
}

.footerIcon {
  font-size: xx-large;
}
</style>
