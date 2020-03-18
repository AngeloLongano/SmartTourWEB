<template>
  <q-card class="my-card fixed-center q-pa-md">
    <q-card-section>
      <div class="text-h6">LOGIN</div>
    </q-card-section>

    <q-card-section>
      <div class="q-pa-md" style="max-width: 400px">
        <q-form @submit="onLogin" class="q-gutter-md">
          <q-input
            color="teal"
            filled
            v-model="username"
            label="username"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type something']"
          >
            <template v-slot:prepend>
              <q-icon name="account_box" />
            </template>
          </q-input>

          <q-input
            color="teal"
            v-model="password"
            label="password"
            filled
            :type="isPwd ? 'password' : 'text'"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type something']"
          >
            <template v-slot:prepend>
              <q-icon name="vpn_key" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <div>
            <q-btn label="Login" type="submit" color="primary" />
          </div>
          <!-- <q-card-actions align="around">
          <q-btn :to="{ name: 'AboutUS' }" flat>scopri</q-btn>
          <q-btn :to="{ name: 'SmartTourList' }" flat>login</q-btn>
        </q-card-actions> -->
        </q-form>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
      isPwd: true
    };
  },

  methods: {
    onLogin() {
      if (this.username != "a") {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Username e/o password non corretti"
        });
      } else {
        this.$router.push({
          name: "SmartTourList"
        });
      }
      this.username = null;
      this.password = null;
    }
  }
};
</script>

<style lang="scss" scoped></style>
