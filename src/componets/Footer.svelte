<script>
  import { navigate } from "svelte-routing";
  import { functionStore } from "../stores/functionStore";

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function navigateHome() {
    dispatch("navigateHome");
    navigate("/");
  }

  // let navigateHome = $functionStore.navigateHome;
  export let element = "";
  function goHome() {
    window.location.href = "/";
  }
</script>

<footer>
  <center>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <p style="font-size: 1rem;">
      Back to <span
        class="clickable"
        on:click={() => {
          document.querySelector(element).scrollTo(0, 0);
        }}
        style="color: var(--link);">Start</span
      >
    </p>
    <p style="font-size: 1rem;">
      <span> Take me </span>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <span
        class="clickable"
        on:click={navigateHome}
        style="color: var(--link);">Home</span
      ><span>, Country Roads ;)</span>
    </p>
    <p style="font-size: .8rem;">
      <!-- <span>Site Info</span> & <span>Credits</span> -->
    </p>
    <p style="font-size: .75rem;">&copy; Abishek CP</p>
  </center>
</footer>

<style>
  footer {
    margin: 2.5rem 0.6rem 0.5rem;
    font-family: "Inter", sans-serif;
  }
  p {
    margin-bottom: 0.25rem;
  }
</style>
