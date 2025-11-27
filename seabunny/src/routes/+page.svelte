<script lang="ts">
  import ZooBanner from "$lib/components/zoo.svelte";
  import sbicon from "$lib/assets/images/sbicob.png";
  import crbgn from "$lib/assets/images/crbgn.png";
  import aqcn from "$lib/assets/images/aqcn.png";

</script>

<main>
  <ZooBanner />
  <header>
    <div id="banner">
      <div id="inner-banner">
        <div>
          <span id="header-text">sea bunny</span>
          <img alt="seabunny" src={sbicon}/>
        </div>
      </div>
      <img alt="coralreef" src={crbgn} id="banner-img"/>
    </div>
  </header>
  <div id="title">
    <span>
      welcome to the directory. find out more about sea bunnies!
    </span>
    <div>
      <a href="https://miniaturity.com">
        im feeling lucky
      </a>
      &nbsp;—&nbsp;
      <a href="https://miniaturity.com">
        creator
      </a>
      &nbsp;—&nbsp;
      <a href="https://github.com/miniaturity">
        github
      </a>
    </div>
  </div>
  <nav>
    <button class="nav-button">
      <div class="inner-nbutton">
        <span>a</span>
      </div>
      <img src={aqcn} alt="" class="navbtn-img"/>
    </button>
    <button class="nav-button">
      <div class="inner-nbutton">
        <span>a</span>
      </div>
    </button>
    <button class="nav-button">
      <div class="inner-nbutton">
        <span>a</span>
      </div>
    </button>
    <button class="nav-button">
      <div class="inner-nbutton">
        <span>a</span>
      </div>
    </button>
  </nav>
</main>

<style lang="scss">
  @use "../lib/styles/globals";

  main {
    display: flex;
    width: 40vw; height: 100vh;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-self: center;
    
    background: #fff;
  }

  header {
    width: 100%; height: 40%;
  }

  #title {
    width: 100%; height: 10%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: calc(globals.$margin * 2);
    gap: calc(globals.$margin * 2);

    & span {
      color: #000;
      
      font-size: 1.5rem;
      font-weight: bold;
    }

    & div {
      display: flex;
      flex-direction: row;
      transform: scale(.7, 1.2);
      gap: globals.$margin;

      & a {
        height: fit-content;
        font-size: 1.2rem;
      }
    }

  }

  nav {
    width: 100%; height: 30%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);

    grid-row-gap: 8px; grid-column-gap: 8px;
    margin: 0 0 calc(globals.$margin * 2) 0;

    & .nav-button {
      position: relative;
      padding: 0;
      background-color: #1F53FF;
      border: none; outline: none;
            
      
      &:nth-child(1) {
        grid-area: 1 / 1 / 3 / 3;
      }
      &:nth-child(2) {
        grid-area: 3 / 1 / 5 / 3;;
      }
      &:nth-child(3) {
        grid-area: 3 / 3 / 5 / 5;
      }
      &:nth-child(4) {
        grid-area: 1 / 3 / 3 / 5;
      }

    }

  }


  .inner-nbutton {
    height: 100%;
    padding: calc(globals.$margin * 2.5);

    display: flex;
    align-items: center;

    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;

    box-sizing: border-box;

    & span { 
      border: 1px solid #fff; 
      width: 100%;
      height: 100%;
    }
  }
  

  #banner {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%; height: 100%;
    background: globals.$main;
    overflow: hidden;
  }

  #inner-banner {
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

    & div > #header-text {
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
        scale: 1.1;
      }
    }
  }

  #banner-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; height: 100%;
    opacity: 0.5;
  }

  .navbtn-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; height: 100%;
    opacity: 0.5;
  }

</style>