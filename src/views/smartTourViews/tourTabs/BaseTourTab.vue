<template>
  <div>
    <div v-for="item in baseList" :key="item.id">
      <CardItem
        :manageAction="goSomewhere"
        :title="item.title"
        :desc="item.description"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import CardItem from "@/components/CardItem.vue";
export default {
  components: {
    CardItem
  },
  computed: {
    ...mapState("tourState", ["baseList"])
  },
  methods: {
    goSomewhere() {}
  }
};
</script>
