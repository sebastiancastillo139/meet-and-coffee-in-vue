<template>
  <div class="py-1">
    <h2 class="fw-bolder pb-4 pt-0">EVENTOS ANTERIORES</h2>
    <b-card
      v-for="(events, index) in getPreviousEvents"
      :key="index"
      :img-src="events.event_img"
      img-alt="Imagen"
      img-top
      tag="article"
      class="mx-4 d-inline-block col-3"
      text-variant="dark"
      border-variant="light"
    >
      <div>
        <b-card-text class="my-3">
          <h2>{{ events.event_title }}</h2>
          <EventsModalComp :eventModalId="events.event_title" :eventModalImg="events.event_img"/>
        </b-card-text>
      </div>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import EventsModalComp from "./EventsModalComp.vue";

export default {
    computed: {
        ...mapGetters(["getPreviousEvents"]),
    },
    components: { EventsModalComp }
};
</script>

<style scoped></style>
