<template>
  <div>
    <h1>This is smart tour settings page</h1>
  </div>
</template>
<script>
export default {
  beforeCreate() {
    this.$store.dispatch("layoutState/updateType", "smart-tour");
  }
};
</script>
