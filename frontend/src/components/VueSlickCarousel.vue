<template>
    <div class="slide-1">
      <p>Slide 1</p>
      <a class="partner" href="https://www.asa-conception.fr/" target="_blank"
        >ASA CONCEPTION</a
      >
    </div>
    <div class="slide-2">
      <p>Slide 2</p>
      <a class="partner" href="https://phineo.co/" target="_blank">PHINEO</a>
    </div>
    <div class="slide-3">
      <p>Slide 3</p>
      <a class="partner" href="https://www.sef-formation.info" target="_blank"
        >SEF FORMATION</a
      >
    </div>
    <div class="slide-4">
      <p>Slide 4</p>
      <a class="partner" href="https://davidlevast.fr" target="_blank"
        >DL WEB</a
      >
    </div>
</template>


<script>
export default {
    name : "VueSlickCarousel",
    components : { VueSlickCarousel : window['vue-slick-carousel'] },
    data:{
      slickOptions: {
        infinite: true,
        slidesToShow: 1,
      },
  },
  methods: {

  }
}

</script>