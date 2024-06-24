<!-- Routes -->

<script>
    import { Router , Route } from 'svelte-routing';
    import Home from '../pages/Home.svelte';
    import About from '../pages/About.svelte';
    import Blogs from '../pages/Blogs.svelte';
    import Projects from '../pages/Projects.svelte';
    import Contact from '../pages/Contact.svelte';
</script>

<Router>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/blogs" component={Blogs} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
</Router>