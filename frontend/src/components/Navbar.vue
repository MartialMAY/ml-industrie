<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" id="animateLogo" onload="swingOnLoad()" href="/">
          <img src="../../public/logos/logo_mlindustrie.webp" alt="logo_mlindustrie" />
          <img src="../../public/img/accompagne.webp" alt="logo_mlindustrie_accompagne" />
          <hr class="displayHr">
          <p id="lowResH1"></p>
        </a>
        <a id="burger" role="button" class="navbar-burger" :class="active ? 'is-active' : ''" aria-label="menu"
          aria-expanded="false" data-target="navbarHeader" @click="showMobilemenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarHeader" class="navbar-menu" :class="active ? 'is-active' : ''">
        <div class="navbar-start">
          <a class="navbar-item hoverEffect" href="/"> Accueil </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#navbarHeader"> Plus </a>

            <div class="navbar-dropdown">
              <a class="navbar-item hoverEffect" :href='cataLink' aria-label='Télécharger catalogue' download='fichier'>{{
                cata }} En construction... </a>
              <a class="navbar-item hoverEffect" href="https://www.ouformer.com/organisme-de-formation/ML-Industrie">
                Calendrier Inter</a>
              <router-link to="/maintenance" class="navbar-item hoverEffect">
                Programme de formation
              </router-link>
              <hr class="navbar-divider" />
              <a class="navbar-item" href="#footer"> En savoir plus</a>
            </div>
          </div>
        </div>
        <!-- Affichage du titre principal de la page-->
        <div class="navbar-item navbar-item_title hoverEffect">
          <p>{{ window.width >= 767 ? societe : '' }}</p>
          <p>{{ window.width >= 767 ? titre : '' }}</p>
        </div>
        <!-- Fin -->
        <div class="navbar-end">
          <div class="navbar-item">
            <!--  <div class="buttons">
              <a class="button is-primary" id="btn-inscription" href="/maintenance">
                <strong>S'inscrire</strong>
              </a>
              <a class="button is-light" href="/maintenance"> Se connecter </a>
            </div> -->
            <a class="navbar-item navbar-item_contact" href="/contact">
              <i class="fas fa-envelope"></i><span>nous contacter</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      isActive: '',
      societe: 'ML INDUSTRIE',
      titre: 'Des formations fiables et efficaces',
      active: false,
      showNavbar: true,
      window: {
        width: 0,
        height: 0
      }
    }
  },
  computed: {
    ...mapState({
      //cataLink: 'cataLink'
    })
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.respNav()
    this.swingOnLoad()
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    swingOnLoad() {
      var element = document.getElementById("animateLogo");
      element.classList.add('swing')
    },
    respNav() {
      if (this.window.width <= 767) {
        this.isActive = true
        document.getElementById('lowResH1').innerHTML = this.societe + ', ' + this.titre
      }
      if (this.window.width >= 768) {
        this.isActive = false
        document.querySelector('.displayHr').remove('displayHr')
      }
    },
    showMobilemenu() {
      // this.navbarBurgers
      console.log('is-active')
      this.active = !this.active
    },
  }
}
</script>
