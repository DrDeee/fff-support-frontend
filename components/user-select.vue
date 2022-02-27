<template>
  <div>
    <div class="panel is-dark">
      <div
        v-if="selected.length == 0"
        class="panel-block text-gray has-text-centered is-justify-content-center"
      >
        <b-icon class="panel-icon" icon="ban" />
        <div>
          {{
            multiple ? "Keine Benutzer ausgewählt" : "Kein Benutzer ausgewählt"
          }}
        </div>
      </div>
      <div
        v-else
        v-for="result in selected"
        :key="result.id"
        class="panel-block is-justify-content-space-between"
      >
        <div>{{ result.name }}</div>
        <div class="mouse" @click="remove(result)">
          <b-icon icon="ban" />
        </div>
      </div>
    </div>
    <div v-if="multiple || (!multiple && selected == 0)" class="panel is-dark">
      <div class="panel-block">
        <b-input
          v-model="searchString"
          expanded
          placeholder="Gebe einen Benutzernamen ein.."
          @input="search()"
        />
      </div>
      <div class="limit">
        <div
          v-if="results.length == 0"
          class="panel-block text-gray has-text-centered is-justify-content-center"
        >
          {{
            !searchString || searchString === ""
              ? "Gebe einen Benutzername ein, um nach Benutzern zu suchen."
              : "Keine Benutzer gefunden :("
          }}
        </div>
        <a
          v-else
          v-for="result in results"
          :key="result.id"
          class="panel-block"
          @click="select(result)"
        >
          {{ result.name }}
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "nuxt-property-decorator";

const devData: { id: string; name: string }[] = [
  { id: "1", name: "deee" },
  { id: "2", name: "asklios" },
  { id: "3", name: "nic" },
  { id: "4", name: "meza" },
  { id: "5", name: "bnd" },
  { id: "6", name: "vincent" },
  { id: "7", name: "tobias" },
  { id: "8", name: "theländ" },
  { id: "9", name: "drdeee" },
  { id: "10", name: "david3" },
  { id: "16", name: "vincent1" },
  { id: "721", name: "tobias1" },
  { id: "82", name: "theländ1" },
  { id: "93", name: "drdeee1" },
  { id: "150", name: "david2" },
  { id: "66", name: "vincent4" },
  { id: "78", name: "tobias3" },
  { id: "89", name: "theländ2" },
  { id: "90", name: "drdeee12" },
  { id: "1022", name: "david5" },
];

@Component
export default class UserSelect extends Vue {
  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  multiple!: boolean;

  selected: any[] = [];

  searchString: string = "";
  results: any[] = [];

  search() {
    setTimeout(() => {
      console.log(this.selected.map((data) => data.id));
      this.results = devData
        .filter((d) => {
          return (
            d.name.startsWith(this.searchString) &&
            !this.selected.map((data) => data.id).includes(d.id)
          );
        })
        .sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
    });
  }

  select(user: any) {
    this.results = this.results.filter((u) => u.id !== user.id);
    this.selected.push(user);
  }

  remove(user: any) {
    this.selected = this.selected.filter((u) => u.id !== user.id);
    if (user.name.startsWith(this.searchString)) {
      this.results.push(user);
      this.results = this.results.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    }
  }

  @Watch("selected", { deep: true })
  onPollChanged(data: any, oldData: any) {
    if (oldData !== null) {
      this.$emit("input", data);
    }
  }
}
</script>
<style scoped>
.text-gray {
  color: gray;
}
.limit {
  max-height: 40vh;
  overflow: auto;
}
</style>
