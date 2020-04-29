<template>
  <div>
    <p>I'm the presentation tab this is the {{ list }}</p>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("presentationState", ["list"])
  }
};
</script>
