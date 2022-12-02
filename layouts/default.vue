<template>
  <div>
    <div class="bg-gray-300">
      <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <!-- Navbar -->
          <div
            class="
              w-full
              navbar
              2xl:ml-0
              xl:ml-0
              lg:ml-0
              sm:ml-52
              5xl:ml-32
              4xl:ml-32
              xs:ml-52
              md:ml-64
              lg:px-20
              px-0
              2xl:px-20
            "
          >
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div class="flex-1 px-2 xl:mx-2 2xl:mx-2 lg:mx-8">سبد خرید</div>
            <div class="flex-none hidden lg:block">
              <ul class="menu 2xl:mr-12 xl:mr-12 lg:mr-0 mr-0 menu-horizontal">
                <!-- Navbar menu content here -->
                <li><a>بلاگ </a></li>
                <li><a>محصولات </a></li>

                <li><a>پیشخوان </a></li>
                <li class="">
                  <a href="">
                    <img class="w-12 h-12" src="@/assets/img/logo.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div style="direction: rtl">
            <slot />
          </div>
          <div class="mt-5">
            <Footer />
          </div>

          <!-- Page content here -->
        </div>
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu p-4 w-80 bg-base-100">
            <!-- Sidebar content here -->
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
            <li><a>پیشخوان </a></li>
            <li><a>محصولات </a></li>
            <li><a>بلاگ </a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Footer from "./footer/index";
</script>

<style>
</style>