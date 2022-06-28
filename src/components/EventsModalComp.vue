<template>
  <div>
    <b-button v-b-modal="eventModalId">Más información</b-button>

    <b-modal :id="eventModalId" :title="eventModalId">
      <b-img :src="eventModalImg" fluid alt="Responsive image"></b-img>
      <h3 class="my-4">{{ eventModalId }}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, id in
        sed doloremque ut rem accusantium. Voluptatem repellendus, reiciendis in
        est iusto, iure ipsam aut necessitatibus hic quae nisi possimus!
      </p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "MeetAndCoffeeInVueEventsModalComp",

  data() {
    return {};
  },

  props: {
    eventModalId: String,
    eventModalImg: String,
  },

  mounted() {},

  methods: {},
};
</script>
