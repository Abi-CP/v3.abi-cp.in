<script>
  import { marked } from 'marked';

  export let content = '';

  $: htmlContent = marked(content);
</script>

<div class="markdown-content">
  {@html htmlContent}
</div>