<script>
  import { onDestroy, onMount } from "svelte";

  export let navigateToSelected;
  export let navigateToIndex;
  export let currentSlideIndex;

  let selected = "";
  let nav;
  let windowWidth = window.screen.availWidth;
  let margin = windowWidth < 768 ? windowWidth / 2 - 50 + "px" : "auto";

  const items = [
    { id: "overview", label: "Overview", width: 100 },
    { id: "about", label: "About Me", width: 110 },
    { id: "projects", label: "Projects", width: 120 },
    // { id: "blogs", label: "Blogs", width: 80 },
    { id: "contact", label: "Contact", width: 100 },
  ];

  $: updateSelected(currentSlideIndex);
  $: activeItem = items.find((item) => item.id === selected);
  $: animationStyle = activeItem
    ? `left: ${activeItem.left}px; width: ${activeItem.width}px;`
    : "";

  function updateItemPositions() {
    let left = 0;
    items.forEach((item) => {
      item.left = left;
      left += item.width;
    });

    if (windowWidth >= 768) return;

    let selectedLeft = items[currentSlideIndex].left;
    if (nav) {
      nav.scrollTo({
        left: selectedLeft,
        behavior: "smooth",
      });

      setTimeout(() => {
        let itemElem = document.querySelector(
          ".bottom-nav-container nav .item.active"
        );
        let itemWidth = itemElem.clientWidth;
        let itemRetcsX = itemElem.getClientRects()[0].x;

        let scrollByAmount = -(windowWidth / 2 - itemWidth / 2 - itemRetcsX);

        nav.scrollBy({ left: scrollByAmount, behavior: "smooth" });
      }, 450);
    }
  }

  function setSelected(id) {
    selected = id;
    navigateToIndex = items.findIndex((item) => item.id === id) || 0;

    updateItemPositions();
    navigateToSelected();
  }

  function updateSelected(index) {
    selected = items[index].id;
    updateItemPositions();
  }

  onMount(() => {
    let path = window.location.pathname.split("/")[1];
    updateItemPositions();
    selected = path || "overview";

    window.addEventListener("resize", () => {
      windowWidth = window.screen.availWidth;
      margin = windowWidth < 768 ? windowWidth / 2 - 50 + "px" : "auto";
    });
  });

  onDestroy(() => {
    window.removeEventListener("resize", () => {});
  });
</script>

<!-- <p>{window.screen.availWidth}</p>
<p>{margin}</p> -->

<div class="nav-wrapper">
  <div class="scrollable" bind:this={nav}>
    <nav
      style="margin: 0 {margin};display: {windowWidth < 768
        ? 'inline-flex'
        : 'block'}"
    >
      {#each items as item}
        <button
          class="item"
          class:active={selected === item.id}
          on:click={() => setSelected(item.id)}
          style="width: {item.width}px;"
        >
          {item.label}
        </button>
      {/each}
      <div class="animation" style={animationStyle}></div>
    </nav>
  </div>
</div>

<style>
  .nav-wrapper {
    overflow: hidden;
    position: relative; /* Ensure children with absolute positioning are relative to this */
  }

  .scrollable {
    /* height: 40px; */
    padding: 4px 0;
    overflow-x: auto;
    scrollbar-width: none; /* Hide scrollbar in Firefox */
    -ms-overflow-style: none; /* Hide scrollbar in IE/Edge */
    white-space: nowrap; /* Ensure items stay in a single line */
    position: relative; /* Ensure absolute positioned children are relative to this */
  }

  .scrollable::-webkit-scrollbar {
    display: none; /* Hide scrollbar in WebKit browsers */
  }

  nav {
    position: relative;
    height: 32px;
    max-width: fit-content;
    background: var(--theme0);
    font-size: 0;
    /* box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1); */
    scroll-snap-type: x mandatory; /* Enable snap scrolling */
    /* padding: 0 10px; Add padding to adjust spacing as needed */
  }

  .item {
    font-size: 0.8rem;
    text-transform: uppercase;
    color: var(--nav-item-color);
    font-weight: 500;
    text-decoration: none;
    position: relative;
    z-index: 1;
    display: inline-block;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    background: transparent;
    padding: 8px 16px; /* Adjust padding for button size */
    transition: color 0.25s ease;
    white-space: nowrap; /* Ensure button text does not wrap */
  }

  .item:hover {
    color: var(--nav-item-hover-color);
  }

  .item.active {
    color: var(--theme1);
  }

  button {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .animation {
    position: absolute;
    height: 100%;
    top: 0;
    z-index: 0;
    background: var(--nav-animation-bg);
    border-radius: 8px;
    transition: all 0.5s ease;
  }

  @media (min-width: 1200px) {
    .item:hover {
      background: var(--nav-item-hover-bg);
    }
  }
</style>
