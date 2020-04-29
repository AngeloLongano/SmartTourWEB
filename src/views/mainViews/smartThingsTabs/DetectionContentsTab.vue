<template>
  <div>
    <p>
      I'm the detection content tab
    </p>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("detectionContentState", ["list"])
  }
};
</script>
