<script>
  import { navigate } from "svelte-routing";
  import { functionStore } from "../stores/functionStore";

    let navigateHome = $functionStore.navigateHome;

    function goHome(){
       window.location.href = '/'
    }
</script>

<footer>
  <center>
    <p style="font-size: 1rem;">Back to Start</p>
    <p style="font-size: 1rem;">
      <span> Take me </span><span on:click={goHome}>Home</span><span>, Country Roads ;)</span>
    </p>
    <p style="font-size: .8rem;">
      <span>Site Info</span> & <span>Credits</span>
    </p>
    <p style="font-size: .75rem;">&copy; Abishek CP</p>
  </center>
</footer>

<style>
    footer{
        margin: .6rem;
        font-family: 'Inter', sans-serif;
    }
    p{
        margin-bottom: .25rem;
    }
</style>