<script setup lang="ts">
const { data: translations } = useNuxtData("translations");

onMounted(() => {
  // console.log(translations.value.common.address);
});
</script>

<template lang="html">
  <div id="footer" class="text-light mt-auto px-2">
    <footer class="bd-footer py-4 py-md-2 my-5">
      <div class="container border border-3 rounded-5">
        <div class="row d-flex justify-content-around align-items-center mt-3">
          <div class="col-12 col-md-4 col-lg-3 col-xl-2 d-flex flex-column justify-content-center align-items-center">
            <NuxtImg
              format="webp"
              :provider="setProvider()"
              :src="setMediaUrl('/logo_website_full.png')"
              alt="Drama and Puppet Theater Shumen - Logo"
              id="footerLogo"
              class="col-8 col-md-12 img-fluid"
              sizes="50px md:120px xl:250px"
              loading="lazy"
            />
          </div>
          <div class="col-12 col-md-6 col-lg-4 col-xl-5 my-4 my-md-0">
            <FooterSocialCol>
              <template #heading>
                {{ translations.common.address }}
              </template>
            </FooterSocialCol>
          </div>
          <div class="col-12 col-md-6 col-lg-4 col-xl-3 d-flex flex-column justify-content-center mt-0 mt-md-4 mt-lg-0">
            <FooterContactsCol />
          </div>
        </div>
        <hr class="mt-4 mb-4" />
        <FooterSponsorsRow />
        <hr class="mt-4 mb-4" />
        <div class="d-flex row mt-3">
          <div
            class="col-12 col-md-9 ps-5"
            style="
              color: white;
              font-size: 14px;
              font-family: Helvetica;
              font-weight: 400;
              text-transform: uppercase;
              line-height: 14px;
              word-wrap: break-word;
            "
          >
            Този проект се осъществява с финансовата подкрепа на Министерството на Културата и Община Шумен.
          </div>
          <div
            class="col-12 col-md-3 text-center text-md-end mb-3 pe-5 mt-3 mt-md-0"
            style="
              color: white;
              font-size: 14px;
              font-family: Helvetica;
              font-weight: 400;
              text-transform: uppercase;
              line-height: 14px;
              word-wrap: break-word;
            "
          >
            © 2024 DKT VASIL DRUMEV
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="css" scoped>
#footer {
  background: rgba(22, 19, 21, 1);
}

#footerLogo {
  /* max-width: 250px; */
}

hr {
  color: white;
  border: dashed;
  border-width: 2px;
  opacity: 1;
}
</style>
