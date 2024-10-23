export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("i18n:localeSwitched", ({ oldLocale, newLocale }) => {
    console.log("onLanguageSwitched", oldLocale, newLocale);

    if (oldLocale !== newLocale) {
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  });
});
