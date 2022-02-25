<template>
  <nav>
    <p
      class="panel-heading mouse"
      @click="$store.commit('setCurrentGroup', group.id)"
    >
      {{ group.name }}
    </p>
    <a class="panel-block no-hover">
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
    <a class="panel-block no-hover">
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
    <a class="panel-block no-hover">
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
</template>
<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
@Component
export default class GroupSummary extends Vue {
  @Prop({
    required: true,
  })
  group!: any;
}
</script>

<style scoped>
a.panel-block.no-hover {
  cursor: default;
}
a.panel-block.no-hover:hover {
  background-color: initial;
  cursor: default;
}
</style>
