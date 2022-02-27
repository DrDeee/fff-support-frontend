<template>
  <div>
    <div>
      <div class="columns is-centered">
        <div class="column is-half">
          <div class="card">
            <div class="card-header">
              <div class="card-header-title">Mitglieder hinzufügen</div>
              <div class="card-header-icon no-mouse">
                <b-icon icon="users" />
              </div>
            </div>
            <div class="card-content">
              <user-select v-model="users" :multiple="true" />
            </div>
            <div class="card-footer">
              <a class="card-footer-item" @click="$router.push('/group')"
                >Abbrechen</a
              >
              <a
                v-if="users.length != 0"
                class="card-footer-item"
                @click="add()"
                >Zur Gruppe hinzufügen</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({ layout: "group" })
export default class GroupMemberAddView extends Vue {
  users = [];

  get group() {
    return this.$store.state.selectedGroup;
  }

  add() {
    this.$router.push("/group");
  }
}
</script>
