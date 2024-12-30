<script lang="ts">
    import graytv from '../../public/icons/light tv.svg';
    import redtv from '../../public/icons/red tv.svg';
    import pinned from '../../public/icons/pinblack.svg';
    import redpinned from '../../public/icons/pinred.svg';

    export let data: any;

    // Define keys for accessing odds explicitly
    const oddsKeys = ['one', 'x', 'two'] as const;
</script>

<div>
    {#each data as list}
        <div class="lg:flex gap-2 pb-2">
            <!-- Match Info Section -->
            <div class="lg:w-1/2 h-12   flex items-center overflow-hidden">
                <div class="flex justify-between bg-gray-300 dark:bg-[--Primary-Light] w-full h-full rounded px-2 gap-2 items-center">
                    <div class="max-sm:w-[58vw]">
                        <div class="flex  items-center">
                            <h1 class="dark:text-[--Accent-Alt]   truncate  md:text-lg">{list.match}</h1>
                            {#if list.status === "new"}
                                <span class="ml-2 px-1 text-xs  bg-red-500 border border-red-400 rounded">New</span>
                            {/if}
                        </div>
                        <p class=" w-full   truncate text-xs">{list.date} || {list.tournament}</p>
                    </div>
                    
                    <div class="flex items-center gap-1 md:gap-2">
                        {#if list.status === "live"}
                        <div class="text-[9px]  flex items-center  h-5 md:text-xs  bg-green-500 rounded px-1 md:px-2 md:py-1 shadow-green-400">Live</div>
                    {/if}
                        <img class="h-5 md:h-6 " src={list.tv ? redtv : graytv} alt="TV Icon" />
                        <img class="h-5 md:h-6 " src={list.pinned ? redpinned : pinned} alt="Pin Icon" />
                    </div>
                </div>
            </div>

            <!-- Odds Section -->
            <div class="lg:w-1/2 text-black md:text-lg max-lg:mt-1 h-10 md:h-12  grid grid-cols-6 gap-1">
                {#each oddsKeys as key}
                    <div class="text-center bg-[--blue] hover:bg-[--blue-hover] md:font-semibold  rounded flex items-center justify-center">
                        {list.odds[key]?.first}
                    </div>
                    <div class="text-center bg-[--pink] hover:bg-[--pink-hover]  md:font-semibold  rounded flex items-center justify-center">
                        {list.odds[key]?.sec}
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>
