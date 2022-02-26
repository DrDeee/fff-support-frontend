<template>
  <div>
    <div>
      <div class="columns is-centered">
        <div v-if="groups.length != 0" class="column is-half">
          <div class="columns is-multiline">
            <div v-for="group in groups" :key="group.id" class="column is-half">
              <GroupSummary
                :group="group"
                :active="
                  $store.state.selectedGroup &&
                  group.id === $store.state.selectedGroup.id
                "
                @click="select(group)"
              />
            </div>
          </div>
        </div>
        <div v-else class="column is-one-third">
          <b-message type="is-dark">
            Du bist in keiner Gruppe Mitglied. Bitte melde dich bei den Admins
            der Gruppe, auf die du Zugriff bekommen möchtest, damit diese dich
            hinzufügen können.<br /><br />
            Wenn du dir sicher bist, dass du bereits zu einer Gruppe hinzugefügt
            wurdest, melde dich
            <a :href="$config.SUPPORT" target="_blank">hier</a>.</b-message
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({ layout: "" })
export default class IndexPage extends Vue {
  get groups() {
    return this.$store.state.groups;
  }

  select(group: any) {
    this.$store.commit("selectGroup", group.id);
    this.$router.push("/group");
  }
}
</script>
