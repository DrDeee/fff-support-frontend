<template>
  <div>
    <Header />
    <div class="p-3 bg-light">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class DefaultLayout extends Vue {}
</script>
