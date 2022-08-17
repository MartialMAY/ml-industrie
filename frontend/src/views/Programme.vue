<template>
  <header class="prog_header">
    <div class="prog_header__title">
      <h1>Programme de formation</h1>
      <h2>Mécanique des fluides</h2>
    </div>
    <div class="prog_header__img">
      <img src="../../public/logos/logo_mlindustrie.png" />
    </div>
  </header>
  <main class="container is-fluid container_programme">
    <!-- DEBUT DE LA BARRE D'ACCES RAPIDE -->
    <nav class="navbar navbar_programme" role="navigation" aria-label="main navigation">
      <hr class="separator" />
      <hr />
      <h3>Accès rapide</h3>
      <div class="navbar__item">
        <a class="navbar__link" href="#centre_formation"
          >I. Centre de formation</a
        >
      </div>
      <div class="navbar__item">
        <a class="navbar__link" href="#action_formation"
          >II. Action de formation</a
        >
      </div>
      <div class="navbar__item">
        <a class="navbar__link" href="#calendrier_previsionnel"
          >III. Calendrier prévisionnel</a
        >
      </div>
      <hr class="separator" id="bottomSeparator" />
      <hr />
    </nav>
    <!-- FIN DE LA BARRE D'ACCES RAPIDE -->

    <!-- DEBUT DE LA SECTION CENTRE DE FORMATION -->
    <section id="centre_formation" class="centre">
      <div class="centre__left">
        <h4><span>I.</span>Centre de formation</h4>
        <p>Raison sociale : ML Industrie</p>
        <p>Adresse ; 23 Impasse du Petit Pont</p>
        <p>Code postal : 76230</p>
        <br />
        <p>Téléphone : 07.67.82.53.80</p>
        <p>Numéro SIRET : 87956489600014</p>
        <p>Nom de la personne à contacter : LEVAST Matthieu</p>
        <p>Organisme privé</p>
      </div>
      <div class="centre__right">
        <br>
        <br>
        <p>Localité : ISNEAUVILLE</p>
        <br />
        <p>Email : mlindustrie76@gmail.com</p>
      </div>
    </section>
    <!-- FIN DE LA SECTION CENTRE DE FORMATION -->
  </main>
</template>

<script>
export default {
  data() {
    return {
      societe: "ML INDUSTRIE",
      titre: "Un réseau de formations fiable et efficace",
      window: {
        width: 0,
        height: 0,
      },
    };
  },

  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.respNav();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    respNav() {
      if (this.window.width <= 767) {
      }
      if (this.window.width >= 768) {
      }
    },
  },
};
</script>
