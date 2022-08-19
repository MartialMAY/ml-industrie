<template>
  <Header />
  <!-- Début de la section formations-->
  <section class="hero is-medium is-bold" id="section_historique">
    <i id="leftArrow" class="gg-arrow-long-down animateDown"></i
    ><i id="rightArrow" class="gg-arrow-long-down animateDown"></i>
    <!--Affichage de l'encart de présentation + certification-->
    <div class="hero-body">
      <h1 class="title">Une entreprise de confiance</h1>
      <hr class="accessory">
      <div class="container container_certification">
        <div class="container_certification__flex-left">
          <img src="../../public/img/certification_qualiopi.png" />
        </div>
        <div class="container_certification__flex-right">
          <p id="firstParagraph">
            {{ firstParagraph }}
          </p>
          <p id="secondParagraph">
            {{ secondParagraph }}
          </p>
          <p id="thirdParagraph">
            {{ thirdParagraph }}
          </p>
        </div>
      </div>
    </div>
    <i class="gg-arrow-long-right animate"></i>
  </section>
  <!--Fin de l'affichage de l'encart de présentation + certification-->
  <section class="hero is-medium is-bold" id="section_formations">
    <div class="hero-body">
      <div class="container cont_formations">
        <div class="flex_txt">
          <h1 class="title">Nos formations techniques</h1>
          <a>
            <img src="../../public/img/formations.png" />
          </a>
          <div class="column">
            <ul>
              <li>Usinage conventionnel</li>
              <li>Usinage commande numérique</li>
              <li>Pneumatique</li>
              <li>Hydraulique</li>
              <li>Automatisme</li>
              <li>Soudure</li>
              <li>Mécanique</li>
              <li>Electricité</li>
              <li>Electronique</li>
            </ul>
          </div>
        </div>
        <div>
          <a>
            <img class="flex_img" src="../../public/img/formations3.png" />
          </a>
        </div>
      </div>
    </div>
    <i class="gg-arrow-long-right animate"></i>
  </section>
  <!-- Fin de la section formations-->
  <!-- Début de la section atouts-->
  <section class="hero is-medium is-bold" id="section_atouts">
    <div class="hero-body">
      <div class="container cont_formations" id="container_formations">
        <div id="img_container">
          <a>
            <img class="flex_img" src="../../public/img/atouts2.png" />
          </a>
        </div>
        <div class="flex_txt" id="atouts">
          <h1 class="title">Nos atouts</h1>
          <a>
            <img src="../../public/img/atouts.png" />
          </a>
          <div class="column">
            <ul>
              <li>Réactif</li>
              <li>Professionnel</li>
              <li>Efficace</li>
              <li>Adaptable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <i class="gg-arrow-long-left animate"></i>
  </section>
  <!-- Fin de la section atouts-->
  <!-- Début de la section formateurs-->
  <section class="hero is-medium is-bold" id="section_formateurs">
    <div class="hero-body">
      <div class="container cont_formations" id="container_formations">
        <div class="flex_txt" id="formateurs">
          <h1 class="title">Nos formateurs</h1>
          <a>
            <img src="../../public/img/formateurs.png" />
          </a>
          <div class="column">
            <ul>
              <li>Fiables</li>
              <li>Compétents</li>
              <li>Disponibles</li>
              <li>A l'écoute de vos</li>
            </ul>
          </div>
        </div>
        <div id="img_container">
          <a>
            <img class="flex_img" src="../../public/img/formateurs2.png" />
          </a>
        </div>
      </div>
    </div>
    <i class="gg-arrow-long-right animate"></i>
  </section>
  <!-- Fin de la section formateurs-->
  <!-- Début de la section certifications-->
  <section class="hero is-medium is-bold" id="section_certifications">
    <div class="hero-body">
      <div class="container cont_formations" id="container_formations">
        <div id="img_container">
          <a>
            <img class="flex_img" src="../../public/img/certifications2.png" />
          </a>
        </div>
        <div class="flex_txt" id="certifications">
          <h1 class="title">Nos certifications</h1>
          <a>
            <img src="../../public/img/certifications.png" />
          </a>
          <div class="column">
            <ul>
              <li>Tests</li>
              <li>Evaluations</li>
              <li>Diplômes</li>
              <li>Certificats</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Fin de la section atouts-->
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: { Header, Footer },
  data() {
    return {
      firstParagraph: "",
      secondParagraph: "",
      thirdParagraph: "",
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  created() {
    window.addEventListener("scroll", this.pageScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.pageScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    this.typeWriter1(), window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.respNav();
  },
  methods: {
    pageScroll() {
      const allAnime = document.querySelectorAll(".animate");
      for (let i = 0; i < allAnime.length; i++) {
        allAnime[i].classList.add("animateArrow");
      }
      const allAnimeDown = document.querySelectorAll(".animateDown");
      for (let i = 0; i < allAnimeDown.length; i++) {
        allAnimeDown[i].classList.add("animateArrowDown");
      }
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    //Si la résolution est trop faible, les flêches seront retirées de l'affichage
    respNav() {
      if (this.window.width <= 475) {
        document.getElementById("leftArrow").remove("leftArrow");
        document.getElementById("rightArrow").remove("rightArrow");
      }
    },
    typeWriter1: function () {
      const v = this;
      setTimeout(function () {
        v.firstParagraph =
          "La Société ML INDUSTRIE a été créée en 2019 et est implantée actuellement sur les régions rouennaise et lyonnaise.";
      }, 1000);
      setTimeout(function () {
        v.secondParagraph =
          "Elle collabore avec 10 formateurs dans plusieurs domaines techniques.";
      }, 2000);
      setTimeout(function () {
        v.thirdParagraph =
          "En plein essor et avec 20 formations à son catalogue, elle forme environ 140 stagiaires par an et a vu son chiffre d'affaires s'élever à 130 K€ en deux ans seulement.";
      }, 3000);
    },
  },
};
</script>
