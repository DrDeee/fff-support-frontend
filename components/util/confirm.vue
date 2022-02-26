<template>
  <div>
    <div v-if="clicked" class="is-flex">
      <div @click="confirm()">
        <b-icon icon="check" type="is-success" class="mouse" />
      </div>
      <div @click="clicked = false">
        <b-icon icon="ban" type="is-danger" class="mouse" />
      </div>
    </div>
    <div v-if="!clicked" @click="clicked = true">
      <b-icon icon="trash" type="is-danger" class="mouse" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component
export default class UtilConfirm extends Vue {
  clicked = false;

  confirm() {
    this.clicked = false;
    this.$emit("confirm");
  }
}
</script>
