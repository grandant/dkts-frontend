<script setup lang="ts">
const nuxtApp = useNuxtApp();
const { data: translations } = useNuxtData("translations");

const offcanvasNavbar = ref(null);
const showOffcanvasHandler = ref(null);
const hideOffcanvasHandler = ref(null);

const togglerState = ref(true);
const closeOffcanvasNavbar = () => {
  offcanvasNavbar.value.hide();
};

onMounted(() => {
  if (process.client) {
    const { Offcanvas } = nuxtApp.$bootstrap;

    offcanvasNavbar.value = new Offcanvas("#offcanvasNavbar");

    showOffcanvasHandler.value = (event) => {
      togglerState.value = false;
    };

    hideOffcanvasHandler.value = (event) => {
      togglerState.value = true;
    };
    offcanvasNavbar.value._element.addEventListener("show.bs.offcanvas", showOffcanvasHandler.value);
    offcanvasNavbar.value._element.addEventListener("hide.bs.offcanvas", hideOffcanvasHandler.value);
  }
});

onBeforeUnmount(() => {
  offcanvasNavbar.value._element.removeEventListener("show.bs.offcanvas", showOffcanvasHandler.value);
  offcanvasNavbar.value._element.removeEventListener("hide.bs.offcanvas", hideOffcanvasHandler.value);
});
</script>

<template lang="html">
  <nav id="navbar" class="navbar navbar-expand-lg shadow sticky-top p-0 bg-custom" data-bs-theme="dark">
    <div class="container">
      <NuxtLinkLocale class="navbar-brand" to="/" @click="closeOffcanvasNavbar">
        <img src="/logo-website_top.svg" alt="DKTS Logo" height="40" />
      </NuxtLinkLocale>
      <HeaderToggler :togglerState="togglerState" />
      <div
        id="offcanvasNavbar"
        class="offcanvas offcanvas-start text-bg-dark"
        tabindex="-1"
        data-bs-backdrop="false"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <div id="mobileSearch" class="d-block d-lg-none">
            <!-- <HeaderSearchBar :placeholder="translations.common.search" @closeMenu="closeOffcanvasNavbar" /> -->
          </div>
        </div>
        <div class="offcanvas-body">
          <!-- Lefthand items -->
          <ul class="navbar-nav gap-lg-5 ms-lg-5 mb-2 mb-lg-0">
            <NuxtLinkLocale class="nav-link link-light" to="/" @click="closeOffcanvasNavbar">
              {{ translations.common.home }}
            </NuxtLinkLocale>
            <NuxtLinkLocale class="nav-link link-light" to="/events/plays" @click="closeOffcanvasNavbar">
              {{ translations.common.repertoire }}
            </NuxtLinkLocale>
            <HeaderAboutDropdown :closeMenu="closeOffcanvasNavbar" />
            <HeaderLangDropdown :closeMenu="closeOffcanvasNavbar" />
          </ul>
          <!-- SearchBar -->
          <!-- <div id="desktopSearch" class="d-none d-lg-block me-auto">
            <HeaderSearchBar :placeholder="translations.common.search" />
          </div> -->
          <!-- Righthand items -->
          <!-- <ul class="navbar-nav d-flex">
            <li class="nav-item">
              <a
                class="nav-link link-light"
                href="https://www.festival.dktshumen.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="d-flex align-items-center">
                  {{ translations.common.festival }}
                  <Icon class="ms-2" name="bi:arrow-up-right-square" />
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link link-light"
                href="https://www.entase.bg/dktshumen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="d-flex align-items-center">
                  {{ translations.common.tickets }}
                  <Icon class="ms-2" name="bi:arrow-up-right-square" />
                </span>
              </a>
            </li>
          </ul> -->
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <div class="d-flex align-items-center">
                <a class="nav-link search-bar" href="#">
                  <Icon id="searchIcon" class="ms-2" name="bi:search" />
                </a>
                <!-- <form class="d-block" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </form> -->
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="css" scoped>
@media (min-width: 992px) {
  .nav-link {
    padding-top: 15px;
    padding-bottom: 15px;
  }
}

@media (max-width: 991px) {
  #offcanvasNavbar {
    margin-top: 54px;
  }
}

#navbar {
  min-height: 54px;
}

.router-link-active,
.router-link-exact-active {
  max-width: max-content;
}

.navbar-brand {
  box-shadow: none;
}

.nav-link:not(.router-link-active, .search-bar) {
  opacity: 0.75;
}

.nav-link:hover {
  opacity: 1;
}

#searchIcon {
  color: white;
}
</style>
