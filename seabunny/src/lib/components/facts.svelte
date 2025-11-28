<script lang="ts">
  import aq3cn from "$lib/assets/images/aq3cn.png";
  import sb from "$lib/assets/images/realseabunny.png";
  import csb from "$lib/assets/images/colorfulsb.png";

  interface Fact {
    header: string;
    desc: string;
    image: string;
    alt: string;
  }
  
  let selected = $state(0);
  
  let facts: Fact[] = [
    {
      header: "sea \"bunny\"",
      desc: "the bunny ears on a sea bunny aren't <span style='font-style: italic;'>actually</span> ears; rather, they're a pair of sensory organs called rhinopores, which help them find food and mates. i still like to imagine them as ears though.",
      image: aq3cn,
      alt: "aquarium"
    },
    {
      header: "fur..?",
      desc: "whhattt?!?! sea bunnies dont actually have fur? yeah its <span style='font-style: italic;'>another</span> sensory organ. its fur is actually a bunch of tubercles, which help them sense their environment.",
      image: sb,
      alt: "sea bunny"
    },
    {
      header: "toxic defense",
      desc: "sea bunnies aren't as friendly as they look. their main diet consists of <span style='font-weight: bold;'>toxic</span> sponges, from which they steal the toxins from, so any predator that eats them will have an upset stomach. the toxins can also be absorbed by touch. i wouldn't touch one..",
      image: csb,
      alt: "particularly colorful sea bunny"
    }
  ]

  let showButton = $derived(selected === facts.length - 1);
  let selectedFact = $derived(facts[selected]);

  const incrementSelected = () => {
    if (selected + 1 > facts.length - 1) selected = 0;
    else selected++;
  }

  const decrementSelected = () => {
    if (selected - 1 < 0) selected = facts.length - 1;
    else selected--;
  }

</script>

<div class="facts">
  <div class="facts-desc">
    <header>
      <div>#{facts.indexOf(selectedFact) + 1}&nbsp;{selectedFact.header}</div>
      <div>...facts</div>
    </header>
    <div class="fd-desc">
      {@html selectedFact.desc}
    </div>
    {#if showButton} 
      <a href="/exhibit">
        exhibit <span style="font-family: Arial, Helvetica, sans-serif">{">>"}</span>
      </a>
    {/if}

    <div class="facts-control">
      <button onclick={() => decrementSelected()}>
        {"<"}
      </button>
      <div>
        {#each facts as f, i}
          {#if i === selected}
            <span class="selected">*</span>
          {:else}
            o
          {/if}
        {/each}
      </div>
      <button onclick={() => incrementSelected()}>
        {">"}
      </button>
    </div>
  </div>
  <div class="facts-img">
    <img src={selectedFact.image} alt={selectedFact.alt}/>
  </div>
</div>

<style lang="scss">
  @use "../styles/globals";

  .facts {
    height: 100%; width: 100%;
    display: flex;
    flex-direction: row;
    gap: calc(globals.$margin * 2.5);
  }

  .facts-desc {
    display: flex;
    flex-direction: column;

    width: 50%; height: 100%;

    & header {
      width: 100%;
      background: globals.$main;
      color: #fff;

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      font-weight: bold;
      font-size: 1.5rem;
      
      & div {
        margin: calc(globals.$margin * 2);
      }
    }

    & a {
      width: fit-content;
    }
  }

  .facts-control {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & button {
      background-color: unset; border: none; outline: none; padding: 0;
      margin: 0 globals.$margin 0 globals.$margin;
      font-size: 1.5rem;

      &:hover {
        cursor: pointer;
      }

      &:focus {
        color: globals.$main;
      }
    }

    & div {
      font-size: 1.5rem;
    }
  }

  .fd-desc {
    height: 80%;
    padding: calc(globals.$margin * 1.5);

    text-align: justify; 
    text-align-last: justify;
    overflow: auto;
  }

  .facts-img {
    width: 50%; height: 100%;

    & img {
      width: 100%; height: 100%;
      object-fit: cover;
    }
  }
  
  .selected {
    font-weight: bold;
    color: globals.$main;
  }

</style>