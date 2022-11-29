<template>
  <div>
    <slider />
    <product />
    <clothing />
    <shoes />
    <div>
      <div>
        <img
          class="w-10/12 2xl:mr-36 lg:mr-12 md:mr-12 mr-12 xl:mr-36 mt-5"
          src="ads-1.jpg"
          alt=""
        />
      </div>
    </div>
    <sack />
    <glasses />
    <div>
      <div>
        <img
          class="w-10/12 2xl:mr-36 lg:mr-12 md:mr-12 mr-12 xl:mr-36 mt-5"
          src="asset 29.jpeg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import sack from "../components/sack.vue";
import shoes from "../components/shoes.vue";
import slider from "../components/slider.vue";
import product from "../components/product.vue";
import clothing from "../components/clothing.vue";
import glasses from "../components/glasses.vue";
</script>

<style>
</style>