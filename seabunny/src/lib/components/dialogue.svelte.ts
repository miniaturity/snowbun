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