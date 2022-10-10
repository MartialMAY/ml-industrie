<template>
  <footer class="footer" id="footer">
    <div class="content has-text-centered">
      <div class="columns">
        <div class="column">
          <h6>Qui sommes-nous ?</h6>
          <p class="has-text-center">SAS ML INDUSTRIE au capital de 5 000€</p>
          <p class="has-text-center">
            23 impasse du Petit Pont 76230 ISNEAUVILLE
          </p>
          <p class="has-text-center">Tél. 0767825380</p>
          <p class="has-text-center">
            RCS ROUEN 879 564 896 – APE 7022Z – SIRET 879 564 896 000 14
          </p>
          <p class="has-text-center"></p>
        </div>
        <div class="column">
          <h6>Documents</h6>
          <ul class="linkList">
            <li>
              <a class="displayDownload" :href="cataLink" download="fichier">{{
                cata
              }}</a>
            </li>
            <li>
              <a
                class="displayDownload"
                :href="contactLink"
                download="fichier"
                >{{ annuaire }}</a
              >
            </li>
            <li>
              <a
                class="displayDownload"
                :href="candidatLink"
                download="fichier"
                >{{ candidature }}</a
              >
            </li>
            <li>
              <a
                class="displayDownload"
                :href="livretLink"
                download="fichier"
                >{{ livret }}</a
              >
            </li>
            <li>
              <a class="displayDownload" :href="progLink" download="fichier">{{
                programme
              }}</a>
            </li>
          </ul>
        </div>
        <div class="column">
          <h6>Mentions Légales</h6>
          <ul>
            <li>
              <a class="displayDownload" :href="cgvLink" download="fichier">{{
                cgv
              }}</a>
            </li>
            <li>
              <a class="displayDownload" :href="regLink" download="fichier">{{
                reglement
              }}</a>
            </li>
            <li>
              <a class="displayDownload" :href="reggLink" download="fichier">{{
                reglement_g
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright has-text-white bottom">
      <div class="is-fluid">
        <div class="columns">
          <div class="column">
            <p>Copyright © MLINDUSTRIE {{ date }}</p>
          </div>
          <div class="column has-text-right">
            <i class="fa fa-linkedin-square"></i>
          </div>
        </div>
      </div>
    </div>
    <BackToTop />
  </footer>
</template>

<script>
import { mapState } from "vuex";
import BackToTop from "./BackToTop.vue";

export default {
  components: { BackToTop },
  computed: {
    ...mapState({
      cataLink: "cataLink",
      contactLink: "contactLink",
      candidatLink: "candidatLink",
      livretLink: "livretLink",
      progLink: "progLink",
      cgvLink: "cgvLink",
      regLink: "regLink",
      reggLink: "reggLink",
      livret: "livret",
      cata: "cata",
      annuaire: "annuaire",
      candidature: "candidature",
      //programme: "programme",
      cgv: "cgv",
      reglement: "reglement",
      reglement_g: "reglement_g",
    }),
  },
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
  mounted() {},
  methods: {
    /* msgOpt() {
      if (this.textValue === "") {
        this.textValue = "CGV"
      }
    }, */
  },
};
</script>
