<template>
  <div :class="{ 'p-3': IS_LOGGED_IN }">
    <div v-if="IS_LOGGED_IN" class="columns">
      <div class="column is-3">
        <div class="box">
          <div>
            <b-button
              @click="logout()"
              class="mb-1"
              type="is-dark"
              size="is-small"
              icon-left="sign-out-alt"
              expanded
              >Abmelden</b-button
            >
            <GroupSummary
              v-for="group in groups"
              :key="group.id"
              :group="group"
              :class="{ panel: true, ' is-info': group.id === activeGroup }"
            />
            <b-message class="mt-1" v-if="groups.length == 0" type="is-warning"
              >Du gehörst noch keiner Gruppe an. Bitte melde dich bei einem
              Gruppenadmin, dass du nun in die Gruppe aufgenommen werden
              kannst.</b-message
            >
          </div>
        </div>
      </div>
      <div class="column fullheight">
        <Nuxt />
      </div>
    </div>
    <div v-else>
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class DefaultLayout extends Vue {
  get IS_LOGGED_IN() {
    return this.$auth.loggedIn || (this.$router.currentRoute.name !== 'login' &&this.$config.DEV_NO_AUTH)
  }

  get groups() {
    return this.$store.state.groups;
  }

  get activeGroup() {
    return this.$store.state.activeGroup;
  }

  logout() {
    this.$auth.logout();
    this.$router.push("/login");
  }
}
</script>

<style>
.mouse {
  cursor: pointer;
}

.fullheight {
  min-height: 95vh;
}
</style>
