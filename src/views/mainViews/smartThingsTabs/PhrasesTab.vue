<template>
  <div>
    <p>
      I'm the phrase tab
    </p>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("phraseState", ["list"])
  }
};
</script>
