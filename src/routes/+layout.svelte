<script lang="ts">
	import '../app.css';
  import Footer from '../components/organisms/footer.svelte';
  import Header from '../components/organisms/header.svelte';
  import Sidebar from '../components/organisms/sidebar.svelte';
	let { children } = $props();
</script>

<div class="dark:bg-[--bg-body] dark:text-white bg-white">
<Header/>
<Sidebar/>
<div class="py-2">
{@render children()}
</div>
<Footer/>
</div>