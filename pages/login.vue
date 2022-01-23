<template>
  <b-message type="is-info">
    {{ $config.TEST }}
    <b>Hey</b><br />
    <em>Dies ist das Support-Tool von Fridays for Future DE :)</em> <br />
    <br />
    <b>Deine Gruppe möchte auch das Support-Tool nutzen?</b><br />
    👉 Dann stelle doch bitte mit dem Tool ein Ticket an die Administration.<br />
    <br />
    <b>Melde dich an, um auf deine Gruppen und Tickets zuzugreifen:</b><br />
    <b-button
      @click="$auth.loginWith('cloud')"
      type="is-info"
      class="m-2"
      icon-left="sign-in-alt"
      >Anmelden mit Cloud-Account</b-button
    >
    <b-button
      @click="$auth.loginWith('cloud')"
      type="is-info"
      class="m-2"
      icon-left="sign-in-alt"
      >Anmelden mit Messenger-Account</b-button
    ><br />
    <b>Hinweis:</b> Jede:r mit Cloud-Account kann sich hier anmelden. Um Zugriff
    auf eine Gruppe zu bekommen, musst du allerdings von dem Gruppen-Admin
    hinzugefügt werden. Dafür musst du dich allerdings mindestens einmal
    angemeldet haben.
  </b-message>
</template>
