<template>
  <div>
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from "./layout/DefaultLayout.vue";

export default {
  name: "LayoutDefault",

  components: {
    DefaultLayout
  },

  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>

<style></style>
