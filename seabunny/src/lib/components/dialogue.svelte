<script lang="ts">
  const SPEED = 30;

  let {
    speaker,
    text,
    avatar,
    onNext,
  }: {
    speaker: string,
    text: string,
    avatar?: string,
    onNext: () => void,
  } = $props();

  let displayed = $state("");
  let index = $state(0);
  let interval: number | undefined = $state(undefined);

  $effect(() => {
    if (text) {
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
    }
  });

</script>

<div class="dialogue-box">
  <div class="dialogue-title">
    {#if avatar}
      <img src={avatar} alt=""/>
    {/if}

    <div class="dialogue-name">
      {speaker}
    </div>
  </div>
  <div class="dialogue-content">
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

<style lang="scss">

</style>