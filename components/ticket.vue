<template>
  <b-message :type="'is-' + type" class="normal mb-2">
    <div class="is-flex is-justify-content-space-between">
      <p class="title is-4">{{ ticket.title }}</p>
      <p @click="test()">
        <b-icon
          class="mouse"
          :pack="ticket.claimed ? 'fas' : 'far'"
          icon="bookmark"
        />
      </p>
    </div>
    <div class="is-flex is-justify-content-space-between ">
      <b-icon pack="fab" :icon="ticket.source" size="is-medium" class="normal" />
      <p class="subtitle is-6 mb-1">{{ ticket.creator }}</p>
    </div>
    <hr class="my-1" />
    <div class="normal">
      {{ ticket.description }}
    </div>
    <hr class="my-1 mb-2" />
    <div class="is-flex is-justify-content-end mb-2">
      <div
        v-for="author in ticket.users"
        :key="ticket.users.indexOf(author)"
        class="mr-1"
      >
        <b-tooltip position="is-top">
          <figure class="p-1 has-background-grey-lighter rounded rect">
            <b-icon icon="user" class="normal" />
          </figure>
          <template #content>
            {{ author }}
          </template></b-tooltip
        >
      </div>
      <div class="mr-1">
        <b-tooltip position="is-top" type="is-info">
          <figure class="p-1 rect">
            <b-icon icon="plus-circle" class="normal" />
          </figure>
          <template #content> Beitreten </template></b-tooltip
        >
      </div>
    </div>
    <b-button size="is-small" :type="'is-' + type" expanded
      >Zum Ticket</b-button
    >
  </b-message>
</template>

<script>
export default {
  props: {
    ticket: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "dark",
    },
  },
  methods: {
    test() {
      this.$emit("claim");
    },
  },
};
</script>

<style scoped>
hr {
  background-color: rgb(230, 230, 230);
}
.normal {
  color: initial;
}
.rounded {
  border-radius: 10000rem;
}

.rect {
  height: 32px;
  width: 32px;
}
</style>
