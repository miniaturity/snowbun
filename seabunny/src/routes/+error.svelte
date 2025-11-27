<script lang="ts">
  import ZooBanner from "$lib/components/zoo.svelte";
  import aq3cn from "$lib/assets/images/aq3cn.png";
	import Breadcrumbs from "$lib/components/breadcrumbs.svelte";

</script>

<main>
  <ZooBanner />

  <div style="width: 50%;">
    <Breadcrumbs />
  </div>
  <div class="error">
    <div class="error-inner">
      <span>
        <span>404 // page not found</span>
      </span>
    </div>
    <img src={aq3cn} alt=""/>
  </div>
  
</main>

<style lang="scss">
  @use "../lib/styles/globals";

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-self: center;

    width: 40vw; height: 100vh;

    min-width: 400px;
    gap: globals.$margin;
  }

  .error {
    display: flex;
    width: 50%; height: 40%;
    position: relative;

    background: globals.$main;

    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%; height: 100%;
      opacity: 0.5;
      object-fit: cover;
      transition: all 0.3s ease;
    }

    & .error-inner {
      width: 100%;
      padding: calc(globals.$margin * 2.5);
      z-index: 2;
      & span {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-end;

        border: 1px solid #fff; 
        color: #fff;
        font-weight: bold;
        
        width: 100%; height: 100%;
        z-index: 2;

        & span {
          border: none;
          font-size: 1.6rem;
          margin: calc(globals.$margin * 2.5);
        }
      }
    }
  }
</style>