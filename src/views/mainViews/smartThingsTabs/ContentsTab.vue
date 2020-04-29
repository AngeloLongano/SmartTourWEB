<template>
  <div>
    <p>
      I'm the content tab
    </p>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("contentState", ["list"])
  }
};
</script>
