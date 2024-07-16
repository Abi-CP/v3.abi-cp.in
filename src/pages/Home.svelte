<script>
  import Footer from "../componets/Footer.svelte";
  import { createEventDispatcher } from 'svelte';


const dispatch = createEventDispatcher();

function navigateHome() {
  dispatch('navigateHome');
}

</script>

<main class="home" id="home-page">
  <div class="wrapper-main">
    <header>
      <!-- Header container -->
      <div class="header-container flex aic">
        <!-- Image and text section -->
        <div class="img flex fdr aic">
          <img
            id="dp"
            src="assets/images/abi_splash.png"
            alt="Abi CP"
            draggable="false"
          />
        </div>
        <!-- Header text section -->
        <div class="header-txt flex fdc aic jcc">
          <h1>Abishek C P</h1>
          <p>
            <strong
              ><span id="age">(21),</span> Aspiring software developer with Hands-on knowledge in Full-Stack, Data Science and Android Development</strong
            >
          </p>
          <!-- Header links section -->
          <div class="header-links">
            <!-- Website link -->
            <div class="website clickable">
              <a href="https://abi-cp.in">
                <div class="flex jcc">
                  <div><i class="bx bx-link"></i></div>
                  <div class="txt">abi-cp.in</div>
                </div>
              </a>
            </div>
            <!-- Mail link -->
            <div class="mail clickable">
              <a href="mailto:mail@abi-cp.in">
                <div class="flex jcc">
                  <div><i class="bx bx-envelope"></i></div>
                  <div class="txt">mail@abi-cp.in</div>
                </div>
              </a>
            </div>
            <!-- Social media links -->
            <div class="social">
              <p class="cmt">//Follow me on the internet..</p>
              <div class="icons flex fdr jcse">
                <a href="http://instagram.com/abi-c.p">
                  <i class="bx bxl-instagram clickable"></i>
                </a>
                <a href="http://github.com/Abi-CP">
                  <i class="bx bxl-github clickable"></i>
                </a>
                <a href="http://linkedin.com/in/abishek-c-p">
                  <i class="bx bxl-linkedin clickable"></i>
                </a>
                <a href="http://twitter.com/Abishek-CP">
                  <i class="bx bxl-twitter clickable"></i>
                </a>
              </div>
            </div>

            <!-- Login section -->
            <!-- <div class="login">
              <p class="cmt">//Login to this website..</p>
              <div class="flex jcc">
                <button
                  title="Login to access many features like Guest Book, unlock commenting,..."
                  class="sign-in clickable"
                  >Sign in
                </button>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </header>
    <Footer element="#home-page" on:navigateHome={navigateHome}/>
  </div>
</main>

<style>
  @font-face {
    font-family: "Gunny Rewritten";
    src: url(./assets/fonts/gnyrwn971.ttf);
  }

  main {
    height: fit-content;
    background: var(--paper-bg);
  }

  .wrapper-main {
    color: var(--text1);
    padding: 0vh 10vw 50px;
    background: var(--paper-bg);
  }

  button,
  button:active,
  button:hover {
    outline: none;
    background: transparent;
    border: 1px solid transparent;
  }

  header .header-container {
    font-family: "Gunny Rewritten";
  }

  .header-container {
    flex-direction: column !important;
  }

  header img {
    width: 80vw;
    padding: 4.5vh 0 0;
    margin-right: 2vw;
  }

  header h1 {
    font-size: 2.2rem;
    max-width: fit-content;
    padding: 0.1rem 0.25rem;
  }

  header p {
    font-size: 1.5rem;
    text-align: center;
    padding: 0.1rem 0.25rem;
  }

  .header-links {
    padding: 0.1rem 0.25rem;
  }

  .header-links a {
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--link);
  }

  .header-links .bx {
    padding: 0.2rem 0.2rem 0;
    text-decoration: none;
    color: var(--link);
  }

  .header-links .txt {
    color: var(--link);
  }

  .header-links .social .cmt,
  .header-links .login .cmt {
    color: var(--text2);
    margin: 2vh 0;
  }

  .header-links button.sign-in {
    background-image: url(assets/images/button_bg.jpg);
    border: 2px solid --text2;
    border-radius: 0.25rem;
  }

  .header-links .login button.sign-in {
    color: #fff;
    text-shadow: 2px 2px 8px --theme0;
    font-family: "Poppins", sans-serif;
    font-size: 0.85rem !important;
    height: fit-content;
    padding: 0.25rem 1.2rem;
  }

  .header-links .login button .info p {
    font-size: 1rem;
  }

  main {
    height: 100vh;
    min-height: max-content;
    border-bottom: 1px dotted var(--theme2);
    box-shadow: 0 3px 10px var(--theme3);
    color: var(--text1);
  }


  @media (hover: none) {
    button:hover {
      filter: brightness(100%);
    }
  }

  @media screen and (min-width: 1000px) {
    .header-container {
      flex-direction: row !important;
    }

    header .header-container {
      min-height: 100vh;
      min-height: 100dvh;
    }

    header img {
      padding: 2vh 0 0;
    }

    .header-container .img {
      min-width: 40vw;
    }


    header h1 {
      font-size: 2.75rem;
    }

    header p {
      font-size: 1.875rem;
    }

    .header-links a {
      font-size: 1.5625rem;
    }

    .header-links .login button .info p {
      font-size: 1.25rem;
    }

  }
</style>
