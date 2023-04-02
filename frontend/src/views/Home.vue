<template>
    <Header />
    <!-- Début de la section formations-->
    <section class='hero is-medium is-bold' id='section_historique'>
      <!--Affichage de l'encart de présentation + certification-->
      <div class='hero-body'>
        <h1 class='title' onload='bgHover()'>
          Le spécialiste des formations techniques
        </h1>
        <h2 class="title">Pour l'industrie sur mesure, dans toute la France</h2>
        <hr class='accessory' />
        <div class='container container_certification'>
          <div class='container_certification__flex-left'>
            <img src='../../public/img/certification_qualiopi.webp' width='600' alt='certification_qualiopi' />
          </div>
          <div class='container_certification__flex-right'>
            <h2 id='firstParagraph'>
              {{ firstParagraph_pt1 }}<span>2019</span>{{ firstParagraph_pt2 }}
            </h2>
            <h2 id='secondParagraph'>
              {{ secondParagraph_pt1 }}<span>30</span>{{ secondParagraph_pt2 }}
            </h2>
            <h2 id='thirdParagraph'>
              {{ thirdParagraph_pt1 }}<span>50</span>{{
                thirdParagraph_pt2
              }}<span>1400</span>{{ thirdParagraph_pt3 }}{{ thirdParagraph_pt4 }}
            </h2>
            <h2 id='fourthParagraph'>
              {{ fourthParagraph }}<span>96%.</span>
            </h2>
            <h2 id='fifthParagraph'>
              {{ fifthParagraph }}<span>98%.</span>
            </h2>
          </div>
        </div>
      </div>
      <i class='gg-arrow-long-right animate animateArrow'></i>
    </section>
    <!--Fin de l'affichage de l'encart de présentation + certification-->
    <section class='hero is-medium is-bold' id='section_formations'>
      <div class='hero-body'>
        <div class='container cont_formations reveal fade-bottom'>
          <div class='flex_txt'>
            <h2 class='title'>Nos formations techniques</h2>
  
            <img src='../../public/img/formations.webp' alt='formations' />
  
            <div class='column'>
              <div>
                <h3>Usinage conventionnel</h3>
                <h3>Usinage commande numérique</h3>
                <h3>Pneumatique</h3>
                <h3>Hydraulique</h3>
                <h3>Automatisme</h3>
                <h3>Soudure</h3>
                <h3>Mécanique</h3>
                <h3>Electricité</h3>
                <h3>Electronique</h3>
                <h3>Chaudronnerie</h3>
                <h3>Organisation industrielle</h3>
                <h3>Robotique</h3>
                <h3>SST</h3>
                <h3>AIPR</h3>
                <h3>Habilitation électrique</h3>
                <h3>Incendie</h3>
                <h3>ATEX</h3>
              </div>
            </div>
          </div>
          <div>
            <img class='flex_img-formations' src='../../public/img/airp-image.webp' width='600' height='500'
              alt='texte_formations' />
          </div>
        </div>
      </div>
      <i class='gg-arrow-long-right animate animateArrow'></i>
    </section>
    <!-- Fin de la section formations-->
    <!-- Début de la section atouts-->
    <section class='hero is-medium is-bold' id='section_atouts'>
      <div class='hero-body'>
        <div class='container cont_formations reveal fade-bottom' id='container_formations'>
          <div id='img_container'>
            <img class='flex_img' id='wide_img1' src='../../public/img/atouts2.webp' alt='atouts' />
          </div>
          <div class='flex_txt' id='atouts'>
            <h2 class='title'>Nos atouts</h2>
  
            <img src='../../public/img/atouts.webp' alt='texte_atouts' />
  
            <div class='column'>
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
      <i class='gg-arrow-long-left animate animateArrow'></i>
    </section>
    <!-- Fin de la section atouts-->
    <!-- Début de la section formateurs-->
    <section class='hero is-medium is-bold' id='section_formateurs'>
      <div class='hero-body'>
        <div class='container cont_formations reveal fade-bottom' id='container_formations'>
          <div class='flex_txt' id='formateurs'>
            <h2 class='title'>Nos formateurs</h2>
  
            <img src='../../public/img/formateurs.webp' alt='formateurs' />
  
            <div class='column'>
              <ul>
                <li>Fiables</li>
                <li>Compétents</li>
                <li>Disponibles</li>
                <li>A l'écoute de vos besoins</li>
              </ul>
            </div>
          </div>
          <div id='img_container'>
            <img class='flex_img' id='wide_img2' src='../../public/img/formateurs2.webp' alt='texte_formateurs' />
          </div>
        </div>
      </div>
      <i class='gg-arrow-long-right animate'></i>
    </section>
    <!-- Fin de la section formateurs-->
    <!-- Début de la section certifications-->
    <section class='hero is-medium is-bold' id='section_certifications'>
      <div class='hero-body'>
        <div class='container cont_formations reveal fade-bottom' id='container_formations'>
          <div id='img_container'>
            <img class='flex_img' src='../../public/img/diplome.webp' alt='certifications' />
          </div>
          <div class='flex_txt' id='certifications'>
            <h2 class='title'>Nos certifications</h2>
  
            <img src='../../public/img/certifications.webp' alt='texte_certifications' />
  
            <div class='column'>
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
      <i class='gg-arrow-long-left animate'></i>
    </section>
    <!-- Fin de la section certifications-->
    <!-- Début de la section partenaires-->
    <section class='hero is-medium is-bold carousel'>
      <input for='position1' type='radio' name='position' id='position1' aria-label='position1' />
      <input for='position2' type='radio' name='position' id='position2' aria-label='position2' />
      <input for='position3' type='radio' name='position' id='position3' aria-label='position3' />
      <input for='position4' type='radio' name='position' id='position4' aria-label='position4' checked />
      <input for='position5' type='radio' name='position' id='position5' aria-label='position5' />
      <input for='position6' type='radio' name='position' id='position6' aria-label='position6' />
      <h2 id='partner_lowRes'>Nos partenaires</h2>
      <div id='carousel'>
        <h2 id='partner_highRes'>Nos partenaires</h2>
        <a class='item partner_aexor' href='https://www.aexor.eu/' target='_blank'>
          <img src='../../public/logos/aexor.webp' alt='logo_aexor' />
        </a>
        <a class='item partner_bart' href='#carousel'>
          <img src='../../public/logos/bart.webp' alt='logo_bart_metallerie' />
        </a>
        <a class='item partner_asa' href='https://www.asa-conception.fr/' target='_blank'>
          <img src='../../public/logos/asa.webp' alt='logo_asa_conception' />
        </a>
        <a class='item partner_phineo' href='https://phineo.co/' target='_blank'>
          <img src='../../public/logos/phineo.webp' alt='logo_phineo' />
        </a>
        <a class='item partner_usinage' href='https://www.usinage-formations.com' target='_blank'>
          <img src='../../public/logos/usinage_formations.webp' alt='logo_usinage_formations' />
        </a>
        <a class='item partner_dl' href='https://davidlevast.fr' target='_blank'>
          <img src='../../public/logos/logo_davidlevast.webp' alt='logo_david_levast' />
        </a>
      </div>
    </section>
    <!-- Fin de la section partenaires-->
    <Footer />
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import { createHead } from '@vueuse/head'
  
  export default {
    name: 'App',
    components: {
      Header,
      Footer
    },
    setup() {
      createHead({
        title: 'ML INDUSTRIE, La formation industrielle et technique',
        meta: [
          {
            name: 'description',
            content: "ML Industrie est le spécialiste de la formation industrielle et technique. Basés en Normandie, nous sommes experts dans les domaines suivants: la formation mécanique, ainsi que la formation électricité, mais aussi la formation hydraulique.",
          },
        ],
      })
    },
    data() {
      return {
        firstParagraph_pt1: '',
        firstParagraph_pt2: '',
        secondParagraph_pt1: '',
        secondParagraph_pt2: '',
        thirdParagraph_pt1: '',
        thirdParagraph_pt2: '',
        thirdParagraph_pt3: '',
        thirdParagraph_pt4: '',
        fourthParagraph: '',
        fifthParagraph:'',
        window: {
          width: 0,
          height: 0,
        },
      };
    },
    created() {
      window.addEventListener('scroll', this.pageScroll);
      window.addEventListener('scroll', this.reveal);
    },
    unmounted() {
      window.removeEventListener('scroll', this.pageScroll);
      window.removeEventListener('resize', this.handleResize);
    },
    mounted() {
      this.typeWriter1(), //window.addEventListener('resize', this.handleResize);
        this.handleResize();
      this.respNav();
      this.reveal();
      this.bgHover();
    },
    methods: {
      pageScroll() {
        const allAnime = document.querySelectorAll('.animate');
        for (let i = 0; i < allAnime.length; i++) {
          allAnime[i].classList.add('animateArrow');
        }
        const allAnimeDown = document.querySelectorAll('.animateDown');
        for (let i = 0; i < allAnimeDown.length; i++) {
          allAnimeDown[i].classList.add('animateArrowDown');
        }
      },
      handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      },
      bgHover() {
        let title_effect = document.querySelector('.title');
        title_effect.classList.add('bgHover');
      },
      reveal() {
        let reveals = document.querySelectorAll('.reveal');
  
        for (let i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let elementTop = reveals[i].getBoundingClientRect().top;
          let elementVisible = 150;
  
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
          } else {
            reveals[i].classList.remove('active');
          }
        }
      },
      // Si la résolution est trop faible, les flêches seront retirées de l'affichage
      respNav() {
        const img = document.querySelectorAll('.flex_img');
  
        if (this.window.width <= 475) {
          // document.getElementById('leftArrow').remove('leftArrow');
          //document.getElementById('rightArrow').remove('rightArrow');
          // Gestionnaire d'affichage sur les images
          // En fonction de la résolution d'écran
          for (let i = 0; i < img.length; i++) {
            img[i].classList.add('flex_img_lowRes');
          }
        } else {
          for (let i = 0; i < img.length; i++) {
            img[i].classList.add('flex_img');
          }
        }
        // Si la résolution est trop faible, on retire le titre des partneraires highRes
        if (this.window.width < 1201) {
          document
            .getElementById('partner_highRes')
            .classList.add('partner_highRes_none');
        }
      },
      // Gestion de l'affichage différé de la bio entreprise
      typeWriter1: function () {
        const v = this;
        setTimeout(function () {
          v.firstParagraph_pt1 = 'ML INDUSTRIE, spécialiste de la formation industrielle, a été créée en ';
        }, 800);
        setTimeout(function () {
          v.firstParagraph_pt2 =
            ' et est implantée actuellement sur les régions rouennaise et lyonnaise.';
        }, 800);
        setTimeout(function () {
          v.secondParagraph_pt1 = 'La société collabore avec ';
        }, 1400);
        setTimeout(function () {
          v.secondParagraph_pt2 =
            ' formateurs dans plusieurs domaines techniques.'
        }, 1400);
        setTimeout(function () {
          v.thirdParagraph_pt1 = 'Investie et en plein essor avec '
        }, 2200);
        setTimeout(function () {
          v.thirdParagraph_pt2 =
            ' formations à son catalogue, elle forme environ '
        }, 2200);
        setTimeout(function () {
          v.thirdParagraph_pt3 =
            ' stagiaires par an.'
        }, 2200)
        setTimeout(function () {
          v.fourthParagraph =
            'Le taux de satisfaction des stagiaires est de '
        }, 2200)
        setTimeout(function () {
          v.fifthParagraph =
            'Le taux de satisfaction clients est de '
        }, 2200)
      }
    }
  }
  </script>