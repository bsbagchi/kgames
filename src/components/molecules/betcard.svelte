<script lang="ts">
    import { onMount } from 'svelte';
  
    // Define the betcards data (with paths relative to `src/assets`)
    export let betcardsData: { image: string; text: string }[] = [];
  
    let betcards: { loadedImage: string | null, text: string }[] = [];
  
    // Import images statically based on the `betcardsData`
    onMount(() => {
      betcards = betcardsData.map((card) => {
        try {
          // Construct the full image path using the BASE_URL
          const loadedImage = card.image;
          return {
            loadedImage, // We only need the loadedImage
            text: card.text // We also need to keep the text for player count
          };
        } catch (error) {
          console.error('Error loading image:', error);
          return { loadedImage: null, text: card.text }; // Fallback in case of error
        }
      });
    });
  </script>
  
  <div class="overflow-x-scroll snap-x scrollbar-hidden pb-3">
    <div class="flex gap-2  w-fit">
      {#each betcards as { loadedImage, text }, index}
        {#if loadedImage}
        <div class="snap-start" id={`betcard-${index}`}>
          <div  class="rounded-md overflow-hidden relative w-[27.5vw] md:w-[11.6vw] lg:w-[10.5vw]">
            <div class="bg-red-600  w-12 rounded flex absolute top-8 right-2 items-center">
              <div class="h-1 w-1 mx-1 bg-white rounded-full"></div>
              <h1>Live</h1>
            </div>
            <img class="w-full h-full" loading="lazy" decoding="async" src={loadedImage} alt={`Bet Card ${index + 1}`} />

          </div>
          <div class="flex py-1 items-center justify-center ">
            <div class="w-1 h-1 rounded-full mx-1 bg-green-500"></div>
            <h1 class="max-sm:text-xs ">{text}</h1> <!-- Display player count -->
          </div>
        </div>
        {/if}
        
      {/each}
    </div>
  </div>
  