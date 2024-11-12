<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
const currentYear = new Date().getFullYear();

onMounted(() => {
  // console.log(translations.value.common.address);
});
</script>

<template lang="html">
  <div id="footer" class="text-light mt-auto px-2">
    <footer class="bd-footer py-4 py-md-2 my-5">
      <div class="container border border-3 rounded-5">
        <div class="row d-flex justify-content-around align-items-start mt-3">
          <div
            class="col-5 col-md-4 col-lg-3 col-xl-2 d-flex flex-column justify-content-center align-items-center mb-3"
          >
            <NuxtImg
              format="webp"
              :provider="setProvider()"
              :src="setMediaUrl('/logo_website_full.png')"
              alt="Drama and Puppet Theater Shumen - Logo"
              id="footerLogo"
              class="col-8 col-md-6 img-fluid"
              sizes="50px md:120px"
              loading="lazy"
            />
          </div>
          <div class="col-12 col-md-6 col-lg-4 col-xl-3 d-flex flex-column justify-content-start mt-0 mt-md-4 mt-lg-0">
            <div class="d-none d-md-block text-start fs-5">
              {{ translations.common.address }}
            </div>
            <div class="d-none d-md-block">
              <FooterSocialCol />
            </div>
            <div class="d-block d-md-none">
              <FooterContactsCol />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 col-xl-4 my-4 my-md-0">
            <hr class="d-md-none" />
            <div class="d-block d-md-none">
              <FooterSocialCol />
            </div>
            <div class="d-none d-md-block fs-5">
              <FooterContactsCol />
            </div>
            <hr class="d-md-none" />
          </div>
        </div>
        <hr class="d-none d-md-block mt-4 mb-4" />
        <FooterSponsorsRow />
        <hr class="mt-4 mb-4" />
        <div
          class="d-flex row row-cols-auto justify-content-center justify-content-md-between justify-content-xl-center mt-3 px-2 px-md-5 pb-4"
        >
          <div class="col d-flex flex-column d-xl-block text-uppercase policy">
            <a
              :href="setMediaUrl(`/policies/privacy-policy.pdf`, `pdf`)"
              class="link-light link-underline-opacity-0 link-underline-opacity-75-hover mb-3 mb-md-0 mx-0 mx-xl-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ translations.common.privacy }}
            </a>
            <a
              :href="setMediaUrl(`/policies/gdpr-policy.pdf`, `pdf`)"
              class="link-light link-underline-opacity-0 link-underline-opacity-75-hover mb-3 mb-md-0 mx-0 mx-xl-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ translations.common.gdpr }}
            </a>
            <a
              :href="setMediaUrl(`/policies/public-info.pdf`, `pdf`)"
              class="link-light link-underline-opacity-0 link-underline-opacity-75-hover mb-3 mb-md-0 mx-0 mx-xl-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ translations.common.public }}
            </a>
            <a
              :href="setMediaUrl(`/policies/ticket-policy.pdf`, `pdf`)"
              class="link-light link-underline-opacity-0 link-underline-opacity-75-hover mb-3 mb-md-0 mx-0 mx-xl-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ translations.common.ticket }}
            </a>
          </div>
          <div class="col d-flex flex-column justify-content-center policy">
            <span>© {{ currentYear }} {{ translations.common.dkts }}</span>
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

@media (max-width: 767px) {
  .policy {
    font-size: small;
  }
}

hr {
  color: white;
  border: dashed;
  border-width: 1px;
  opacity: 1;
}
</style>
