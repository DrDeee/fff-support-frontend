<template>
  <b-message type="is-light" class="mb-2">
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
    <div class="is-flex is-justify-content-space-between">
      <b-icon pack="fab" :icon="ticket.source" type="is-info" />
      <p class="subtitle is-6 mb-1">{{ ticket.creator }}</p>
    </div>
    <hr class="m-1" />
    {{ ticket.description }}
    <hr class="m-1 mb-2" />
    <div class="is-flex is-justify-content-end">
      <div
        v-for="author in ticket.users"
        :key="ticket.users.indexOf(author)"
        class="mr-1"
      >
        <b-tooltip position="is-bottom">
          <figure class="p-1 has-background-grey-lighter rounded rect">
            <b-icon icon="user" />
          </figure>
          <template #content>
            {{ author }}
          </template></b-tooltip
        >
      </div>
      <div class="mr-1">
        <b-tooltip position="is-bottom" type="is-info">
          <figure class="p-1 rect">
            <b-icon icon="plus-circle" />
          </figure>
          <template #content> Beitreten </template></b-tooltip
        >
      </div>
    </div></b-message
  >
</template>

<script>
export default {
  props: {
    ticket: {
      type: Object,
      required: true,
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
.rounded {
  border-radius: 10000rem;
}

.rect {
  height: 32px;
  width: 32px;
}
</style>
