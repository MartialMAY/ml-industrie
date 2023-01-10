<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    // Les enfants peuvent remplacer le titre.
    title: 'Accueil',
    // Résultat : Titre de ma page ← Mon site
    // Si un enfant change le titre en 'Mon autre titre de page',
    // il deviendra : Mon autre titre de page ← Mon site
    titleTemplate: '%s ← ML INDUSTRIE',
    // Définissez les métabalises ici.
    htmlAttrs: {
      lang: 'fr-FR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'follow' },
      {
        name: 'description',
        content:
          'ML Industrie est le spécialiste des formations techniques pour l\'industrie. Nous sommes sommes experts dans les domaines suivants: formation mécanique, ainsi que formation électricité, mais aussi formation hydraulique, et également formation pneumatique, et formation régulation, formation habilitation électrique, formation automatisme, formation robot, sans oublier formation fanuc, formation Siemens, formation Schneider, formation Rockwell, et même formation commande numérique, et pour finir formation usinage'
      },
      { property: 'og:title', content: 'Accueil ← ML INDUSTRIE' },
      { property: 'og:site_name', content: 'ML INDUSTRIE' },
      // La liste des types est disponible ici: http://ogp.me/#types
      { property: 'og:type', content: 'https://mlindustrie.netlify.app' },
      // Il doit être le même que votre lien canonique, voir ci-dessous.
      {
        property: 'og:url',
        content: 'https://mlindustrie.netlify.app'
      },
      {
        property: 'og:image',
        content: 'https://github.com/dasyx/mlindustrie/blob/main/frontend/public/logos/logo_mlindustrie.webp'
      },
      {
        property: 'og:description',
        content: 'ML Industrie est le spécialiste des formations techniques pour l\'industrie. Nous sommes sommes experts dans les domaines suivants: formation mécanique, ainsi que formation électricité, mais aussi formation hydraulique, et également formation pneumatique, et formation régulation, formation habilitation électrique, formation automatisme, formation robot, sans oublier formation fanuc, formation Siemens, formation Schneider, formation Rockwell, et même formation commande numérique, et pour finir formation usinage'
      },
      { itemprop: 'name', content: 'Accueil ← ML iNDUSTRIE' },
      { itemprop: 'description', content: 'ML Industrie est le spécialiste des formations techniques pour l\'industrie. Nous sommes sommes experts dans les domaines suivants: formation mécanique, ainsi que formation électricité, mais aussi formation hydraulique, et également formation pneumatique, et formation régulation, formation habilitation électrique, formation automatisme, formation robot, sans oublier formation fanuc, formation Siemens, formation Schneider, formation Rockwell, et même formation commande numérique, et pour finir formation usinage' },
      { itemprop: 'image', content: 'https://github.com/dasyx/mlindustrie/blob/main/frontend/public/logos/logo_mlindustrie.webp' }
    ]
  }
}
</script>
