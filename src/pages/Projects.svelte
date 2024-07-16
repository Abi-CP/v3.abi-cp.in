<!-- Projects.svelte -->
<script>
  import { onMount } from "svelte";
  import Footer from "../componets/Footer.svelte";
  import jsYaml from "js-yaml";
  import { contentUrl } from "../env";

  // Initialize projects as an empty array
  let projects = [];

  let darkTheme = false;

  const tagColors = {
    "Open-Source": {
      dark: { background: "#6CB2EB", text: "#FFFFFF" },
      light: { background: "#007BFF", text: "#FFFFFF" },
    },
    "Course Work": {
      dark: { background: "#FEDCD2", text: "#000000" },
      light: { background: "#FF5722", text: "#000000" },
    },
    "Live Project": {
      dark: { background: "#B3E5FC", text: "#000000" },
      light: { background: "#03A9F4", text: "#000000" },
    },
    Discontinued: {
      dark: { background: "#FFEBEE", text: "#000000" },
      light: { background: "#FFCDD2", text: "#000000" },
    },
    "Contest Project": {
      dark: { background: "#C5CAE9", text: "#000000" },
      light: { background: "#7986CB", text: "#000000" },
    },
    // Add more tag types as needed
  };

  // Function to fetch data from YAML file
  async function fetchData() {
    try {
      let response = await fetch("/contents/projects.yml"); // Adjust endpoint URL as necessary
      if (!response.ok) {
        throw new Error("Failed to fetch project data");
      }
      let yamlString = await response.text();
      projects = jsYaml.load(yamlString);
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  }

  // Fetch data when component mounts
  onMount(() => {
    fetchData();
  });

  // Function to handle navigation
  function navigateHome() {
    // Implement navigation logic
    console.log("Navigate home");
  }
</script>

<main>
  <div class="page-root flex fdc aic" id="projects-page">
    <h1 style="margin-right: auto;margin-bottom: 2rem">My Projects</h1>
    <div class="container flex jcc">
      {#if projects}
        {#each projects as project (project.id)}
          <div class="project flex fdc jcsb">
            <div class="flex jcsb">
              <div class="flex aic">
                <img src={contentUrl + project.dp} alt="" class="project-dp" />
                <div>
                  <h3 class="project-title">{project.title}</h3>
                  <h5 class="project-date">{project.date}</h5>
                </div>
              </div>
              <button class="arrowBtn rmvBtnStyle clickable">
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div class="desc">
              <p>{project.description}</p>
            </div>
            <div class="tags flex">
              {#if project.tags}
                {#each project.tags as tag}
                  <div
                    class="tag"
                    style="
                    background-color: {tagColors[tag] && !darkTheme
                      ? tagColors[tag].light.background
                      : tagColors[tag] && darkTheme
                        ? tagColors[tag].dark.background
                        : 'transparent'};
                    color: {tagColors[tag] && !darkTheme
                      ? tagColors[tag].light.text
                      : tagColors[tag] && darkTheme
                        ? tagColors[tag].dark.text
                        : 'inherit'};
                  "
                  >
                    {tag}
                  </div>
                {/each}
              {/if}
            </div>
          </div>
        {/each}
      {/if}
    </div>

    <Footer element="#projects-page" on:navigateHome={navigateHome} />
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
    .arrowBtn {
      display: none;
    }
    .desc {
      margin: 0.5rem 0;
    }
  }
</style>
