<template>
  <div>
    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="card-header">
            <div class="card-header-title">Offen</div>
            <div class="card-header-icon">
              <b-tag type="is-info">6</b-tag>
            </div>
          </div>
          <div class="card-content">
            <Container group-name="dnd" @drop="drop('open', $event)">
              <Draggable v-for="ticket in open" :key="ticket.id">
                <ticket :ticket="ticket"
              /></Draggable>
            </Container>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-header">
            <div class="card-header-title">In Bearbeitung</div>
            <div class="card-header-icon">
              <b-tag type="is-info">6</b-tag>
            </div>
          </div>
          <div class="card-content">
            <Container group-name="dnd" @drop="drop('progress', $event)">
              <Draggable v-for="ticket in progress" :key="ticket.id">
                <ticket :ticket="ticket"
              /></Draggable>
            </Container>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-header">
            <div class="card-header-title">Abgeschlossen</div>
            <div class="card-header-icon">
              <b-tag type="is-info">6</b-tag>
            </div>
          </div>
          <div class="card-content">
            <Container group-name="dnd" @drop="drop('finished', $event)">
              <Draggable v-for="ticket in finished" :key="ticket.id">
                <ticket :ticket="ticket"
              /></Draggable>
            </Container>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Draggable, Container } from "vue-dndrop";
export default {
  components: { Draggable, Container },
  data() {
    return {
      moveData: {
        added: null,
        addedColumn: null,
        removed: null,
        removedColumn: null,
      },
      open: [
        {
          id: 1,
          title: "Cloud-Account benötigt",
          description:
            "Hi, wir wollen für unsere OG gerne einen Cloud-Account bekommen ;)",
          source: "telegram",
          creator: "DrDeeee",
          claimed: true,
          users: ["AadAD", "asfasfasasdasdasdas", "asfsafasf"],
        },
      ],
      progress: [
        {
          id: 2,
          title: "E-Mail für OG Pirna",
          description:
            "Hey, meine OG Pirna möchte gerne eine E-Mail beantragen!",
          source: "telegram",
          creator: "DrDeeee",
          claimed: true,
          users: ["AadAD", "asfasfas", "asfsafasf"],
        },
        {
          id: 3,
          title: "E-Mail für OG Pirna 2",
          description:
            "Hey, meine OG Pirna möchte gerne eine E-Mail beantragen!",
          source: "telegram",
          creator: "DrDeeee",
          claimed: true,
          users: ["AadasdasdD", "asfasfasas", "asfsaasdasfasf"],
        },
      ],
      finished: [
        {
          id: 4,
          title: "E-Mail für OG Pirna 3",
          description:
            "Hey, meine OG Pirna möchte gerne eine E-Mail beantragen!",
          source: "discord",
          creator: "DrDeeee",
          claimed: true,
          users: ["AadAD", "asfasfas", "asfsafasf"],
        },
        {
          id: 5,
          title: "E-Mail für OG Pirna 4",
          description:
            "Hey, meine OG Pirna möchte gerne eine E-Mail beantragen!",
          source: "whatsapp",
          creator: "DrDeeee",
          claimed: true,
          users: ["AadaasdasdsdasdD"],
        },
      ],
    };
  },
  methods: {
    drop(column, event) {
      if (event.removedIndex != null) {
        this.moveData.removed = event.removedIndex;
        this.moveData.removedColumn = column;
      }
      if (event.addedIndex != null) {
        this.moveData.added = event.addedIndex;
        this.moveData.addedColumn = column;
      }
      if (this.moveData.added != null && this.moveData.removed != null) {
        if (this.moveData.addedColumn === this.moveData.removedColumn) {
          let ticket = this[this.moveData.removedColumn][this.moveData.removed];
          this[this.moveData.removedColumn].splice(this.moveData.removed, 1);
          this[this.moveData.addedColumn].splice(
            this.moveData.added,
            0,
            ticket
          );
        } else {
          this[this.moveData.addedColumn].splice(
            this.moveData.added,
            0,
            this[this.moveData.removedColumn].splice(
              this.moveData.removedIndex,
              1
            )[0]
          );
        }
        this.moveData = {
          added: null,
          addedColumn: null,
          removed: null,
          removedColumn: null,
        };
      }
    },
  },
};
</script>
