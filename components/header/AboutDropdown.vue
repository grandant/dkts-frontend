<script setup lang="ts">
defineProps<{
  closeMenu?: Function;
}>();

const { data: translations } = useNuxtData("translations");
const route = useRoute();
const localePath = useLocalePath();
const isActive = ref(route.matched[0].path === localePath("/about"));

watch(
  () => route.matched,
  (matched) => {
    isActive.value = matched[0].path === localePath("/about");
  },
);
</script>

<template lang="html">
  <li :class="{ 'router-link-active': isActive }" class="nav-item dropdown d-block d-lg-flex align-items-center">
    <a
      id="about"
      class="nav-link dropdown-toggle link-light"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span>{{ translations.common.about }}</span>
      <!-- <span :class="{ 'router-link-active': isActive }">{{ translations.common.about }}</span> -->
    </a>
    <ul class="dropdown-menu border-primary" data-bs-theme="dark">
      <li>
        <NuxtLinkLocale @click="closeMenu()" to="/about/actors" class="dropdown-item nav-dropdown">
          <span>{{ translations.common.collective }}</span>
        </NuxtLinkLocale>
      </li>
      <li>
        <NuxtLinkLocale @click="closeMenu()" to="/about/stages" class="dropdown-item nav-dropdown">
          <span>{{ translations.common.stages }}</span>
        </NuxtLinkLocale>
      </li>
      <!-- <li>
        <NuxtLink :to="localePath('/about/history')" class="dropdown-item nav-dropdown" @click="closeMenu">
          {{ translations.common.history }}
        </NuxtLink>
      </li> -->
      <li>
        <hr class="dropdown-divider border-primary" />
      </li>
      <li>
        <a
          class="dropdown-item nav-dropdown"
          href="https://www.jobs.bg/company/242425"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="d-flex align-items-center">
            {{ translations.common.careers }}
            <Icon class="ms-2" name="bi:arrow-up-right-square" />
          </span>
        </a>
      </li>
    </ul>
  </li>
</template>

<style lang="css" scoped>
.router-link-active {
  font-weight: bold;
  box-shadow: rgba(255, 0, 0, 1) 0px -10px 2px -7px inset;
}

.router-link-active .nav-link {
  opacity: 1 !important;
}

.nav-link:not(.router-link-active) {
  opacity: 0.75;
}

.dropdown {
  max-width: max-content;
}

.nav-dropdown:not(.router-link-active) span {
  opacity: 0.75;
}

.nav-dropdown span:hover {
  opacity: 1;
}

.nav-dropdown {
  box-shadow: none;
}
</style>
