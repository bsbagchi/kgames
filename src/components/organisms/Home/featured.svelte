<script lang="ts">

    // Import images for the teams (you can replace these imports with actual paths)
    import sec from '../../../public/home/Features/Team Logo (1).svg';
    import first from '../../../public/home/Features/Team Logo.svg';
    import md from '../../../public/home/Features/vs.svg';
    import Heading from '../../atoms/heading.svelte';

    // Mock dynamic data (JSON format)
    const jsonData = [
    {
      name: {first:"Borcelle",sec:"Rimbero"},
      odds: { first: 1.22, second: 1.72 },
      status: "Live",
      matchTime: "22 Dec 2024 (07:00 PM)",
      logo: '/path/to/team-logo-1.svg',  // Logo image path
    },
    {
      name: {first:"Borcelle",sec:"Rimbero"},
      odds: { first: 1.50, second: 2.10 },
      status: "Live",
      matchTime: "23 Dec 2024 (09:00 PM)",
      logo: '/path/to/team-logo-2.svg',  // Logo image path
    },
    {
      name:{first:"Borcelle",sec:"Rimbero"},
      odds: { first: 1.35, second: 2.00 },
      status: "Live",
      matchTime: "24 Dec 2024 (10:00 PM)",
      logo: '/path/to/team-logo-3.svg',
    },
    {
      name:{first:"Borcelle",sec:"Rimbero"},
      odds: { first: 1.50, second: 1.95 },
      status: "Live",
      matchTime: "25 Dec 2024 (06:00 PM)",
      logo: '/path/to/team-logo-4.svg',
    },
    {
      name:{first:"Borcelle",sec:"Rimbero"},
      odds: { first: 1.60, second: 2.40 },
      status: "Live",
      matchTime: "26 Dec 2024 (08:00 PM)",
      logo: '/path/to/team-logo-5.svg',
    },
    {
      name: {first:"Borcelle",sec:"Rimbero"},
      odds: { first: 1.40, second: 1.85 },
      status: "Live",
      matchTime: "27 Dec 2024 (07:30 PM)",
      logo: '/path/to/team-logo-6.svg',
    },
    {
      name: {first:"Borcelle",sec:"Rimbero"},
      odds: { first: 1.75, second: 2.30 },
      status: "Live",
      matchTime: "28 Dec 2024 (09:15 PM)",
      logo: '/path/to/team-logo-7.svg',
    }
  ];

  
  </script>

  <Heading text='Featured Matches'/>
  <div class="px-[5%] overflow-hidden">
  <div class="overflow-x-scroll  scrollbar-hidden snap-x ">
  <div class=" flex  w-fit gap-2 md:gap-3  py-3">
    {#each jsonData as team}
      <div style="box-shadow: 0px 0px 12px 0px #7D6091 inset" class="max-sm:w-[90vw] w-[43.5vw] lg:w-[330px]  p-5 lg:p-7 snap-start rounded-lg shadow-box shadow-gray-300  border border-[#4D4D4D] overflow-hidden">
        <div class="  ">
          <!-- Odds for the first and second columns -->
           <div class="flex justify-between">
          <div class="flex items-center justify-center bg-gray-300 dark:bg-[--Secondary] rounded w-14 text-center h-10">{team.odds.first}</div>
          <div class="flex items-center justify-center bg-[--Accent] shadow-inner shadow-red-700 rounded-lg w-16 text-center h-10">
            <div class="flex justify-center items-center">
              <div class="h-1 w-1   rounded-full bg-white"></div>
              <h1 class="text-white px-1">{team.status}</h1>
            </div>
          </div>
          <div class="flex items-center justify-center bg-gray-300 dark:bg-[--Secondary] rounded w-14 text-center h-10">{team.odds.second}</div>
        </div>
          <!-- First Team (Borcelle) -->
           <div class="flex w-full justify-between pt-6">
          <div class="flex flex-col justify-center">
            <img class="w-12 mx-auto" 
                 src={first} 
                 alt="Borcelle logo" 
                 loading="lazy" 
                 decoding="async" 
                 style="object-fit: cover;" />
            <h1 class="text-lg flex justify-center font-semibold ">{team.name.first}</h1>
          </div>
  
          <!-- Empty div (important) -->
          <div class=" flex justify-center">
            <img class="h-20 " 
            src={md} 
            alt="Borcelle logo" 
            loading="lazy" 
            decoding="async" 
            style="object-fit: cover;" />
          </div>
  
          <!-- Second Team (Rimbero) -->
          <div class="bg-transparent flex flex-col justify-center">
            <img class="w-12 mx-auto" 
                 src={sec} 
                 alt="Rimbero logo" 
                 loading="lazy" 
                 decoding="async" 
                 style="object-fit: cover;" />
            <h1 class="text-lg flex justify-center font-semibold ">{team.name.sec}</h1>
          </div>
        </div>
      </div>
        <!-- Match Time -->
        <div class=" text-center flex justify-center items-center bg-transparent  pt-4">
          <p class="px-3 py-2  flex items-center justify-center  text-lg bg-gray-300 dark:bg-[--Primary-Light] rounded">
            {team.matchTime}
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>
</div>