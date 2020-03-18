<template>
  <PublicLayout>
    <div class="q-pa-md row items-start q-gutter-md">
      <LoginItem />
    </div>
  </PublicLayout>
</template>

<script>
import PublicLayout from "@/layout/PublicLayout.vue";
import LoginItem from "@/components/LoginItem.vue";
export default {
  components: {
    PublicLayout,
    LoginItem
  }
};
</script>
