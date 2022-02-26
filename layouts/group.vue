<template>
  <div>
    <Header />
    <div class="p-3 bg-light">
      <div v-if="selectedGroup"><Nuxt /></div>
      <div v-else class="columns is-centered">
        <div class="column is-one-third">
          <b-message type="is-dark"
            ><div class="mb-1">Du musst zuerst eine Gruppe auswählen:</div>
            <GroupSelector />
            <b-button @click="$router.push('/')" class="mt-1" size="is-small" expanded type="is-dark" inverted>Zurück zum Start </b-button>
          </b-message>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class GroupLayout extends Vue {
  get selectedGroup() {
    return this.$store.state.selectedGroup;
  }
}
</script>
