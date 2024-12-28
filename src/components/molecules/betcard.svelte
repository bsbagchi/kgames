<script lang="ts">

  
    // Define the betcards data (with paths relative to `src/assets`)
    export let betcardsData: { image: string; text: string }[] = [];
  
    let betcards: { loadedImage: string | null, text: string }[] = [];
  
    
  </script>
  
  <div class="overflow-x-scroll snap-x scrollbar-hidden pb-3">
    <div class="flex gap-2  w-fit">
      {#each betcardsData as { image, text }, index}
        {#if image}
        <div class="snap-start" id={`betcard-${index}`}>
          <div  class="rounded-md overflow-hidden relative w-[27.5vw] md:w-[11.6vw] lg:w-[10.5vw]">
            <div class="bg-red-600  w-12 rounded flex absolute top-8 right-2 items-center">
              <div class="h-1 w-1 mx-1 bg-white rounded-full"></div>
              <h1>Live</h1>
            </div>
            
            <img class="w-full h-full" loading="lazy" decoding="async" src={image} alt={`Bet Card ${index + 1}`} />

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
  