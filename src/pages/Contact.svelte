<script>
  import Footer from "../componets/Footer.svelte";
  import { createEventDispatcher } from 'svelte';


const dispatch = createEventDispatcher();

function navigateHome() {
  dispatch('navigateHome');
}
</script>

<main>
  <div class="page-root" id="contact-page">
      <h1>Contact</h1>
      <br />
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;Thank you for reaching out to me. Feel free to write a mail at <a
          href="mailto:mail@abi-cp.in" target="_blank"><em>mail@abi-cp.in</em></a
        >
      </p>
      <br />
      <p>
        Alternatively, you can reach me on <a
          href="https://twitter.com/Abishek_CP" target="_blank"><em>Twitter</em></a
        >
      </p>

      <br />
      <br />
      <h2>Quick Links:</h2>
      <ul>
        <li>
          <a href="http://linkedin.com/in/abishek-c-p" target="_blank">LinkedIn</a>
        </li>
        <li><a href="https://github.com/Abi-CP" target="_blank">GitHub</a></li>
        <li>
          <a href="https://twitter.com/Abishek_CP" target="_blank">Twitter</a>
        </li>
        <li>
          <a href="https://instagram.com/abi_c.p" target="_blank">Instagram</a>
        </li>
      </ul>
      <br />
      <Footer element="#contact-page" on:navigateHome={navigateHome}/>
  </div>
</main>

<style>
  a {
    all: unset;
    color: var(--link);
  }

  ul {
    padding: 0 2rem;
  }
  li {
    margin-top: .8rem;
  }
</style>
