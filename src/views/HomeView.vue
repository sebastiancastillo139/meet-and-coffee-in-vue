<template>
  <div class="home">
    <HeroSectionComp/>
    <LocationComp id="location" />
    <NextEventComp id="next_talk" class="col-12 align-center my-5" />
    <PreviousEventsComp id="previous_talk"/>
    <FooterComp id="contacts"/>
  </div>
</template>

<script>
import HeroSectionComp from "@/components/HeroSectionComp.vue";
import LocationComp from "../components/LocationComp.vue";
import NextEventComp from "@/components/NextEventComp.vue";
import PreviousEventsComp from "../components/PreviousEventsComp.vue";
import FooterComp from "../components/FooterComp.vue";

export default {
  name: "HomeView",
  components: {
    HeroSectionComp,
    LocationComp,
    NextEventComp,
    PreviousEventsComp,
    FooterComp
},
};
</script>
