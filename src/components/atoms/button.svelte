<script lang="ts">
  import img3 from '../../public/icons/arrowred.svg';
  // Define types for the props
  export let text: string = 'English'; // Dynamic text
  export let color: string = '--Primary-Light'; // Dynamic background color
  export let image1: string = ''; // Image source
  export let msg: string = ''; // Optional message

  // Define the handler function type
  export let handel: () => void = () => {};
</script>

<!-- Button Element -->
<button 
  on:click={handel} 
  style={text === 'Casino Games' 
    ? `background-color: var(${color}); box-shadow: 0px 1px 17px 0px #9747FF inset` 
    : `background-color: var(${color})`} 
  class="px-2 max-sm:text-sm md:px-5 shrink-0 h-9 md:h-10 w-fit rounded-lg border-[--Border] flex items-center justify-center whitespace-nowrap"
>
  <!-- Optional Image -->
  <img class="h-6" src={import.meta.env.BASE_URL + image1} alt="" />

  <!-- Button Text -->
  <span class="bg-transparent text-white px-2">{text}</span>

  <!-- Conditional Message -->
  {#if msg}
    <span class="w-fit px-[2px] rounded py-[1px] text-xs bg-yellow-300 text-black">{msg}</span>
  {/if}
  {#if text==='Casino Games'}
    <img class="-rotate-90" src={img3} alt="">
  {/if}
</button>
