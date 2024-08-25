<script setup lang="ts">
const props = defineProps<{
  closeMenu?: Function;
}>();

const switchLocalePath = useSwitchLocalePath();
</script>

<template lang="html">
  <li class="nav-item dropdown d-block d-lg-flex align-items-center">
    <a
      id="languageDropdown"
      class="nav-link dropdown-toggle link-light"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <Icon class="mb-1" name="bi:globe2" />
    </a>
    <ul class="dropdown-menu border-primary">
      <li>
        <NuxtLink @click="closeMenu()" :to="switchLocalePath('bg')" class="dropdown-item nav-dropdown lang-btn">
          <div class="d-flex align-items-center">
            <Icon class="me-2" name="flag:bg-4x3" />
            <span>Български</span>
          </div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink @click="closeMenu()" :to="switchLocalePath('en')" class="dropdown-item nav-dropdown lang-btn">
          <div class="d-flex align-items-center">
            <Icon class="me-2" name="flag:gb-4x3" />
            <span>English</span>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </li>
</template>

<style lang="css" scoped>
.router-link-active {
  font-weight: bold;
  box-shadow: rgba(255, 0, 0, 1) 0px -10px 2px -7px inset;
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
