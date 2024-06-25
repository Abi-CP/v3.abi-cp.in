<script>
  import { onMount } from "svelte";
  import Swiper from "swiper";
  import { EffectCreative } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/effect-creative";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Blogs from "./pages/Blogs.svelte";
  import Projects from "./pages/Projects.svelte";
  import Contact from "./pages/Contact.svelte";
  import BottomNav from "./componets/nav/bottomNav/BottomNav.svelte";

  let swiper;
  let currentSlideIndex = 0;
  let navigateToIndex = 0;

  let slides;


  onMount(() => {
    let path = window.location.pathname.split("/")[1];
    slides = ["/", "about", "projects", "blogs", "contact"];
    navigateToIndex = slides.indexOf(path);

    swiper = new Swiper(".swiper", {
      modules: [EffectCreative],
      effect: "creative",
      creativeEffect: {
        prev: {
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
    });

    swiper.on("slideChange", () => {
      currentSlideIndex = swiper.activeIndex;
      window.history.pushState({}, "", slides[currentSlideIndex]);
    });

    swiper.slideTo(navigateToIndex, 0);

    window.addEventListener("popstate", () => {
      path = window.location.pathname.split("/")[1];
      navigateToIndex = slides.indexOf(path);
      swiper.slideTo(navigateToIndex, 0);
    });
  });

  function goToSlide() {
    swiper.slideTo(navigateToIndex);
  }
</script>

<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><Home /></div>
    <div class="swiper-slide"><About /></div>
    <div class="swiper-slide"><Projects /></div>
    <div class="swiper-slide"><Blogs /></div>
    <div class="swiper-slide"><Contact /></div>
  </div>
</div>

<div class="bottom-nav-container w100">
  <BottomNav
    navigateToSelected={goToSlide}
    bind:currentSlideIndex
    bind:navigateToIndex
  />
</div>

<style>
  .swiper {
    width: 100dvw;
    width: 100vw;
    /* max-height: calc(100% - 33px);
    max-height: calc(100dvh - 33px); */
    position: fixed;
    top: 0;
    left: 0;
    /* overflow: auto; */
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    min-height: calc(100dvh - 33px);
  }
  .bottom-nav-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    background: #000;
  }
</style>
