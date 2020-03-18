<template>
  <div>
    <h1>My SmartTours</h1>
    <q-list bordered v-for="item in smartTours" :key="item">
      <q-item
        clickable
        v-ripple
        :to="{ name: 'SmartTourPresentation', params: { id: item.id } }"
      >
        <q-item-section avatar>
          <q-icon color="primary" name="explore" />
        </q-item-section>

        <q-item-section>#{{ item.id }} {{ item.name }}</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["smartTours"])
  }
};
</script>
