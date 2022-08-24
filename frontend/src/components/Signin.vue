<template>
  <form @submit.prevent="registerUser">
    <div class="form_header">
      <p>Formulaire d'inscription</p>
      <br />
      <p>au</p>
      <br />
      <p>Calendrier de formations</p>
    </div>
    <div class="field">
      <label for="name" class="label">Nom</label>
      <div class="control has-icons-left has-icons-right">
        <input
          v-model="user.name"
          class="input"
          type="text"
          placeholder="Veuillez saisir votre nom d'utilisateur"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label for="email" class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          v-model="user.email"
          class="input"
          type="email"
          placeholder="Veuillez saisir une adresse email valide"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label for="email" class="label">Téléphone</label>
      <div class="control has-icons-left has-icons-right">
        <input
          v-model="user.phone"
          class="input"
          type="text"
          placeholder="Veuillez saisir votre numéro de téléphone"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-phone"></i>
        </span>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" type="submit">
          <span
            v-if="loader"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Envoyer
        </button>
      </div>
      <div class="control">
        <button class="button is-link is-light">Annuler</button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        phone: "",
      },
      loader: false,
    };
  },

  methods: {
    async registerUser() {
      this.loader = true;
      try {
        debugger;
        let response = await axios.post(
          "http://localhost:4000/user",
          this.user
        );
        console.log(response);
        alert("Utilisateur enregistré avec succès");
        this.loader = false;
      } catch (err) {
        alert("Quelque chose s'est mal passé");
        this.loader = false;
      }
    },
  },
};
</script>
