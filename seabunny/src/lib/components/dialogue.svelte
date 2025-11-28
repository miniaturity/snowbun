<script lang="ts">

  const SPEED = 60;

  let {
    speaker,
    text,
    onNext,
  }: {
    speaker: string,
    text: string,
    onNext: () => void,
  } = $props();

  let displayed = $state("");
  let index = 0;
  let interval: number | undefined;

  $effect.root(() => {
    $effect(() => {
      text;

      displayed = "";
      index = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        displayed += text[index];
        index++;

        if (index >= text.length) {
          clearInterval(interval);
        }
      }, SPEED);
    
      return () => clearInterval(interval);
    });
  });

</script>

<div class="dialogue-box">
  <div class="dialogue-title">
    <div class="dialogue-name">
      {speaker}
    </div>
  </div>
  <div class="dialogue-content">
    <div class="dialogue-text">
      {displayed}
    </div>
    <div class="dialogue-next">
      {#if displayed === text}
        <button onclick={onNext}>
          {">>"}
        </button>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  @use "../styles/globals";

  .dialogue-box {
    display: flex;
    width: 100%; height: 100%;
    flex-direction: column;
  }

  .dialogue-title {
    display: flex;
    flex-direction: row;
    width: 100%; height: fit-content;

    background: globals.$main;
    border: 1px solid globals.$main;
    color: #fff;

    padding: calc(globals.$margin * 2.5);
  }

  .dialogue-name {
    font-weight: bold;
    font-size: 1.7rem;
  }

  .dialogue-content {
    display: flex;
    flex-direction: column;
    width: 100%; height: 85%;
    justify-content: space-between;

    border: 1px solid globals.$main;

    padding: calc(globals.$margin * 2.5);

  }

  button {
    border: none; outline: none; background: none;
    color: globals.$main;

    &:hover, &:focus {
      cursor: pointer;
      font-size: 1.3rem;
    }
  }
</style>