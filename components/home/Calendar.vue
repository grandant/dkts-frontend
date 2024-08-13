<script setup lang="ts">
const { data: translations } = useNuxtData("translations");
const { data: dates } = useNuxtData("calendar");

const userDevice = useState("userDevice");
const events = computed(() => Object.values(dates.value).flat());
const calendarFilter = useState("calendarFilter", () => "adults");

onMounted(() => {
  // console.log(calendarFilter.value);
});
</script>

<template lang="html">
  <div id="title" class="row align-items-center position-relative text-bg-dark bg-custom">
    <span class="text-center text-uppercase fw-bold">{{ translations.home.upcoming }}</span>
  </div>
  <!-- Mobile layout -->
  <div v-if="userDevice.isMobile" class="text-light mt-3">
    <HomeCalendarFilterRow v-model="calendarFilter" />
    <Transition>
      <div :key="calendarFilter">
        <div v-show="event.eventDetails.audience == calendarFilter" v-for="event in events">
          <HomeCalendarMobileEvent
            :date="event.eventDate"
            :time="event.eventStart"
            :details="event.eventDetails"
            :eventID="event.eventID"
          >
            <template #images>
              <NuxtImg
                format="webp"
                :provider="setProvider()"
                :src="setMediaUrl(`/media/plays/${event.eventDetails.slug}/poster.jpg`)"
                :alt="`${event.eventDetails.name} - Poster`"
                class="img-fluid"
                sizes="72px md:132px"
                loading="lazy"
              />
            </template>
          </HomeCalendarMobileEvent>
        </div>
      </div>
    </Transition>
  </div>
  <!-- Desktop layout -->
  <div v-if="userDevice.isDesktopOrTablet" class="container text-light mt-3">
    <HomeCalendarFilterRow v-model="calendarFilter"></HomeCalendarFilterRow>
    <Transition>
      <div :key="calendarFilter">
        <div v-show="event.eventDetails.audience == calendarFilter" v-for="event in events">
          <HomeCalendarDesktopEvent
            :date="event.eventDate"
            :time="event.eventStart"
            :details="event.eventDetails"
            :eventID="event.eventID"
          >
            <template #images>
              <NuxtImg
                format="webp"
                :provider="setProvider()"
                :src="setMediaUrl(`/media/plays/${event.eventDetails.slug}/poster.jpg`)"
                :alt="`${event.eventDetails.name} - Poster`"
                class="img-fluid"
                sizes="132px"
                loading="lazy"
              />
            </template>
          </HomeCalendarDesktopEvent>
        </div>
      </div>
    </Transition>
  </div>
  <div class="container d-none d-md-block"><hr class="m-0" /></div>
</template>

<style lang="css" scoped>
#title {
  height: 54px;
  margin-top: -54px;
}

.v-enter-active {
  transition: all 0.8s;
}

.v-leave-active {
  transition: all 0.2s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
