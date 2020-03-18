<template>
  <div>
    <h1>This is smart tour list content page</h1>
    <div v-if="smartTours[id - 1].items != []">
      <q-list bordered v-for="item in smartTours[id - 1].items" :key="item">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="bluetooth" />
          </q-item-section>

          <q-item-section>#{{ item.id }} {{ item.name }}</q-item-section>
        </q-item>
      </q-list>
    </div>

    <div v-else>
      <h2>nessun beacon registrato</h2>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["id"],
  computed: {
    ...mapState(["smartTours"])
  }
};
</script>
