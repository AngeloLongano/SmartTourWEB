<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title>
          <q-avatar>
            <q-icon name="explore" />
          </q-avatar>
          Smart tour
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="left" side="left" overlay elevated>
      <MenuListItems />
    </q-drawer>

    <q-page-container>
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>

<script>
import MenuListItems from "@/components/MenuListItems.vue";
export default {
  components: {
    MenuListItems
  },
  data() {
    return {
      left: false
    };
  }
};
</script>
