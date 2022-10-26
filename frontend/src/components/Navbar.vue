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
        <a
          id="burger"
          role="button"
          class="navbar-burger"
          :class="active ? 'is-active' : ''"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarHeader"
          @click="showMobilemenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarHeader"
        class="navbar-menu"
        :class="active ? 'is-active' : ''"
      >
        <div class="navbar-start">
          <a class="navbar-item hoverEffect" href="/"> Accueil </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#navbarHeader"> Plus </a>

            <div class="navbar-dropdown">
              <a class="navbar-item hoverEffect" href="/maintenance"> Catalogue </a>
              <a class="navbar-item hoverEffect" href="/maintenance"> Calendrier Inter</a>
              <a class="navbar-item hoverEffect" href="/programme"> Programme de formation </a>
              <hr class="navbar-divider" />
              <a class="navbar-item" href="#footer"> En savoir plus</a>
            </div>
          </div>
        </div>
        <!-- Affichage du titre principal de la page-->
        <p class="navbar-item hoverEffect">
          <p>{{ window.width >= 767 ? societe : '' }}</p>
          <p>{{ window.width >= 767 ? titre : '' }}</p>
        </p>
        <!-- Fin -->
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" id="btn-inscription" href="/maintenance">
                <strong>S'inscrire</strong>
              </a>
              <a class="button is-light" href="/maintenance"> Se connecter </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
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

  mounted () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.respNav()
    this.swingOnLoad()
  },
  unmounted () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
    swingOnLoad () {
      var element = document.getElementById("animateLogo");
      element.classList.add('swing')
    },
    respNav () {
      if (this.window.width <= 767) {
        this.isActive = true
        document.getElementById('lowResH1').innerHTML = this.societe + ', ' + this.titre
      }
      if (this.window.width >= 768) {
        this.isActive = false
        document.querySelector('.displayHr').remove('displayHr')
      }
    },
    showMobilemenu () {
      // this.navbarBurgers
      console.log('is-active')
      this.active = !this.active
    }
  }
}
</script>
