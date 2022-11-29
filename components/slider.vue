<template>
  <div>
    <div
      class="carousel mt-3 w-10/12 2xl:mr-36 xl:mr-36 mr-16 lg:mr-16 md:mr-16"
    >
      <div id="slide1" class="carousel-item relative w-full">
        <img src="asset 1.jpeg" class="w-full" />
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
      <div id="slide2" class="carousel-item relative w-full">
        <img src="asset 2.jpeg" class="w-full" />
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
      <div id="slide3" class="carousel-item relative w-full">
        <img src="asset 3.jpeg" class="w-full" />
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