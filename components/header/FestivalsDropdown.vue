<script setup lang="ts">
defineProps<{
  closeMenu?: Function;
}>();

const { data: translations } = useNuxtData("translations");
const route = useRoute();
const localePath = useLocalePath();
// TODO: Should be fixed
const isActive = ref(route.matched.some((m) => m.path.includes(localePath("/festivals"))));

watch(
  () => route.matched,
  (matched) => {
    isActive.value = matched.some((m) => m.path.includes(localePath("/festivals")));
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
      <span>{{ translations.common.festivals }}</span>
    </a>
    <ul class="dropdown-menu border-primary">
      <li>
        <NuxtLinkLocale @click="closeMenu()" to="/festivals/ftk" class="dropdown-item nav-dropdown">
          <span>{{ translations.common.ftk }}</span>
        </NuxtLinkLocale>
      </li>
      <li>
        <a
          class="dropdown-item nav-dropdown"
          href="https://festival.dktshumen.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="d-flex align-items-center">
            {{ translations.common.drumevi }}
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
  /* box-shadow: rgba(255, 0, 0, 1) 0px -10px 2px -7px inset; */
}

.router-link-active .nav-link {
  opacity: 1 !important;
}

.nav-link:not(.router-link-active) {
  opacity: 0.75;
}

.nav-link:hover {
  opacity: 1;
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
