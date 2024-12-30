<script lang="ts">
    import { slide } from 'svelte/transition';
    import Heading from "../../atoms/heading.svelte";
    import one from '../../../public/home/menu/cricket.svg';
    import three from '../../../public/home/menu/soccer.svg';
    import four from '../../../public/home/menu/tennies.svg';
    import five from '../../../public/home/menu/india.svg';
    import { match } from "$lib/data";
    import Betscreen from "../../molecules/betscreen.svelte";
    import arrowgray from '../../../public/icons/arrowgray.svg';
    import arrowred from '../../../public/icons/arrowred.svg';

    let open: string = 'cricket';
</script>

<Heading text="Live Sports" />

<div class="px-[5%] overflow-hidden">
    <!-- short menu of live sports -->
    <div  class="overflow-x-scroll scrollbar-hidden py-5">
        <div class="flex gap-2 w-fit">
            <div class="border-[1px] border-[--Accent] flex flex-shrink-0 shadow-red gap-1 p-2 rounded w-fit text-center transition-all duration-300 hover:scale-105">
                <img class="bg-transparent h-6" src={one} alt="In Play" loading="lazy" decoding="async" style="object-fit: cover;" />
                <h1 class="text-[--Accent] whitespace-nowrap bg-transparent">In Play</h1>
            </div>

            <div class="border-[1px] border-blue-500 flex flex-shrink-0 shadow-blue gap-1 p-2 rounded w-fit text-center transition-all duration-300 hover:scale-105">
                <img class="bg-transparent h-6" src={one} alt="Cricket" loading="lazy" decoding="async" style="object-fit: cover;" />
                <h1 class=" bg-transparent">Cricket</h1>
            </div>
            <div class="border-[1px] border-[--Border-Light] flex flex-shrink-0 gap-1 p-2 rounded w-fit text-center transition-all duration-300 hover:scale-105">
                <img class="bg-transparent h-6" src={three} alt="Soccer" loading="lazy" decoding="async" style="object-fit: cover;" />
                <h1 class=" bg-transparent">Soccer</h1>
            </div>
            <div class="border-[1px] border-[--Border-Light] flex flex-shrink-0 gap-1 p-2 rounded w-fit text-center transition-all duration-300 hover:scale-105">
                <img class="bg-transparent h-6" src={four} alt="Tennis" loading="lazy" decoding="async" style="object-fit: cover;" />
                <h1 class=" bg-transparent">Tennis</h1>
            </div>
            <div class="border-[1px] border-[--Border-Light] flex flex-shrink-0 gap-1 p-2 rounded w-fit text-center transition-all duration-300 hover:scale-105">
                <img class="bg-transparent h-6" src={five} alt="Live Casino" loading="lazy" decoding="async" style="object-fit: cover;" />
                <h1 class="whitespace-nowrap  bg-transparent">Live Casino</h1>
            </div>
        </div>
    </div>

    <!-- Cricket Section -->
    <div class="pb-5" transition:slide={{duration: 300}}>
        <div style="box-shadow: 0px 0px 12px 0px #706C93 inset;" class=" p-2 relative md:p-3 rounded-lg border transition-all ease-linear duration-300 shadow-gray border-[--Border-Light]">
            <button  on:click={() => open = open !== 'cricket' ? 'cricket' : ''} class="flex w-full rounded-lg">
                <div class="lg:w-1/2">
                    <div class="h-10 md:h-12 flex items-center overflow-hidden">
                        <img class="h-2/3" src={one} alt="Cricket" loading="lazy" decoding="async" style="object-fit: cover;" />
                        <h1 class="text-xl md:text-3xl  px-2">Cricket</h1>
                    </div>
                </div>
                <div class="lg:w-1/2 max-lg:hidden">
                    {#if open === 'cricket'}
                        <div transition:slide={{duration: 300}} class="h-12 items-center grid grid-cols-3 justify-between ">
                            <div class="text-center text-[--Accent-Alt] text-lg md:text-xl">1</div>
                            <div class="text-center text-[--Accent-Alt] text-lg md:text-xl">X</div>
                            <div class="text-center text-[--Accent-Alt] text-lg md:text-xl">2</div>
                        </div>
                    {/if}
                </div>
            </button>
            <!-- icons -->
            <div class="absolute right-6 top-6 md:top-8 transition-transform duration-300" class:rotate-180={open === 'cricket'}>
                <img class:animate-bounce={open !== 'cricket'} src={open !== 'cricket' ? arrowred : arrowgray} alt="" loading="lazy" decoding="async">
            </div>
            {#if open === 'cricket'}
                <div transition:slide={{duration: 300}} class="pt-3">
                    <!-- boxes -->
                    <Betscreen data={match.Cricket}/>
                    <!-- boxes end over here -->
                </div>
            {/if}
        </div>
    </div>

    <!-- Tennis Section -->
    <div  class="pb-5" transition:slide={{duration: 300}}>
        <div style="box-shadow: 0px 0px 12px 0px #706C93 inset;" class="p-2 relative md:p-3 rounded-lg border shadow-gray border-[--Border-Light]">
            <button on:click={() => open = open !== 'tennis' ? 'tennis' : ''} class="flex w-full rounded-lg">
                <div class="lg:w-1/2">
                    <div class="h-10 md:h-12 flex items-center overflow-hidden">
                        <img class="h-2/3" src={four} alt="Tennis" loading="lazy" decoding="async" style="object-fit: cover;" />
                        <h1 class="text-xl md:text-3xl  px-2">Tennis</h1>
                    </div>
                </div>
                <div class="lg:w-1/2 max-lg:hidden">
                    {#if open === 'tennis'}
                        <div transition:slide={{duration: 300}} class="h-12 items-center grid grid-cols-3 justify-between ">
                            <div class="text-center text-[--Accent-Alt] text-lg md:text-xl">1</div>
                            <div class="text-center text-[--Accent-Alt] text-lg md:text-xl">X</div>
                            <div class="text-center text-[--Accent-Alt] text-lg md:text-xl">2</div>
                        </div>
                    {/if}
                </div>
            </button>
            <!-- icons -->
            <div class="absolute right-6 top-6 md:top-8 transition-transform duration-300" class:rotate-180={open === 'tennis'}>
                <img class:animate-bounce={open !== 'tennis'} src={open !== 'tennis' ? arrowred : arrowgray} alt="" loading="lazy" decoding="async">
            </div>
            {#if open === 'tennis'}
                <div transition:slide={{duration: 300}} class="pt-3">
                    <!-- boxes -->
                    <Betscreen data={match.Cricket}/>
                    <!-- boxes end over here -->
                </div>
            {/if}
        </div>
    </div>

    <!-- Soccer Section -->
    <div class="pb-5" transition:slide={{duration: 300}}>
        <div style="box-shadow: 0px 0px 12px 0px #706C93 inset;" class="p-2 relative md:p-3 rounded-lg border shadow-gray border-[--Border-Light]">
            <button on:click={() => open = open !== 'soccer' ? 'soccer' : ''} class="flex w-full rounded-lg">
                <div class="lg:w-1/2">
                    <div class="h-10 md:h-12 flex items-center overflow-hidden">
                        <img class="h-2/3" src={three} alt="Soccer" loading="lazy" decoding="async" style="object-fit: cover;" />
                        <h1 class="text-xl md:text-3xl  px-2">Soccer</h1>
                    </div>
                </div>
                <div class="lg:w-1/2 max-lg:hidden">
                    {#if open === 'soccer'}
                        <div transition:slide={{duration: 300}} class="h-12 items-center grid grid-cols-3 justify-between ">
                            <div class="text-center text-[--Accent-Alt] text-lg md:text-xl">1</div>
                            <div class="text-center text-[--Accent-Alt] text-lg md:text-xl">X</div>
                            <div class="text-center text-[--Accent-Alt] text-lg md:text-xl">2</div>
                        </div>
                    {/if}
                </div>
            </button>
            <!-- icons -->
            <div class="absolute right-6 top-6 md:top-8 transition-transform duration-300" class:rotate-180={open === 'soccer'}>
                <img class:animate-bounce={open !== 'soccer'} src={open !== 'soccer' ? arrowred : arrowgray} alt="" loading="lazy" decoding="async">
            </div>
            {#if open === 'soccer'}
                <div transition:slide={{duration: 300}} class="pt-3">
                    <!-- boxes -->
                    <Betscreen data={match.Cricket}/>
                    <!-- boxes end over here -->
                </div>
            {/if}
        </div>
    </div>
</div>