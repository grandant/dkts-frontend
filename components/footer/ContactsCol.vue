<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
</script>

<template lang="html">
  <div class="row row-cols-2 justify-content-center">
    <div class="d-block d-md-none text-uppercase contacts">
      {{ translations.common.address }}
    </div>
    <div class="">
      <div class="contacts">
        <a href="mailto:info@dktshumen.com" class="link-light" rel="noopener noreferrer"> info@dktshumen.com </a>
      </div>
      <div class="contacts">
        <a href="mailto:theatreshumen@gmail.com" class="link-light" rel="noopener noreferrer">
          theatreshumen@gmail.com
        </a>
      </div>
      <div class="contacts">
        <a href="tel:+359896140044" class="link-light" rel="noopener noreferrer"> +359 896 140 044 </a>
      </div>
    </div>
  </div>

  <!-- <Icon name="bi:envelope" class="footerIcon" />
  <Icon name="bi:envelope" class="footerIcon" />
  <Icon name="bi:telephone-outbound" class="footerIcon" /> -->
</template>

<style lang="css" scoped>
@media (max-width: 767px) {
  a {
    font-size: small;
  }

  .contacts {
    /* max-width: max-content; */
    font-size: small;
  }
}

a {
  text-decoration: none;
}
</style>
