<template>
  <div class="xs:hidden sm:block 2xl:block xl:block lg:block md:block">
    <div
      class="
        carousel
        mt-3
        2xl:w-10/12
        sm:w-8/12
        xl:w-10/12
        lg:w-10/12
        md:w-8/12
        2xl:mr-36
        xl:mr-36
        lg:mr-20
        sm:mr-40
        md:mr-60
      "
    >
      <div
        id="slide1"
        class="
          carousel-item
          relative
          2xl:w-full
          xl:w-full
          lg:w-full
          md:w-full
          w-full
        "
      >
        <img
          src="@/assets/img/asset1.jpeg"
          class="2xl:w-full xl:w-full lg:w-full md:w-full w-full"
        />
        <div
          class="
            absolute
            flex
            justify-between
            transform
            -translate-y-1/2
            left-5
            right-5
            top-1/2
          "
        >
          <a href="#slide3" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div
        id="slide2"
        class="
          carousel-item
          relative
          2xl:w-full
          xl:w-full
          lg:w-full
          md:w-full
          w-full
        "
      >
        <img
          src="@/assets/img/asset2.jpeg"
          class="2xl:w-full xl:w-full lg:w-full md:w-full w-full"
        />
        <div
          class="
            absolute
            flex
            justify-between
            transform
            -translate-y-1/2
            left-5
            right-5
            top-1/2
          "
        >
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div
        id="slide3"
        class="
          carousel-item
          relative
          2xl:w-full
          xl:w-full
          lg:w-full
          md:w-full
          w-full
        "
      >
        <img
          src="@/assets/img/asset3.jpeg"
          class="2xl:w-full xl:w-full lg:w-full md:w-full w-full"
        />
        <div
          class="
            absolute
            flex
            justify-between
            transform
            -translate-y-1/2
            left-5
            right-5
            top-1/2
          "
        >
          <a href="#slide3" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>