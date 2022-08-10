<template>
  <button class="lowRes_catalogue_btn">
    <a :href="pdfLink" download="fichier">Télécharger</a>
  </button>
</template>

<script>
export default {
  name: "PdfFileComponent",
  data() {
    return {
      pdfLink: require("../../src/assets/cgv.pdf").default,
    };
  },
};
</script>
