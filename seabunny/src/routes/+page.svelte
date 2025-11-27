<script lang="ts">
  import Header from "$lib/components/header.svelte";
  import ZooBanner from "$lib/components/zoo.svelte";

  import aqcn from "$lib/assets/images/aqcn.png";
  import aq2cn from "$lib/assets/images/aq2cn.png";
  import aq3cn from "$lib/assets/images/aq3cn.png";
  import aq4cn from "$lib/assets/images/aq4cn.png";
	import Breadcrumbs from "$lib/components/breadcrumbs.svelte";
	import { onMount } from "svelte";

  const paths: string[] = [
    "/main",
    "/exhibit",
    "/zoo",
  ];

  let randomPath = "/";

  onMount(() => {
    randomPath = paths[Math.floor(Math.random() * paths.length)];
  })
</script>

<main>
  <ZooBanner />
  <Breadcrumbs />
  <Header 
    text="directory"
  />
  <div id="title">
    <span>
      welcome to the directory. find out more about sea bunnies!
    </span>
    <div>
      <a href={randomPath}>
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
    <a class="nav-button" href="/main">
      <div class="inner-nbutton">
        <span>
          <span>main</span>
        </span>
      </div>
      <img src={aqcn} alt="" class="navbtn-img"/>
    </a>
    <a class="nav-button" href="/exhibit">
      <div class="inner-nbutton">
        <span>
          <span>exhibit</span>
        </span>
      </div>
      <img src={aq2cn} alt="" class="navbtn-img"/>
    </a>
    <a class="nav-button" href="/gallery">
      <div class="inner-nbutton">
        <span>
          <span>gallery</span>
        </span>
      </div>
      <img src={aq4cn} alt="" class="navbtn-img"/>
    </a>
    <a class="nav-button" href="https://zoo.hackclub.com/">
      <div class="inner-nbutton">
        <span>
          <span>zoo</span>
        </span>
      </div>
      <img src={aq3cn} alt="" class="navbtn-img"/>
    </a>
  </nav>
</main>

<style lang="scss">
  @use "../lib/styles/globals";

  main {
    display: flex;
    width: 40vw; height: 100vh;

    min-width: 400px;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-self: center;
    
    background: #fff;
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
      transition: all 0.3s ease;
      text-decoration: none;
      
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

      &:hover {
        cursor: pointer;

        & .inner-nbutton {
          font-size: 1.8rem;
        }
        
        & img {
          opacity: 0.4;
        }
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
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;

      border: 1px solid #fff; 
      width: 100%;
      height: 100%;
      z-index: 2;

      & span {
        margin: 15px;
        border: none;
      }

    }
  }
  
  .navbtn-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; height: 100%;
    opacity: 0.5;
    object-fit: cover;
    transition: all 0.3s ease;
  }

</style>