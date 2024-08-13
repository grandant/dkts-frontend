<script setup lang="ts">
const head = useLocaleHead({
  identifierAttribute: "id",
  addSeoAttributes: true,
});
</script>

<template lang="html">
  <div id="defaultVue" class="d-flex flex-column bg-dark min-vh-100" data-bs-theme="dark">
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <template v-for="link in head.link" :key="link.id">
          <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
      </Head>
      <AppHeader />
      <div id="defaultBody">
        <Body>
          <slot />
        </Body>
      </div>
      <AppFooter />
    </Html>
  </div>
</template>

<style lang="css" scoped></style>
