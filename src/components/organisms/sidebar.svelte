<script lang="ts">
    import { slide, fade } from 'svelte/transition';
    import uparrow from '../../public/icons/arrowgray.svg';
    import { isSidebarOpen } from '$lib/Store/store';
    const menu=[{image:'/src//public/home/menu/fire-svgrepo-com.svg',lable:'In Play'}, {image:'/src//public/home/menu/multimarket.svg',lable:'Multi market'}, {image:'/src//public/home/menu/cricket.svg',lable:'Cricket'}, {image:'/src//public/home/menu/soccer.svg',lable:'Soccer'}, {image:'/src//public/home/menu/tennies.svg',lable:'Tennis'}];
    const submenu=[{image:'/src//public/home/menu/Aviator Icon.svg',lable:'Aviator'},{image:'/src//public/home/menu/aura.svg',lable:'Aura'},{image:'/src//public/home/menu/blast rocket.svg',lable:'Blast'},{image:'/src//public/home/menu/india.svg',lable:'Indian Pocker'},{image:'/src//public/home/menu/blast rocket.svg',lable:'AE SEXY'},{image:'/src//public/home/menu/india.svg',lable:'Indian Pocker 2'}];
</script>

{#if $isSidebarOpen}
<div class="h-screen w-screen overflow-hidden flex z-40 top-0 fixed" transition:fade={{duration: 300}}>
    <div class="w-full h-full  transition-opacity duration-300"></div>
    <div class="w-[230px] text-white md:w-[270px] md:px-3 overflow-y-auto scrollbar-hidden bg-[--primary] border-r border-r-[--Border]  absolute z-50 space-y-2 top-0 p-2 h-screen" transition:slide={{duration: 300, axis: 'x'}}>
        <div class="   rounded flex items-center justify-between px-3 h-14 w-full">
            <h1 class="text-2xl  py-1">Logo</h1>
            <button on:click={() => $isSidebarOpen = !$isSidebarOpen} class=" text-2xl font-thin transition-transform duration-300 hover:scale-110">X</button>
        </div>

        <div class="h-10 md:h-12 flex justify-between">
            <input class="bg-[--Primary-Light]  border rounded px-2 w-40 md:w-44 transition-all duration-300 focus:ring-2 focus:ring-white" placeholder="🔍 Search..." type="search" />
            <div class="bg-white w-12 md:w-14 rounded font-semibold text-[--Primary-Light] flex items-center justify-center  transition-all duration-300 hover:bg-gray-200">
                <img class="rotate-180 transition-transform duration-300" src={uparrow} alt='downarrow' /> 
                <h1 class="px-[3px] text-xl">All</h1>
            </div>
        </div>
        {#each menu as items, i}
        <div style="box-shadow: 0px 0px 12px 0px #706C93 inset;" class="h-9 md:h-12 rounded bg-[--Primary-Light] px-3 border border-[--Secondary] flex items-center  transition-all duration-300 hover:bg-opacity-80" 
             transition:slide={{delay: i * 50, duration: 300}}>
            <img src={ items.image} alt={items.lable} class="md:h-7 transition-transform duration-300 hover:scale-110">
            <h1 class=" md:text-xl px-2">{items.lable}</h1>
        </div>
        {/each}
        <div style="box-shadow: 0px 0px 12px 0px #706C93 inset;" class="p-3 bg-[--Secondary] rounded">
        <div  class="space-y-2 ">
            <div class="flex">
                <img src={'/src//public/home/menu/india.svg'} alt='' class="md:h-8 transition-transform duration-300 hover:scale-110">
             <h1 class=" md:text-xl  px-2">Casino Live</h1>
            </div>
        {#each submenu as items,i}
        <div  class="h-8 md:h-12 text-sm rounded bg-[--primary] px-3 border border-[--Secondary] flex items-center  transition-all duration-300 hover:bg-opacity-80" 
             transition:slide={{delay: i * 50, duration: 300}}>
             <img src={items.image} alt={items.lable} class="md:h-7 transition-transform duration-300 hover:scale-110">
             <h1 class=" md:text-xl px-2">{items.lable}</h1>
            </div>
        {/each}
    </div>
</div>
    </div>
    <button on:click={() => $isSidebarOpen = !$isSidebarOpen} aria-label="close button" class="w-full left-[240px] h-screen absolute z-50"></button>
</div>
{/if}