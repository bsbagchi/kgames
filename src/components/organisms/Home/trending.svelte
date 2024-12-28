<script lang="ts">
    import { onMount } from 'svelte';
    import Heading from "../../atoms/heading.svelte";
  import Betcard from '../../molecules/betcard.svelte';
  import Subheading from '../../atoms/subheading.svelte';
  import play from '../../../public/home/menu/play.svg';
  import diamond from '../../../public/icons/diamond.svg';
  import topcards from  '../../../public/icons/topcards.svg';
  import topcasino from '../../../public/icons/topcasino.svg';
  import graytv from '../../../public/icons/gray tv.svg';
  // betcards
  import betcard1 from '../../../public/home/Bet Cards/betcard1.jpg';
  import betcard2 from '../../../public/home/Bet Cards/betcard2.jpg';
  import betcard3 from '../../../public/home/Bet Cards/betcard3.jpg';
  import betcard4 from '../../../public/home/Bet Cards/betcard4.jpg';
  import betcard5 from '../../../public/home/Bet Cards/betcard5.jpg';
  import betcard6 from '../../../public/home/Bet Cards/betcard6.jpg';
  import betcard7 from '../../../public/home/Bet Cards/betcard7.jpg';
  import betcard8 from '../../../public/home/Bet Cards/betcard8.jpg';
  import betcard9 from '../../../public/home/Bet Cards/betcard9.jpg';
  import betcard10 from '../../../public/home/Bet Cards/betcard10.jpg';
  import betcard11 from '../../../public/home/Bet Cards/betcard11.jpg';
  import betcard12 from '../../../public/home/Bet Cards/betcard12.jpg';
  import betcard13 from '../../../public/home/Bet Cards/betcard13.jpg';
  import betcard14 from '../../../public/home/Bet Cards/betcard14.jpg';
  // gamming cards
  import gamming1 from '../../../public/home/Game Cards/game1.jpg';
  import gamming2 from '../../../public/home/Game Cards/game2.jpg';
  import gamming3 from '../../../public/home/Game Cards/game3.jpg';
  import gamming4 from '../../../public/home/Game Cards/game4.jpg';
  import gamming5 from '../../../public/home/Game Cards/game5.jpg';
  import gamming6 from '../../../public/home/Game Cards/game6.jpg';
  import gamming7 from '../../../public/home/Game Cards/game7.jpg';
  import gamming8 from '../../../public/home/Game Cards/game8.jpg';
  import gamming9 from '../../../public/home/Game Cards/game9.jpg';
  import gamming10 from '../../../public/home/Game Cards/game10.jpg';
  import gamming11 from '../../../public/home/Game Cards/game11.jpg';
  import gamming12 from '../../../public/home/Game Cards/game11.jpg';
  import gamming13 from '../../../public/home/Game Cards/game11.jpg';
    // Create an array of objects to store the icon names and their respective labels
    let items = [
      { name: "Lobby", icon: "lobby" },
      { name: "Stake Originals", icon: "soccer" },
      { name: "Slots", icon: "slots" },
      { name: "Live Casino", icon: "india" }
    ];

    const betcardsData = [
      { "image": betcard1, "text": "60 players" },
      { "image": betcard2, "text": "45 players" },
      { "image": betcard3, "text": "75 players" },
      { "image": betcard4, "text": "30 players" },
      { "image": betcard5, "text": "50 players" },
      { "image": betcard6, "text": "85 players" },
      { "image": betcard7, "text": "40 players" },
      { "image": betcard8, "text": "60 players" },
      { "image": betcard9, "text": "95 players" },
      { "image": betcard10, "text": "70 players" },
      { "image": betcard11, "text": "90 players" },
      { "image": betcard12, "text": "65 players" },
      { "image": betcard13, "text": "80 players" },
      { "image": betcard14, "text": "55 players" }
    ];
   
    // gaming
    const gammingcard = [
      { "image": gamming1, "text": "60 players" },
      { "image": gamming2, "text": "45 players" },
      { "image": gamming3, "text": "75 players" },
      { "image": gamming4, "text": "30 players" },
      { "image": gamming5, "text": "50 players" },
      { "image": gamming6, "text": "85 players" },
      { "image": gamming7, "text": "40 players" },
      { "image": gamming8, "text": "60 players" },
      { "image": gamming9, "text": "95 players" },
      { "image": gamming10, "text": "70 players" },
      { "image": gamming11, "text": "90 players" },
      { "image": gamming12, "text": "65 players" },
      { "image": gamming13, "text": "80 players" }
    ];
    // Object to hold dynamically imported image paths
    let images: { [key: string]: string } = {};
  
    // Function to dynamically import images based on the name
    const loadImages = async () => {
      for (const item of items) {
        try {
          // Dynamically import the image based on the icon name
          const image = await import(`../../../public/icons/${item.icon}.svg`);
          images[item.icon] = image.default;  // Store the image path in the images object
        } catch (error) {
          console.error(`Error loading image for ${item.icon}:`, error);
        }
      }
    };
  
    // Call the loadImages function on component mount
    onMount(() => {
      loadImages();
    });
  </script>
  
  <Heading text={"Trending Now"} />
  
  <div class="px-[5%] overflow-hidden">
    <div class="overflow-x-scroll scrollbar-hidden  py-5">
      <div class="flex gap-2 w-fit">
        {#each items as { name, icon }, index}
          <div class={`flex flex-shrink-0 items-center gap-1 p-2 rounded w-fit text-center 
            ${index === 0 ? 'border-[1px] border-purple-500 shadow-purple' : 'border-[1px] border-[--Border-Light]'}`}>
            {#if images[icon]}
              <img class="bg-transparent h-5" src={images[icon]} alt={`${name} Icon`} loading="lazy" decoding="async" style="object-fit: cover;" />
            {/if}
            <h1 class=" bg-transparent">{name}</h1>
          </div>
        {/each}
      </div>
    </div>


    <div>

    </div>
<div class="px-1 md:px-3">
    <Betcard betcardsData={betcardsData}/>
  </div>
  </div>
  
<!-- continue Playing -->
  <div class="px-[5%] pb-2">
    <div class="border bg-gray-200 dark:bg-[--primary] rounded-lg px-2 md:px-[1%] border-[--Border-Light]">
        <div >
            <div class="flex justify-between py-2">
            <div class="flex "><img src={play} alt=""> <div class="px-1"><Subheading  text={'Continue Playing'}/></div></div>
            <button><h1 class=" underline">All</h1></button>
        </div>
      
      <Betcard betcardsData={gammingcard}/>
    </div> 
    </div>
  </div>


  <!-- Top Casino Games -->

  <div class="px-[5%] pb-2">
    <div class="border bg-gray-200 dark:bg-[--primary] rounded-lg px-2 max-sm:px-2 md:px-[1%] border-[--Border-Light]">
        <div >
            <div class="flex justify-between py-2">
            <div class="flex "><img src={diamond} alt=""> <div class="px-1"><Subheading  text={'Top Casino Games'}/></div></div>
            <button><h1 class=" underline">All</h1></button>
        </div>
      <Betcard betcardsData={gammingcard}/>
    </div> 
    </div>
  </div>


  
  <!-- Top Cards -->

  <div class="px-[5%] pb-2">
    <div class="border bg-gray-200 dark:bg-[--primary] rounded-lg px-2 md:px-[1%] border-[--Border-Light]">
        <div >
            <div class="flex justify-between py-2">
            <div class="flex "><img src={topcards} alt=""> <div class="px-1"><Subheading  text={'Top Card Games'}/></div></div>
            <button><h1 class=" underline">All</h1></button>
        </div>
      <Betcard betcardsData={gammingcard}/>
    </div> 
    </div>
  </div>



  
  <!-- Top Casino games -->

  <div class="px-[5%] pb-2">
    <div class="border bg-gray-200 dark:bg-[--primary] rounded-lg px-2 md:px-[1%] border-[--Border-Light]">
        <div >
            <div class="flex justify-between py-2">
            <div class="flex "><img src={topcasino} alt=""> <div class="px-1"><Subheading  text={'Top Casino Games'}/></div></div>
            <button><h1 class=" underline">All</h1></button>
        </div>
      <Betcard betcardsData={betcardsData}/>
    </div> 
    </div>
  </div>


  
  <!-- Top Tv Shows-->

  <div class="px-[5%] pb-2">
    <div class="border bg-gray-200 dark:bg-[--primary] rounded-lg px-2 md:px-[1%] border-[--Border-Light]">
      <div >
        <div class="flex justify-between py-2">
        <div class="flex "><img src={graytv} alt=""> <div class="px-1"><Subheading  text={'Top TV Shows'}/></div></div>
        <button><h1 class=" underline">All</h1></button>
    </div>
      
      <Betcard betcardsData={betcardsData}/>
    </div> 
    </div>
  </div>