<template>
  <div>
    <q-card class="my-card" flat bordered>
      <!-- <img src="@/assets/images/default.png" alt="Smiley face" /> -->
      <q-img
        :src="require('@/assets/images/' + this.urlImage)"
        :ratio="16 / 9"
        style="height: 300px;"
      />

      <q-card-section>
        <div v-if="nameAgency" class="text-overline text-orange-9">
          {{ nameAgency }}
        </div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ title }}</div>
        <div v-if="description" class="text-caption text-grey">
          {{ description }}
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="primary" label="MANAGE" @click="manageAction" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    nameAgency: {
      type: String
    },
    description: {
      type: String
    },
    urlImage: {
      type: String,
      default: "defaultImmagine.svg"
    },
    manageAction: {
      type: Function,
      required: true
    }
  }
};
</script>

<style scoped>
/* .my-card {
  width: 100%;
  max-width: 350px;
} */
</style>
