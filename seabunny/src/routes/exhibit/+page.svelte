<script lang="ts">
	import Breadcrumbs from "$lib/components/breadcrumbs.svelte";
  import Header from "$lib/components/header.svelte";

  const dialogues = [
    "it sure is nice off the coast of indonesia! the algae is yummy",
    "mmm im hungry lemme get sum toxic sponge",
    "hi im sea bunny"
  ];

  let completedDialogue = $state("");
  let dialogue = $state<{ title: string, text: string, img: string }>({
    title: "sea bunny",
    text: dialogues[1],
    img: "",
  });

  

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
      <div id="d-title">
        <div>

        </div>
      </div>
      <div id="dialogue">
        {dialogue.text}
      </div>
    </div>
  </div>
</main>


<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    width: 40vw; height: 100vh;
    justify-self: center;

    min-width: 400px;
  }

  #hc {
    width: 100%; height: 20%;
  }
</style>