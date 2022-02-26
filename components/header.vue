<template>
  <b-navbar fixedTop :transparent="true" type="is-primary">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="~/assets/img/logo.png" alt="MessageDesk Logo" />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-dropdown v-if="$route.name !== 'login'" hoverable>
        <template #label>
          <div style="min-width: 10vw; text-align: center">
            <em v-if="!selectedGroup">Gruppe auswählen</em>
            <div v-else>{{ selectedGroup.name }}</div>
          </div>
        </template>
        <b-navbar-item
          v-for="group in groups"
          :key="group.id"
          :active="selectedGroup && selectedGroup.id === group.id"
          @click="selectGroup(group)"
          >{{ group.name }}</b-navbar-item
        >
      </b-navbar-dropdown>
      <div v-else class="navbar-item"><em>Unangemeldet</em></div>
    </template>
    <template #end>
      <b-navbar-item
        v-if="$route.name !== 'login'"
        @click="$router.push('/profil')"
        >Profil</b-navbar-item
      >
      <b-navbar-item
        v-if="$route.name !== 'login'"
        target="_blank"
        @click="logout()"
        >Abmelden</b-navbar-item
      >
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class Header extends Vue {
  get IS_LOGGED_IN() {
    this.$route.params;
    return this.$config.DEV_NO_AUTH
      ? this.$route.name !== "login" && this.$config.DEV_NO_AUTH
      : this.$auth.loggedIn;
  }

  get groups() {
    return this.$store.state.groups;
  }

  get selectedGroup() {
    return this.$store.state.selectedGroup;
  }

  selectGroup(group: any) {
    this.$store.commit("selectGroup", group.id);
  }

  async logout() {
    await this.$auth.logout();
    this.$router.push("/login");
  }
}
</script>
