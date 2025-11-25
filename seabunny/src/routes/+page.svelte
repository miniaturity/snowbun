<script lang="ts">
	import Button from "$lib/components/Button.svelte";
  import mini from "$lib/assets/image.png";

</script>

<main>
  <div class="buttons">
    <Button 
      btn="small"
      href="https://miniaturity.com/" 
      alt="creator (miniaturity)"
      img={mini}
      className="_a"
    />
    <Button 
      btn="small"
      href="https://miniaturity.com/"
      alt="ph"
      img={mini}
      className="_b"
    />
    <Button 
      btn="medium"
      href="https://miniaturity.com/"
      alt="ph"
      img={mini}
      className="_c"
    />
    <Button 
      btn="large"
      href="https://miniaturity.com/"
      alt="ph"
      text="testestestest"
      className="_d"
    />
  </div>
</main>

<style lang="scss">
  :global(body) {
    margin: 0;
    font-family: "Roboto", sans-serif;
  }

  main {
    position: relative;
    width: 100vw; height: 100vh;
    background-image: linear-gradient(rgba(149, 149, 149, 0.5), rgba(149, 149, 149, 0.5)), url(../lib/assets/coralreef.gif);
    background-size: cover;

    display: grid;

  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);

    width: 400px;
    height: 400px;
    align-self: center;
    justify-self: center;
  }

  :global(._a) { grid-area: 1 / 1 / 2 / 2; }
  :global(._b) { grid-area: 1 / 2 / 2 / 3; }
  :global(._c) { grid-area: 2 / 1 / 3 / 3; }
  :global(._d) { grid-area: 1 / 3 / 3 / 4; }
</style>