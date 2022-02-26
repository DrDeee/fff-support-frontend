<template>
  <b-navbar shadow fixedBottom class="mt-3">
    <template #start>
      <b-navbar-item tag="router-link" to="/admin">
        <b-icon icon="crown"
      /></b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item tag="a" :href="$config.SUPPORT" target="_blank"
        >Kontakt</b-navbar-item
      >
      <b-navbar-item tag="a" :href="$config.IMPRESSUM" target="_blank"
        >Impressum</b-navbar-item
      >
    </template>
  </b-navbar>
</template>
