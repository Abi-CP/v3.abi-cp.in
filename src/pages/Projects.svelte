<script>
  import Footer from "../componets/Footer.svelte";
  // import { parseYAML } from "../lib/yml";

  // let projects = [];

  // fetch("/contents/projects.yml")
  //   .then((response) => response.text())
  //   .then((yamlString) => {
  //     projects =parseYAML(yamlString);
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching YAML file:", error);
  //   });
</script>

<main>
  <div class="page-root flex fdc aic">
    <p>Projects Page</p>
    <div class="container flex jcc">
      <div class="project flex fdc jcsb">
        <div class="flex jcsb">
          <div class="flex aic">
            <img
              src="/assets/images/abi_splash.png"
              alt=""
              class="project-dp"
            />
            <div>
              <h3 class="project-title">TANCET 2024 - Mock Test</h3>
              <h5 class="project-date">January 2023</h5>
            </div>
          </div>
          <button class="arrowBtn rmvBtnStyle clickable">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div class="desc">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Project A description goes here. This could include details about
            the project, technologies used, challenges overcome, etc.
          </p>
        </div>
        <div class="tags flex">
          <div class="tag">Web Development</div>
          <div class="tag">UX/UI Design</div>
        </div>
      </div>
      <div class="project flex fdc jcsb">
        <div class="flex jcsb">
          <div class="flex aic">
            <img
              src="/assets/images/abi_splash.png"
              alt=""
              class="project-dp"
            />
            <div>
              <h3 class="project-title">TANCET 2024 - Mock Test</h3>
              <h5 class="project-date">January 2023</h5>
            </div>
          </div>
          <button class="arrowBtn rmvBtnStyle clickable">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div class="desc">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Project A description goes here. This could include details about
            the project, technologies used, challenges overcome, etc.
          </p>
        </div>
        <div class="tags flex">
          <div class="tag">Web Development</div>
          <div class="tag">UX/UI Design</div>
        </div>
      </div>
      <div class="project flex fdc jcsb">
        <div class="flex jcsb">
          <div class="flex aic">
            <img
              src="/assets/images/abi_splash.png"
              alt=""
              class="project-dp"
            />
            <div>
              <h3 class="project-title">TANCET 2024 - Mock Test</h3>
              <h5 class="project-date">January 2023</h5>
            </div>
          </div>
          <button class="arrowBtn rmvBtnStyle clickable">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div class="desc">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Project A description goes here. This could include details about
            the project, technologies used, challenges overcome, etc.
          </p>
        </div>
        <div class="tags flex">
          <div class="tag">Web Development</div>
          <div class="tag">UX/UI Design</div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</main>

<style>
  .page-root {
    width: 100%;
  }
  .container {
    flex-wrap: wrap;
    width: 100%;
  }
  .project {
    width: 100%;
    max-width: 500px;
    min-height: 14rem;
    max-height: fit-content;
    border: 1px solid var(--text1);
    border-radius: 10px;
    margin: 12px 9px;
    background-color: #ffffffb9;
    transition: all 0.5s ease;
    padding: 1.5rem 2.5rem;
  }
  .project:hover {
    background-color: #ffffff;
    cursor: pointer;
    transition: all 0.5s ease;
    transform: scale(1.02);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
  .project-dp {
    height: 64px !important;
    width: 64px !important;
    /* border: 1px solid black; */
    border-radius: 50px;
    margin-right: 1.5rem;
  }
  .arrowBtn {
    display: block;
    margin-right: 1.5rem;
    font-size: 1.5rem;
    rotate: 0;
  }
  .project:hover .arrowBtn {
    rotate: -45deg;
    transition: all 0.5s ease;
  }
  .project-title {
    font-size: 0.95rem;
    margin: 0.25rem 0;
  }
  .desc {
    margin: 1rem 0;
    font-size: 0.9rem;
    text-align: justify;
  }
  .tags {
    height: max-content;
    flex-wrap: wrap;
  }
  .tag {
    padding: 0.2rem 1rem;
    font-size: 0.8rem;
    font-weight: 400;
    border: 0.5px solid #000;
    border-radius: 25px;
    margin: 0.25rem 0.5rem;
  }

  /* max */
  @media only screen and (max-width: 767px) {

    .project {
      padding: 0.5rem 1rem;
      min-height: 10rem; 
      margin: 12px 0;
      /* margin-left: -1rem;  */
      /* margin-right: -1rem; */
    }
    .arrowBtn{
      display: none;
    }
    .desc {
      margin: 0.5rem 0;
    }
  }
</style>
