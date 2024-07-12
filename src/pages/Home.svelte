<script>
  import Footer from "../componets/Footer.svelte";

</script>
<main class="home">
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
              ><span id="age">(21),</span> Freelance Developer, Looking forward to
              help businesses with custom coded websites & related solutions.</strong
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
            <div class="login">
              <p class="cmt">//Login to this website..</p>
              <div class="flex jcc">
                <button title="Login to access many features like Guest Book, unlock commenting,..." class="sign-in clickable">Sign in
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <aside>
      <div class="quick-links flex jcc fww">
        <button type="button" class="clickable">
          <span class="link"><p>Contact me</p></span>
        </button>
        <button type="button" class="clickable">
          <span class="link">
            <span class="flex">
              <p>Resume</p>
              <p><i class="bx bxs-download"></i></p>
            </span>
          </span>
        </button>
        <button type="button" class="clickable">
          <span class="link"><p>Gallery</p></span>
        </button>
        <button type="button" class="clickable">
          <span class="link"><p>Photography</p></span>
        </button>
      </div>

      <!-- Top container section -->
      <div class="top-container">
        <div class="top-catagories flex fdc">
          <h5>Top Categories:</h5>
          <div class="wrapper flex fww jcc">
            <p>Web Development</p>
            <p>Front-end-Development</p>
          </div>
        </div>
        <div class="top-labels flex"></div>
        <h5>Top Labels:</h5>
        <div class="wrapper flex fww jcc">
          <p>HTML</p>
          <p>CSS</p>
          <p>JS</p>
          <p>React</p>
          <p>AWS</p>
        </div>
      </div>
    </aside>

    <Footer/>
  </div>
</main>

<style>
  @font-face {
    font-family: "Gunny Rewritten";
    src: url(./assets/fonts/gnyrwn971.ttf);
  }


  .wrapper-main {
    background: var(--paper-bg);
    color: var(--text1);
    padding: 0vh 10vw;
  }

  button,
  button:active,
  button:hover {
    outline: none;
    background: transparent;
    border: 1px solid transparent;
  }

  header .header-container {
    min-height: 100vh;
    min-height: 100dvh;
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
    font-family: 'Poppins', sans-serif;
    font-size: .85rem !important;
    height: fit-content;
    padding: .25rem 1.2rem;
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

  .scrollmenu button div {
    display: inline;
  }

  aside {
    margin-top: 5vh;
  }

  aside button {
    padding: 0.5rem 0.9rem;
  }

  aside button p {
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    color: var(--link);
    margin: 0 0.2rem;
  }

  .top-container {
    margin-top: 3vh;
  }

  .top-container h5 {
    font-size: 1rem;
  }

  .top-container .wrapper {
    padding: 0.5rem 0;
  }

  .top-container .wrapper p {
    font-size: 0.85rem;
    margin: 0.3rem 0.5rem;
    padding: 0.125rem 1rem;
    border: 1px solid var(--text1);
    border-radius: 1.2rem;
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

    header img {
      padding: 2vh 0 0;
    }

    .header-container .img {
      min-width: 40vw;
    }

    .top-container h5 {
      text-align: center;
      font-size: 1.25rem;
    }

    .top-container .wrapper {
      margin-bottom: 5vh;
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

    aside button p {
      font-size: 1.5rem;
    }

    .top-container .wrapper p {
      font-size: 1.0625rem;
    }
  }
</style>
