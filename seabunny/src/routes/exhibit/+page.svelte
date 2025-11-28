<script lang="ts">
	import Breadcrumbs from "$lib/components/breadcrumbs.svelte";
	import Dialogue from "$lib/components/dialogue.svelte";
  import Header from "$lib/components/header.svelte";
  
  import realseabunny from "$lib/assets/images/realseabunny.png";

  const dialogues = [
    "hello i am sea bunny. welcome to the exhibit",
    "it sure is nice off of the coast of indonesia. i blend in with the sponges and algae arouynd here.",
    "i'm feeling hungry"
  ];

  const answers = [
    "my name is Tim Sweeney",
    "*eats sponge* hey thanks",
    ""
  ];

  let text = $state(dialogues[0]);

  const getRandomDialogue = (): void => {
    let index = Math.floor(Math.random() * dialogues.length);
    text = dialogues[index];
  }

  const getAnswer = (i: number): void => {
    if (i < 0 || i >= answers.length) return;
    text = answers[i];
  }

</script>

<main>
  <Breadcrumbs />
  <div id="hc">  
    <Header 
      text="exhibit"
    />
  </div>
  <div id="top-cols">
    <div id="dialoguebox">
        <Dialogue 
          speaker="sea bunny"
          text={text}
          onNext={() => {getRandomDialogue()}}
        />
    </div>
    <div class="exhibit-img">
      <img src={realseabunny} alt=""/>
    </div>
  </div>
  <div id="bottom-cols">
    <div id="actions">
      <button onclick={() => getAnswer(1)}>
        feed
      </button>
      <button onclick={() => getAnswer(0)}>
        whats your name
      </button>
    </div>
    <div id="stats">

    </div>
  </div>
</main>


<style lang="scss">
  @use "../../lib/styles/globals";
  main {
    display: flex;
    flex-direction: column;
    width: 40vw; height: 100vh;
    justify-self: center;

    min-width: 320px;
    gap: calc(globals.$margin * 2.5);
    overflow: auto;
  }

  #hc {
    width: 100%; height: 20%;
  }

  #top-cols {
    display: flex;
    flex-direction: row;
    width: 100%; height: 20%;
    gap: calc(globals.$margin * 2.5);
  }

  #bottom-cols {
    width: 100%; height: 40%;
    margin-top: calc(globals.$margin * 2.5);
  }

  #dialoguebox {
    display: flex;
    flex-direction: row;
    margin: calc(globals.$margin * 2.5);
    height: 100%; width: 50%;
  }

  .exhibit-img {
    margin: calc(globals.$margin * 2.5);
    width: 50%; height: 100%;

    & img {
      width: 100%; height: 100%;
      object-fit: cover;
    }
  }
</style>