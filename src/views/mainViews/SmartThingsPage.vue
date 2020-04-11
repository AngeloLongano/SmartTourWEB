<template>
  <div>
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="presentations" label="Presentazioni" />
      <q-tab name="phrases" label="Frasi" />
      <q-tab name="quiz" label="Quiz" />
      <q-tab name="contents" label="Contenuti" />
      <q-tab name="detectionContents" label="Rilevatori di contenuti" />
    </q-tabs>
    <q-separator />

    <q-tab-panels v-model="this.tab" animated>
      <q-tab-panel name="presentations">
        <PresentationTab />
      </q-tab-panel>

      <q-tab-panel name="quiz">
        <QuizTab />
      </q-tab-panel>

      <q-tab-panel name="contents">
        <ContentsTab />
      </q-tab-panel>
      <q-tab-panel name="detectionContents">
        <DetectionContentsTab />
      </q-tab-panel>
      <q-tab-panel name="phrases">
        <PhrasesTab />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import PresentationTab from "@/views/mainViews/smartThingsTabs/PresentationTab";
import QuizTab from "@/views/mainViews/smartThingsTabs/QuizTab";
import ContentsTab from "@/views/mainViews/smartThingsTabs/ContentsTab";
import DetectionContentsTab from "@/views/mainViews/smartThingsTabs/DetectionContentsTab";
import PhrasesTab from "@/views/mainViews/smartThingsTabs/PhrasesTab";
export default {
  components: {
    PresentationTab,
    QuizTab,
    ContentsTab,
    DetectionContentsTab,
    PhrasesTab
  },

  beforeCreate() {
    this.$store.dispatch("layoutState/updateType", "default");
  },
  data() {
    return {
      tab: "presentations"
    };
  }
};
</script>
