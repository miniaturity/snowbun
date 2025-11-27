<script lang="ts">
  import { onMount } from "svelte";

  let pathname = '';

  onMount(() => {
    pathname = window.location.pathname;
  });

  const segments = pathname
    .split("/")
    .filter(Boolean);

  const breadcrumbs = segments.map((seg, i) => ({
    name: seg,
    href: "/" + segments.slice(0, i + 1).join("/")
  }));
</script>

<div class="breadcrumbs-container">
  <div class="breadcrumbs">
    <div>..&nbsp;</div>
    <div class="divider">/&nbsp;</div>
    <a href="/">dir</a>
    {#if breadcrumbs.length > 0}
        {#each breadcrumbs as bc, i}
          <div class="divider">&nbsp;/&nbsp;</div>
          <a class="bc-item" href={bc.href} id={i.toString()}>{bc.name}</a>
        {/each}
    {/if}
  </div>
  <div>
    ...seabunny
  </div>
</div>

<style lang="scss">

.breadcrumbs-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 5%;

  
  & div {
    font-size: 1.4rem;
    height: fit-content;
  }
}

.breadcrumbs {
  display: flex;
  flex-direction: row;
}

</style>