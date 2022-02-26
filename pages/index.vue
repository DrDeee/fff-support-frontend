<template>
  <div>
    <div>
      <div class="columns is-multiline">
        <div
          v-for="group in groups"
          :key="group.id"
          class="column is-one-quarter"
        >
          <GroupSummary
            :group="group"
            :active="
              $store.state.selectedGroup &&
              group.id === $store.state.selectedGroup.id
            "
            @click="$store.commit('selectGroup', group.id)"
          />
        </div>
      </div>
    </div>
    <div class="has-text-centered mt-1">
      Du bist in {{ groups.length }} Gruppen.<br />
      Dir fehlt eine Gruppe? Dann melde dich bei deinem Gruppen-Admin, damit
      diese:r dich zu der Gruppe hinzufügen kann.
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class IndexPage extends Vue {
  get groups() {
    return this.$store.state.groups;
  }
}
</script>
