  <script lang="ts">
      import Account from "../../components/organisms/reports/account.svelte";
      import Bethistory from "../../components/organisms/reports/bethistory.svelte";
      import Unsettle from "../../components/organisms/reports/unsettle.svelte";
      import { theme } from "$lib/Store/darktheme";
    
      let tab: number = -1;
    
      // Variables for date range filter
      let startDate: string = '';
      let endDate: string = '';
    
      // Function to handle the date filter
      function applyFilter(): void {
        console.log(`Filtering from ${startDate} to ${endDate}`);
        // Add logic to filter reports based on date range
      }
    
      // Reactive variable for current theme
      let currentTheme: string;
      $: currentTheme = $theme;
    </script>
    
    <div class="flex -mt-3">
      <div class="min-h-screen w-full">
        <div class="px-2">
          <h1 class="text-4xl font-semibold p-2">Reports</h1>
    
          <!-- Tabs -->
          <div class="flex text-white gap-2 mb-4">
            <button
              aria-label="tab"
              on:click={() => (tab = 0)}
              class="border h-8 w-fit px-2 font-semibold rounded hover:bg-red-600 bg-red-500 text-center"
            >
              Bet History
            </button>
            <button
              aria-label="tab"
              on:click={() => (tab = 1)}
              class="border h-8 w-fit px-2 font-semibold rounded hover:bg-red-600 bg-red-500 text-center"
            >
              Unsettle History
            </button>
            <button
              aria-label="tab"
              on:click={() => (tab = 2)}
              class="border h-8 w-fit px-2 font-semibold rounded hover:bg-red-600 bg-red-500 text-center"
            >
              Account History
            </button>
          </div>
    
          <!-- Date Range Filter -->
          <div class="flex items-center gap-4 mb-4">
            <div class="flex flex-col">
              <label for="start-date" class="text-sm font-medium dark:text-gray-200">Start Date</label>
              <input
                id="start-date"
                type="date"
                bind:value={startDate}
                style={currentTheme === 'dark' ? 'color-scheme: dark; appearance: none; background-color: #1f2937; color: #ef4444; border: 1px solid #4b5563; border-radius: 0.25rem; padding: 0.5rem;' : 'border: 1px solid #4b5563; border-radius: 0.25rem; padding: 0.5rem;'}
                class="w-full"
              />
            </div>
            <div class="flex flex-col">
              <label for="end-date" class="text-sm font-medium dark:text-gray-200">End Date</label>
              <input
                id="end-date"
                type="date"
                bind:value={endDate}
                style={currentTheme === 'dark' ? 'color-scheme: dark; appearance: none; background-color: #1f2937; color: #ef4444; border: 1px solid #4b5563; border-radius: 0.25rem; padding: 0.5rem;' : 'border: 1px solid #4b5563; border-radius: 0.25rem; padding: 0.5rem;'}
                class="w-full "
              />
            </div>
            <button
              on:click={applyFilter}
              class="h-8 px-4 rounded bg-red-500 text-white font-semibold hover:bg-red-600"
            >
              Apply Filter
            </button>
          </div>
        </div>
    
        <!-- Tab Content -->
        {#if tab === 0}
          <Bethistory startdate={startDate} endDate={endDate} />
        {/if}
        {#if tab === 1}
          <Unsettle />
        {/if}
        {#if tab === 2}
          <Account />
        {/if}
      </div>
    </div>
    