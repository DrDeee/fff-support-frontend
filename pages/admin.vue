<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-icon mouse">
        <b-icon icon="arrow-circle-left" />
      </div>
      <div class="card-header-title">MessageDesk - Admin</div>
    </div>
    <div class="card-content">
      <b-tabs :destroy-on-hide="true">
        <b-tab-item label="Gruppen">
          <div class="box p-1">
            <div
              class="columns"
              v-for="pair in groupsPaired"
              :key="groupsPaired.indexOf(pair)"
            >
              <div class="column" v-for="group in pair" :key="group.id">
                <b-message
                  :title="group.name"
                  :closable="false"
                  :has-icon="true"
                  icon="users"
                >
                  {{ group.id }}
                </b-message>
              </div>
            </div>
          </div>
        </b-tab-item>
        <b-tab-item label="Messenger-Clients"
          ><b-field>
            <b-input />
          </b-field>
        </b-tab-item>
      </b-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class AdminPage extends Vue {
  get groups(): any[] {
    return this.$store.state.groups;
  }

  get groupsPaired() {
    const pairs: any[][] = [];
    for (let i = 0; i < this.groups.length; i++) {
      if (i % 2 == 0) {
        pairs.push([this.groups[i]]);
      } else {
        pairs[pairs.length - 1].push(this.groups[i]);
      }
    }
    return pairs;
  }
}
</script>
