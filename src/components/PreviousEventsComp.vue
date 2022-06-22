<template>
  <div>
    <b-card
      v-for="(events, index) in getPreviousEvents"
      :key="index"
      :img-src="events.event_img"
      img-alt="Imagen"
      img-top
      tag="article"
      class="m-1 d-inline-block col-3 overflow-hidden"
      bg-variant="dark" text-variant="white"
    >
      <div >
        <b-card-text>
          <h2>{{ events.event_title }}</h2>
          <b-button href="#" variant="primary">Ver más información</b-button>
        </b-card-text>
      </div>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getPreviousEvents"]),
  },
};
</script>
