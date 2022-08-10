<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <div class="columns">
        <div class="column">
          <h6>Qui sommes-nous ?</h6>
          <p class="has-text-center">
            SAS ML INDUSTRIE au capital de 5 000€
          </p>
          <p class="has-text-center">
            23 impasse du Petit Pont 76230 ISNEAUVILLE
          </p>
          <p class="has-text-center">
            Tél. 0767825380
          </p>
          <p class="has-text-center">
            RCS ROUEN 879 564 896 – APE 7022Z – SIRET 879 564 896 000 14
          </p>
          <p class="has-text-center"></p>
        </div>
        <div class="column">
          <h6>Documents</h6>
          <ul>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
          </ul>
        </div>
        <div class="column">
          <h6>Mentions Légales</h6>
          <ul>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
          </ul>
        </div>
        <div class="column">
          <h6>Contact</h6>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-medium" type="email" placeholder="Email" />
            <span class="icon is-left">
              <i class="fa fa-envelope"></i>
            </span>
          </div>
          <a class="button is-success is-rounded" id="subscribe">Envoyer</a>
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
  </footer>
</template>

<script>
export default {
  data () {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>
