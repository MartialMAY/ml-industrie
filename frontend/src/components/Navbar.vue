<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../../public/logos/logo_mlindustrie.png" />
          <img src="../../public/img/accompagne.png" />
          <hr class="displayHr">
          <h1 id="lowResH1"></h1>
        </a>
        <a
          id="burger"
          role="button"
          class="navbar-burger"
          :class="active ? 'is-active' : ''"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="showMobilemenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="active ? 'is-active' : ''"
      >
        <div class="navbar-start">
          <a class="navbar-item"> Accueil </a>

          <a class="navbar-item" href="/catalogue"> Catalogue </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Plus </a>

            <div class="navbar-dropdown">
              <a class="navbar-item"> Tarifs </a>
              <a class="navbar-item"> Programme de formation </a>
              <a class="navbar-item"> Livret Stagiaire </a>
              <hr class="navbar-divider" />
              <a class="navbar-item"> En savoir plus </a>
            </div>
          </div>
        </div>
        <!-- Affichage du titre principal de la page-->
        <a class="navbar-item">
          <h1>{{ window.width >= 767 ? societe : '' }}</h1>
          <h2>{{ window.width >= 767 ? titre : '' }}</h2>
        </a>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" id="btn-inscription">
                <strong>S'inscrire</strong>
              </a>
              <a class="button is-light"> Se connecter </a>
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
      titre: 'Un réseau de formations fiable et efficace',
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
  },
  unmounted () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
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
