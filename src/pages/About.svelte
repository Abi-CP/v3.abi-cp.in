<script>
  import Footer from "../componets/Footer.svelte";
  import { createEventDispatcher } from "svelte";
  import Remark from "../lib/Remark.svelte";

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
      description: `Led technical operations for the Association of Computer Application, CEG. Guided and managed the
full-stack development and cloud deployment of websites for ACACEG and NIRAL '24, ensuring
robust functionality, optimal performance, and scalability for registration processes.`,
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

  function shouldShowReadMore(description) {
    // Create a temporary element to measure the text height
    let tempElement = document.createElement("div");
    tempElement.innerHTML = description;
    tempElement.style.position = "absolute";
    tempElement.style.visibility = "hidden";
    tempElement.style.height = "auto";
    tempElement.style.width = `${(80 / 100) * document.body.clientWidth - 48}`; // Width of your description area
    tempElement.style.whiteSpace = "normal"; // Reset white space style
    tempElement.style.overflow = "hidden";
    tempElement.style.fontSize = "16px"; // Adjust as needed
    tempElement.style.lineHeight = "1.4"; // Adjust line height to match CSS

    // Append tempElement to body to get its dimensions
    document.body.appendChild(tempElement);

    // Calculate height and lines based on computed style
    const computedStyle = window.getComputedStyle(tempElement);
    const lineHeight = parseInt(computedStyle.lineHeight); // Get line height
    const maxHeight = lineHeight * 3; // Max height for 3 lines
    const currentHeight = tempElement.clientHeight; // Current height of the element

    // Clean up by removing tempElement
    document.body.removeChild(tempElement);

    // Determine if content exceeds 3 lines
    return currentHeight > maxHeight;
  }
</script>

<main>
  <div class="page-root" id="about-page">
    <section>
      <h2>Hi.!</h2>
      <h1>I'm Abishek</h1>
      <br />
      <p>
        I was born in the peaceful town of Kodai(kanal) Road, where my journey into the
        world of technology began with a strong curiosity and a thirst for
        knowledge. I pursued my Master's in Computer Applications at the College
        of Engineering Guindy (Anna University - Guindy Campus). Here, I
        immersed myself in programming languages and database systems,
        developing a keen interest in algorithm design and applications of data
        science.
      </p>
      <p>
        I also built a solid foundation in Mathematics at The American College,
        Madurai, which honed my analytical thinking and problem-solving skills.
        As Student Director of Technical Operations at the Association of
        Computer Association, CEG, I took on leadership roles in full-stack
        development and cloud deployments.
      </p>
      <br />
      <p>
        Driven by a passion for innovation, I aspire to make a mark as a dynamic
        software developer in today's rapidly evolving tech industry. Alongside
        my professional pursuits, I strongly believe in the potential of
        humanity, which fuels my interest in Open Source Projects.
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
            src="/res/images/about/aca_logo.jpg"
            alt="ACA Logo"
            class="experience-logo"
          />
          <div class="exp-date">{experience.date}</div>
          <h3>{experience.title}</h3>
          <h4>{experience.organization}</h4>
          <p
            class="description"
            style="display: {experience.expanded ? 'block' : '-webkit-box'}; 
              -webkit-line-clamp: 3; 
              -webkit-box-orient: vertical; 
              overflow: hidden;"
          >
            <Remark content={experience.description} />
          </p>
          {#if shouldShowReadMore(experience.description)}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
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
              src="/res/images/about/ceg_logo.jpeg"
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
              src="/res/images/about/ac_logo.png"
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
              src="/res/images/about/msp_logo.jpg"
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
    padding-left: 70px;
    margin-top: 1.4rem;
    position: relative;
  }

  .experience::before {
    content: "";
    position: absolute;
    left: 28px;
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
    width: 48px;
    height: 48px;
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
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .read-more {
    color: #0066cc;
    cursor: pointer;
    display: block;
    margin-top: -5px;
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
  }

  @media only screen and (max-width: 500px) {
    .alma-mater {
      display: block;
      text-align: center;
    }
    .alma-logo {
      margin: 0 auto 0.5rem !important;
    }
  }
</style>
