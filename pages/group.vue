<template>
  <div v-if="group" class="columns">
    <div class="column is-one-quarter">
      <div class="px-3">
        <GroupSummary :group="group" :groupName="false" />
      </div>
      <div class="card mx-3 mt-3">
        <div class="card-header">
          <div class="card-header-title">Gruppen-Beschreibung</div>
          <div
            class="card-header-icon"
            @click="editDescription = !editDescription"
          >
            <b-icon v-if="!editDescription" icon="edit" />
            <b-icon v-else icon="check" />
          </div>
        </div>
        <div v-if="!editDescription" class="card-content">
          {{ description }}
        </div>
        <textarea
          v-model="description"
          v-else
          ref="textarea"
          class="textarea card-content"
        />
      </div>
      <div class="panel is-dark mx-3 mt-3">
        <div class="panel-heading">Gruppen-Mitglieder</div>
        <div style="max-height: 30vh; overflow: auto">
          <div class="panel-block">
            <b-icon class="panel-icon" icon="user" />
            <div class="is-flex is-justify-content-space-between w-full">
              <div>Elias</div>
              <div><UtilConfirm @confirm="test++" /></div>
            </div>
          </div>
          <div class="panel-block p-0">
            <b-button tag="a" size="is-small" type="is-text" expanded
              >Mitglied hinzufügen
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <TicketKanban />
    </div>
  </div>
  <div v-else class="columns is-centered">
    <div class="column is-one-third">
      <b-message type="is-warning"
        ><div class="mb-1">Du musst zuerst eine Gruppe auswählen:</div>
        <GroupSelector
      /></b-message>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({ layout: "group" })
export default class GroupIndexView extends Vue {
  get group() {
    return this.$store.state.selectedGroup;
  }

  description: string = "";
  editDescription: boolean = false;
}
</script>