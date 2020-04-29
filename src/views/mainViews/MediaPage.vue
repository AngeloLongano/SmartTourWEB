<template>
  <div>
    <h1>This is my media page</h1>
    <q-img
      basic="true"
      :src="require('@/assets/images/ciao.jpg')"
      style="min-height: 140px; min-width: 150px"
    >
    </q-img>
  </div>
</template>
<script>
export default {
  beforeCreate() {
    this.$store.dispatch("layoutState/updateType", "default");
  }
};
</script>
