<script lang="ts">
  export let btn: "small" | "medium" | "large";
  export let text: string = "";
  export let img: string = "";
  export let href: string;
  export let alt: string;
  export let className: string;
</script>

<a aria-label={alt} data-title={alt} href={href} class={className + " " + btn}>
  <div class="bg-wrapper">
    {#if text}
      <div class="btn-text">{text}</div>
    {/if}

    {#if img}
      <div class="btn-img">
        <img src={img} alt={alt}/>
      </div>
    {/if}
  </div>
</a>

<style>
.small { width: 100px; height: 100px; }
.medium { width: 200px; height: 100px; }
.large { width: 200px; height: 200px; }

a { 
  display: block; 
  all: unset; 

  &:hover {
    cursor: pointer;
  }
}

.btn-img {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}

img {
  object-fit: contain;
  width: auto; height: 100%;
}

.bg-wrapper {
  display: block;
  width: 100%; height: 100%;

  --blur: 2px;
  --white: rgba(255, 255, 255, 1);
  --blackBorder: rgba(0, 0, 0, 0.05);

  border: 0;
  backdrop-filter: blur(4px);
  box-shadow: 
    0 -1px var(--blur) 0 var(--white),
    0  1px var(--blur) 0 var(--white),
    1px 1px var(--blur) 0 var(--blackBorder),
   -1px 0  var(--blur) 0 var(--blackBorder),
    0 0 10px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.1);

  transition: all 0.3s ease-in-out;
}

.bg-wrapper:hover {
  backdrop-filter: none;
}
</style>
