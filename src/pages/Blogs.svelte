<!-- <script>
    import Footer from "../componets/Footer.svelte";
    import { createEventDispatcher } from "svelte";
  
    const dispatch = createEventDispatcher();
  
    function navigateHome() {
      dispatch("navigateHome");
    }
  
    let experiences = [
      {
        id: 1,
        title: "Student Director - Technical Operations",
        organization: "Association of Computer Association, CEG",
        date: "May. 2024 - Present",
        description: `As a Project Lead, my responsibility was to oversee and maintain all
            the codebase of one of Hyperfury's core offerings. Typescript, Rust,
            Python were used in the infrastructure. We utilized NextJS with the
            "T-3 stack" - ensuring developer productivity as well as a bug-free
            typesafe codebase.`,
        expanded: false, // To track if description is expanded or not
      },
      // Add more experience objects as needed
    ];
  
    function toggleDescription(id) {
      experiences = experiences.map((exp) => {
        if (exp.id === id) {
          return { ...exp, expanded: !exp.expanded };
        } else {
          return exp;
        }
      });
    }
  
    // Function to check if description exceeds certain height
    function shouldShowReadMore(description) {
      // Calculate height based on content
      let descriptionElement = document.createElement("div");
      descriptionElement.innerHTML = description;
      descriptionElement.style.position = "absolute";
      descriptionElement.style.visibility = "hidden";
      descriptionElement.style.height = "auto";
      descriptionElement.style.width = "555px"; // Width of your description area
      descriptionElement.style.whiteSpace = "nowrap";
      descriptionElement.style.overflow = "hidden";
      descriptionElement.style.fontSize = "16px"; // Adjust as needed
  
      document.body.appendChild(descriptionElement);
      let isOverflown = descriptionElement.scrollHeight > descriptionElement.clientHeight;
      document.body.removeChild(descriptionElement);
  
      return isOverflown;
    }
  </script>
  
  <main>
    <div class="page-root" id="about-page">
      <section>
        <h2>Hi.!</h2>
        <h1>I'm Abishek</h1>
        <br />
        <p>
          Born in the serene town of Kodai(kanal) Road, my journey into the realm
          of technology commenced with a deep-seated curiosity and a quest for
          knowledge. Pursuing a Master's in Computer Applications at College of
          Engineering Guindy (Anna University - Guindy Campus), I immersed myself
          in the intricacies of programming languages and database systems,
          cultivating a profound interest in algorithmic design and data science
          applications. My academic voyage also included a solid foundation in
          Mathematics at The American College, Madurai, where I developed
          analytical thinking and problem-solving abilities. As Student Director
          of Technical Operations at Association of Computer Association, CEG, I
          navigated transformative roles, spearheading full-stack development and
          cloud deployments. Fueled by a relentless passion for innovation, I
          strive to carve a meaningful path as a dynamic software developer in
          today's ever-evolving tech landscape.
        </p>
        <br />
        <p>
          I embrace a deep belief in the potential of humanity, which fuels my
          interest in OpenSource Projects.
        </p>
        <br />
        <p>
          I extend my passions into the realms of photography, travel, and
          gardening, each offering a canvas for creativity and a journey of
          discovery. Alongside these, I delve into topics such as economics, and
          philosophy, broadening my understanding and perspective on the world we
          live in.
        </p>
        <br />
        <hr />
      </section>
      <section class="experience-wrapper">
        <h2>Experience</h2>
        <br />
  
        {#each experiences as experience}
          <div class="experience">
            <img
              src="/assets/images/about/aca_logo.jpg"
              alt="ACA Logo"
              class="experience-logo"
            />
            <div class="exp-date">{experience.date}</div>
            <h3>{experience.title}</h3>
            <h4>{experience.organization}</h4>
            <p
              class="description"
              style="display: {experience.expanded ? 'block' : '-webkit-box'}; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;"
            >
              {experience.description}
            </p>
            {#if shouldShowReadMore(experience.description)}
              <span
                class="read-more clickable"
                on:click={() => toggleDescription(experience.id)}
              >
                {experience.expanded ? "Read less" : "Read more"}
              </span>
            {/if}
          </div>
        {/each}
      </section>
      <section class="alma-mater-wrapper">
        <h2>Alma Mater</h2>
        <br />
        <div class="flex fdc aic" style="max-width: 555px;margin: 0 auto">
          <div class="alma-mater flex jcsb w100">
            <div class="alma-logo">
              <img
                src="/assets/images/about/ceg_logo.jpeg"
                alt="College of Engineering Guindy Logo"
              />
            </div>
            <div class="">
              <h3>College of Engineering Guindy, Chennai</h3>
              <h4>Master of Computer Applications</h4>
              <p>Aug. 2023 - May. 2025</p>
            </div>
          </div>
          <div class="alma-mater flex jcsb w100">
            <div class="alma-logo">
              <img
                src="/assets/images/about/ac_logo.png"
                alt="The American College Logo"
              />
            </div>
            <div class="alma-content">
              <h3>The American College, Madurai</h3>
              <h4>Bachelor of Mathematics</h4>
              <p>Sept. 2020 - May. 2023</p>
            </div>
          </div>
          <div class="alma-mater flex jcsb w100">
            <div class="alma-logo">
              <img
                src="/assets/images/about/msp_logo.jpg"
                alt="MSP Solai Nadar Mem. Hr. Sec. School Logo"
              />
            </div>
            <div class="alma-content">
              <h3>MSP Solai Nadar Mem. Hr. Sec. School, Dindigul</h3>
              <h4>Higher Secondary Schooling (Biology, PCM)</h4>
              <p>Jun. 2018 - Mar. 2020</p>
            </div>
          </div>
        </div>
      </section>
      <Footer element="#about-page" on:navigateHome={navigateHome} />
    </div>
  </main>
  
  <style>
    section {
      margin-bottom: 3.5rem;
    }
    .experience {
      padding-left: 48px;
      margin-top: 1.4rem;
      position: relative;
    }
  
    .experience::before {
      content: "";
      position: absolute;
      left: 20px;
      top: 0;
      bottom: 0;
      width: 1.5px;
      background-color: #ccc;
    }
  
    .experience-logo {
      position: absolute;
      border: 0.2px solid #ccc;
      left: 5px;
      top: 0;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  
    .exp-date {
      font-weight: bold;
      color: #555;
    }
  
    h3 {
      margin: 5px 0;
      font-size: 1.2em;
    }
  
    h4 {
      margin: 5px 0;
      font-weight: normal;
      color: #888;
    }
  
    .description {
      margin: 10px 0;
      color: #333;
    }
  
    .read-more {
      color: #0066cc;
      cursor: pointer;
      display: block;
      margin-top: 5px;
    }
  
    .read-more:hover {
      text-decoration: underline;
    }
  
    /* alma */
    .alma-mater {
      margin-top: 1.4rem;
    }
    .alma-mater:nth-child(even) {
      flex-direction: row-reverse;
    }
    .alma-logo {
      width: 100px;
      height: 100px;
      border-radius: 10px;
    }
    .alma-mater:nth-child(odd) .alma-logo {
      margin-right: 5vw;
    }
    .alma-mater:nth-child(even) .alma-logo {
      margin-left: 5vw;
   
   -->