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
          src="http://joominamarket.ir/joomla/templates/joominamarket/narmesh/images/narmesh/ads/ads-1.jpg"
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
          src="http://joominamarket.ir/joomla/templates/joominamarket/narmesh/images/narmesh/ads/ads-2.jpg"
          alt=""
        />
      </div>
    </div>
    <productweblog />
    <weblog />
    <div>
      <div class="w-10/12 2xl:mr-36 lg:mr-12 md:mr-12 mr-12 xl:mr-36 mt-5">
        <img src="@/assets/img/asset37.jpeg" alt="" />
      </div>
    </div>
    <div class="mt-3">
      <div
        class="
          grid
          2xl:grid-cols-2
          xl:grid-cols-2
          lg:grid-cols-1
          md:grid-cols-1
          grid-cols-1
          gap-5
        "
      >
        <div>
          <img
            class="w-10/12 2xl:mr-36 xl:mr-36 lg:mr-12 md:mr-12 mr-12"
            src="@/assets/img/asset38.jpeg"
            alt=""
          />
        </div>
        <div>
          <img
            class="w-10/12 2xl:mr-7 xl:mr-7 md:mr-12 mr-12"
            src="@/assets/img/asset39.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
    <cardIpsum />
    <cardIpsumone />
  </div>
</template>

<script setup>
import cardIpsumone from "../components/cardIpsumOne.vue";
import cardIpsum from "../components/cardIpsum.vue";
import productweblog from "../components/productWeblog.vue";
import sack from "../components/sack.vue";
import shoes from "../components/shoes.vue";
import slider from "../components/slider.vue";
import product from "../components/product.vue";
import clothing from "../components/clothing.vue";
import glasses from "../components/glasses.vue";
import weblog from "../components/weblog.vue";
</script>

<style>
</style>