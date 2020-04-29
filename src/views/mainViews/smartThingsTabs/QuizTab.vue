<template>
  <div>
    <p>
      I'm the quiz tab
    </p>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("quizState", ["list"])
  }
};
</script>
