<script>
  import { onMount, afterUpdate } from 'svelte';

  let selected = 'overview';
  let nav;

  const items = [
    { id: 'overview', label: 'Overview', width: 100 },
    { id: 'about', label: 'About Me', width: 110 },
    { id: 'blogs', label: 'Blogs', width: 80 },
    { id: 'portfolio', label: 'Portfolio', width: 120 },
    { id: 'contact', label: 'Contact', width: 100 }
  ];

  $: activeItem = items.find(item => item.id === selected);
  $: animationStyle = activeItem 
    ? `left: ${activeItem.left}px; width: ${activeItem.width}px;` 
    : '';

  function updateItemPositions() {
    let left = 0;
    items.forEach(item => {
      item.left = left;
      left += item.width;
    });
  }

  function setSelected(id) {
    selected = id;
    updateItemPositions();
  }

  onMount(() => {
    updateItemPositions();
  });

  afterUpdate(() => {
    updateItemPositions();
  });
</script>

<nav bind:this={nav}>
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
<style>
  nav {
    position: relative;
    min-width: 370px;
    width: fit-content;
    height: 32px;
    background: #111;
    font-size: 0;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,.1);
    display: flex;
    overflow-x: auto;
    position: relative;
  }
  .item {
    font-size: .8rem;
    text-transform: uppercase;
    color: #ffffff99;
    font-weight: 500;
    text-decoration: none;
    /* line-height: 28px; */
    position: relative;
    z-index: 1;
    display: inline-block;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    /* outline: none;
    border: none; */
    background: transparent;
    padding: 0;
  }
  .item:hover {
    color: #ffffffee;
    transition: color ease .45s;
  }
  .item.active {
    background-color: #ffffff30;
    color: #fff;
  }
  .animation {
    position: absolute;
    height: 100%;
    top: 0;
    z-index: 0;
    background: #ffffff30;
    border-radius: 8px;
    transition: all .5s ease 0s;
  }
</style>