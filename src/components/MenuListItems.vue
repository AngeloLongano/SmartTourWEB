<template>
  <div>
    <!-- drawer content -->
    <!-- 
    v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
       -->
    <q-list>
      <q-item-label header>MENU</q-item-label>

      <q-item clickable :to="{ name: 'Home' }">
        <q-item-section avatar>
          <q-icon name="home" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Home</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable :to="{ name: 'About' }">
        <q-item-section avatar>
          <q-icon name="explore" />
        </q-item-section>
        <q-item-section>
          <q-item-label>about</q-item-label>
          <q-item-label caption>where the magic happens</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
        <q-item-section avatar>
          <q-icon name="school" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Docs</q-item-label>
          <q-item-label caption>quasar.dev</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
