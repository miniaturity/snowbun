<script lang="ts">
  import ZooBanner from "$lib/components/zoo.svelte";
  import Header from "$lib/components/header.svelte";
  import Breadcrumbs from "$lib/components/breadcrumbs.svelte";
</script>

<main>
  <ZooBanner />
  <Breadcrumbs />

  <div>
    <div>
    <Header 
      text="seabunny"
    />
    </div>
    <div>
      
    </div>
  </div>
</main>

<style>
  main {
    width: 40vw; height: 100vh;
    justify-self: center;
  }
</style>