<template>
  <div>
    <CardItem
      :manageAction="goToSmartTour"
      :title="smartTour.title"
      :desc="smartTour.description"
    />
  </div>
</template>
<script>
import { mapState } from "vuex";
import CardItem from "@/components/CardItem.vue";
import ApiService from "@/services/ApiService.js";

export default {
  components: {
    CardItem
  },
  beforeCreate() {
    this.$store.dispatch("layoutState/updateType", "default");
  },
  created() {
    ApiService.getAgencies()
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("the error was " + error.message);
      });
  },
  computed: {
    ...mapState(["smartTour"]),
    ...mapState("userState", ["user"])
  },
  methods: {
    goToSmartTour() {
      this.$router.push({
        name: "SmartTourPresentation",
        params: { id: this.smartTour.id }
      });
    }
  }
};
</script>
