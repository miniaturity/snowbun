
<script lang="ts">
  import sbicon from "$lib/assets/images/sbicob.png";
  import crbgn from "$lib/assets/images/crbgn.png";

  let {
    text,
    bgImage,
    showPet
  }: { 
    text: string, 
    bgImage?: string,
    showPet?: boolean
  } = $props();

</script>
<header>
  <div class="banner">
    <div class="inner-banner">
      <div>
        <span class="header-text">{text}</span>
        {#if showPet}
          <img alt="seabunny" src={sbicon}/>
        {/if}
      </div>
    </div>
    <img alt="coralreef" src={bgImage || crbgn} class="banner-img"/>
  </div>
</header>
<style lang="scss">
  @use "../styles/globals";

  header {
    width: 100%; height: 100%;
  }

  .banner {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%; height: 100%;
    background: globals.$main;
    overflow: hidden;
  }

  .inner-banner {
    margin: calc(globals.$margin * 2.5);
    display: flex;
    align-items: flex-end;
    border: 1px solid #fff;
    height: 100%;

    & div {
      display: flex;
      flex-direction: column;
      margin: 15px;
      z-index: 2;
    }

    & div > .header-text {
      font-size: 3rem;
      font-weight: bold;
      color: #fff;
    }

    & div > img {
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 30%;
      height: auto;

      transition: all 0.3s ease;

      &:hover {
        cursor: pointer;
        scale: 1.1;
      }

      &:active {
        cursor: grab;
        scale: 0.9;
      }
    }
  }

  .banner-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; height: 100%;
    opacity: 0.5;
  }

</style>