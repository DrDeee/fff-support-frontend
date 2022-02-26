<template>
  <div>
    <b-select value="not_selected" expanded @input="$store.commit('selectGroup', $event)">
      <option disabled value="not_selected" class="has-text-centered">Gruppe wählen</option>
      <option v-for="group in groups" :key="group.id" :value="group.id">
        {{ group.name }}
      </option>
    </b-select>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class GroupSelector extends Vue {
  get groups() {
    return this.$store.state.groups;
  }

  get selectedGroup() {
    return this.$store.state.selectedGroup || false;
  }
}
</script>
