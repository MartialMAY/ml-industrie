<template>
    <Header />
    
    
    <Footer />
  </template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { createHead } from '@vueuse/head'

export default {
  name: 'Contact',
  components: {
    Header,
    Footer
  },
  setup() {
    createHead({
      title: 'ML INDUSTRIE - Page Contact ',
      meta: [
        {
          name: 'description',
          content: "Vous pouvez nous contacter à tout moment pour une demande d'informations au sujet de nos formations techniques et industrielles. Nous vous répondrons dans les plus brefs délais",
        },
      ],
    })
  },
}
</script>