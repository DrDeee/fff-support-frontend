<template>
  <div class="mt-1 columns is-tablet is-centered">
    <div class="column is-two-fifths">
      <b-message type="is-dark">
        <div>
          <b>Willkommen</b><br />
          <em
            >Dies ist eins der Support-Tools von Fridays for Future DE - das
            Beste :)
          </em>
          <br />
          <br />
          <b>Deine Gruppe möchte auch das Support-Tool nutzen?</b><br />
          👉 Dann stelle doch bitte mit dem Tool ein Ticket an die
          Administration.<br />
          <br />
          <b>Melde dich an, um auf deine Gruppen und Tickets zuzugreifen:</b>
        </div>
        <div class="buttons is-centered">
          <b-button
            @click="$auth.loginWith('cloud')"
            type="is-primary"
            class="mt-3"
            icon-left="sign-in-alt"
            >Anmelden</b-button
          >
        </div>
        <br />
        <b>Hinweis:</b> Jede:r mit Cloud-Account kann sich hier anmelden. Um
        Zugriff auf eine Gruppe zu bekommen, musst du allerdings von dem
        Gruppen-Admin hinzugefügt werden. Dafür musst du dich allerdings
        mindestens einmal angemeldet haben.
      </b-message>
    </div>
  </div>
</template>
<script>
export default {
  layout: "half",
};
</script>
