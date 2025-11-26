<script lang="ts">
  import ZooBanner from "$lib/components/Zoo.svelte";
  import banner1 from "$lib/assets/seabunnyyt.webp";

  let banner = banner1; 

</script>

<main>
  <ZooBanner />
  <header>
    <nav>

    </nav>
    <div id="banner">
      <div style="flex-grow: 1;"></div>
      <span>sea bunny</span>
      <img src={banner} alt="banner" id="banner-img"/>
      <div id="overlay"></div>
    </div>
    
  </header>
</main>

<style lang="scss">
  @use "../lib/styles/globals";

  :global(:root) {
    --margin: 4px;

    --nav: #a0a0a0;
  }

  :global(body) {
    margin: 0;
    font-family: "Roboto", sans-serif;
  }

  main {
    display: flex;
    width: 50vw; height: 100vh;

    flex-direction: column;
    align-items: center;
    justify-self: center;
    
    background: #fff;
  }

  header {
    height: 50%;
    width: 100%;
  }

  nav {
    height: 10%;
    width: 100%;

    background: var(--nav);
  }

  #banner {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%; height: 80%;
    

    & span {
      z-index: 2;
      margin: calc(var(--margin) * 3);
      font-size: 3rem;
      color: #fff;
    }
  }

  #banner-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; height: 100%;
    object-fit: cover;
  }

  #overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; height: 100%;
    background: linear-gradient(180deg,rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.66) 90%);
  }

</style>