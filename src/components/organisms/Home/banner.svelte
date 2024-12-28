<script>
    import one from '../../../public/home/banner/img1.jpeg'
    import two from '../../../public/home/banner/img2.jpeg';
    import three from '../../../public/home/banner/img3.jpeg';
  import Heading from "../../atoms/heading.svelte";
  const imglink=[one,two,three];
</script>


    <Heading text='Treading Games'/>
    <div class="px-[5%] overflow-hidden">
    <div class="overflow-x-scroll snap-x scrollbar-hidden">
    <div class="flex gap-3 w-fit py-3 ">
        {#each imglink as path }
        <div class="rounded-lg snap-center  md:snap-start h-[200px] md:h-[230px]  w-[87.4vw] md:w-[43.5vw] lg:w-[29vw] border-t-4 border-l-[1px] border-r-[1px] border-red-600   shadow-xl hover:shadow-blue-500 overflow-hidden">
            <img class="h-full w-full"
        src={path}
        alt="Descriptive text here"
        loading="lazy"
        decoding="async"
        style=" "
        />
        
    </div>
        {/each}

    </div>
</div>
</div>
