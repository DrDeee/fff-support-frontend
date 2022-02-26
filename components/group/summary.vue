<template>
  <nav :class="{ panel: true, 'is-primary': active }">
    <div
      v-if="groupName"
      class="panel-heading is-flex is-justify-content-space-between"
      :class="{ mouse: mouse }"
      @click="$emit('click')"
    >
      <div>{{ group.name }}</div>
      <div>
        <b-tooltip
          v-if="group.isRoot"
          multilined
          position="is-right"
          type="is-info"
        >
          <template #content
            ><b>Root-Gruppe</b><br />Dies ist die Admin-Gruppe von MessageDesk.
            Hierher werden alle anstößigen Tickets gemeldet und deren Ersteller
            blockiert.</template
          >
          <b-icon icon="crown"
        /></b-tooltip>
      </div>
    </div>
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

  @Prop({
    required: false,
    default: false,
  })
  active!: boolean;

  @Prop({
    required: false,
    default: true,
  })
  mouse!: boolean;
  @Prop({
    required: false,
    default: true,
  })
  groupName!: boolean;
}
</script>

<style scoped>
nav.panel {
  height: 100%;
}
a.panel-block.no-hover {
  cursor: default;
}
a.panel-block.no-hover:hover {
  background-color: initial;
}
</style>
