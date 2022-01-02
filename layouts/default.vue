<template>
  <div class="p-3">
    <div class="columns">
      <div class="column is-3 box m-1 mt-2 fullheight">
        <div v-if="$auth.loggedIn">
          <b-button
            @click="logout()"
            class="mb-1"
            type="is-dark"
            size="is-small"
            icon-left="sign-out-alt"
            expanded
            >Abmelden</b-button
          >
          <nav
            v-for="group in groups"
            :key="group.id"
            :class="{ panel: true, ' is-info': group.id === activeGroup }"
          >
            <p
              class="panel-heading mouse"
              @click="$store.commit('setCurrentGroup', group.id)"
            >
              {{ group.name }}
            </p>
            <a class="panel-block">
              <span class="panel-icon">{{ group.tickets.open }}</span>
              Offen
              <b-tag
                v-if="group.notifications.open != 0"
                class="ml-2"
                type="is-success"
                size="is-small"
                >{{ group.notifications.open }} Neu!</b-tag
              >
            </a>
            <a class="panel-block">
              <span class="panel-icon">{{ group.tickets.progress }}</span>
              In Bearbeitung
              <b-tag
                v-if="group.notifications.progress != 0"
                class="ml-2"
                type="is-success"
                size="is-small"
                >{{ group.notifications.progress }} Neu!</b-tag
              >
            </a>
            <a class="panel-block">
              <span class="panel-icon">{{ group.tickets.closed }}</span>
              Abgeschlossen
              <b-tag
                v-if="group.notifications.closed != 0"
                class="ml-2"
                type="is-success"
                size="is-small"
                >{{ group.notifications.closed }} Neu!</b-tag
              >
            </a>
            <a v-if="group.canManage" class="panel-block">
              <b-button
                :type="activeGroup === group.id ? 'is-info' : undefined"
                expanded
                >Verwalten</b-button
              >
            </a>
          </nav>
          <b-message class="mt-1" v-if="groups.length == 0" type="is-warning"
            >Du gehörst noch keiner Gruppe an. Bitte melde dich bei einem
            Gruppenadmin, dass du nun in die Gruppe aufgenommen werden
            kannst.</b-message
          >
        </div>
        <b-message v-else type="is-warning">
          Du musst dich anmelden, um auf deine Gruppen zugreifen zu können :(
        </b-message>
      </div>
      <div class="column mt-2">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class DefaultLayout extends Vue {
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

<style scoped>
.fullheight {
  min-height: 95vh;
}
</style>

<style>
.mouse {
  cursor: pointer;
}
</style>
