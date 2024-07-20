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
  import { functionStore } from "./stores/functionStore";

  let swiper;
  let currentSlideIndex = 0;
  let navigateToIndex = 0;

  let slides;

  onMount(() => {
    let path = window.location.pathname.split("/")[1];
    // slides = ["/", "about", "projects", "blogs", "contact"];
    slides = ["/", "about", "projects", "contact"];
    navigateToIndex = slides.indexOf(path);

    swiper = new Swiper(".swiper", {
      modules: [EffectCreative],
      effect: "creative",
      creativeEffect: {
        prev: {
          translate: [0, 0, -200],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      // simulateTouch: false,
      touchEventsTarget: "container",
    });

    swiper.on("slideChange", () => {
      currentSlideIndex = swiper.activeIndex;
      window.history.pushState({}, "", slides[currentSlideIndex]);
    });

    swiper.slideTo(navigateToIndex, 0);

    window.addEventListener("popstate", () => {
      path = window.location.pathname.split("/")[1];
      navigateToIndex = slides.indexOf(path);
      swiper.slideTo(navigateToIndex);
    });

  });

  function goToSlide() {
    swiper.slideTo(navigateToIndex);
  }

  function navigateHome() {
    swiper.slideTo(0);
  }

  function toggleSimulateTouch(params) {
    swiper.simulateTouch = false;
  }

  // functionStore.set(navigateToHome);
</script>

<a href="http://abi-cp.in" class="head-link clickable">abi c.p</a>

<div class="swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><Home on:navigateHome={navigateHome}/></div>
    <div class="swiper-slide"><About on:navigateHome={navigateHome}/></div>
    <div class="swiper-slide"><Projects on:navigateHome={navigateHome}/></div>
    <!-- <div class="swiper-slide"><Blogs /></div> -->
    <div class="swiper-slide"><Contact on:navigateHome={navigateHome}/></div>
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
  .head-link {
    text-decoration: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: .8rem 1.2rem;
    font-size: 1.8rem;
    font-weight: 700;
    color:  rgb(0, 123, 255);
    color: var(--link);
    z-index: 1000;
    /* make radial smooth blur effect */
    backdrop-filter: blur(2px);
    font-family: 'Gunny Rewritten';
  }
  .swiper {
    width: 100dvw;
    width: 100vw;
    max-height: calc(100% - 40px);
    max-height: calc(100dvh - 40px);
    position: fixed;
    top: 0;
    left: 0;
    background: var(--theme2);
    /* overflow: auto; */
  }

  .swiper-wrapper {
    max-height: calc(100% - 40px);
    max-height: calc(100dvh - 40px);
    margin-bottom: 40px;
  }
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: bold;
    color: var(--text1);
    box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.1);
  }
  .bottom-nav-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    background: #000;
    z-index: 10;
  }

  @media only screen and (min-width: 500px) {
    .head-link{
      padding-left: 7vw;
    }
  }
</style>
