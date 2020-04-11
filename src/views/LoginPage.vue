<template>
  <div>
    <div class="q-pa-md row items-start q-gutter-md">
      <LoginItem />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import LoginItem from "@/components/LoginItem.vue";
export default {
  beforeCreate() {
    this.$store.dispatch("layoutState/updateType", "public");
  },
  components: {
    LoginItem
  },
  computed: {
    ...mapState(["layoutState"])
  }
};
</script>
