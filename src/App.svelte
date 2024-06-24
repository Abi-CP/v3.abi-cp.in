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

  let slides = ["", "about", "projects", "blogs", "contact"];

  onMount(() => {
    swiper = new Swiper(".swiper", {
      modules: [EffectCreative],
      effect: "creative",
      creativeEffect: {
        prev: {
          // will set `translateZ(-400px)` on previous slides
          translate: [0, 0, -400],
        },
        next: {
          // will set `translateX(100%)` on next slides
          translate: ["100%", 0, 0],
        },
      },
    });

    swiper.on("slideChange", () => {
      currentSlideIndex = swiper.activeIndex;
      window.location.pathname = "/" + slides[currentSlideIndex];
    });
  });

  function goToSlide(toIndex) {
    swiper.slideTo(toIndex);
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
<div class="nav-container w100"><BottomNav /></div>

<style>
  .swiper {
    width: 100dvw;
    width: 100vw;
    height: calc(100dvh - 24px);
    position: fixed;
    top: 0;
    left: 0;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }
  .nav-container{
    position: fixed;
    bottom: 0;
    left: 0;

  }
</style>
