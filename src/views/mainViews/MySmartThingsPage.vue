<template>
  <DefaultLayout>
    <template v-slot:tabs>
      <q-tabs
        
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="mails" label="Mails" />
        <q-tab name="alarms" label="Alarms" />
        <q-tab name="movies" label="Movies" />
      </q-tabs>
    </template>

    <!-- <q-separator /> -->

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="mails">
        <div class="text-h6">Mails</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="alarms">
        <div class="text-h6">Alarms</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="movies">
        <div class="text-h6">Movies</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layout/DefaultLayout";
export default {
  components:{
    DefaultLayout
  },
  data() {
    return {
      tab: "mails",
    };
  },
}
