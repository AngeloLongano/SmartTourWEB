<template>
  <div>
    <component v-bind:is="type"></component>
  </div>
</template>

<script>
import PublicLayout from "@/layout/PublicLayout.vue";
import DefaultLayout from "@/layout/DefaultLayout.vue";
import SmartTourLayout from "@/layout/SmartTourLayout.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  computed: {
    ...mapState("layoutState", ["type"])
  },
  components: {
    public: PublicLayout,
    default: DefaultLayout,
    "smart-tour": SmartTourLayout
  }
};
</script>

<style></style>
