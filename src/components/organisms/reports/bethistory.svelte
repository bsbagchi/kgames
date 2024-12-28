<script lang="ts">
    import { bethistory } from '$lib/report';
    export let startdate: string;
    export let endDate: string;
    let currentPage = 1; // Current page index (starting from 1)
    const rowsPerPage = 10; // Number of rows per page

    // Reactive filtered data
    $: filteredData = bethistory.filter(item => {
        if (!startdate && !endDate) return true;

        const itemDate = new Date(item['Date&Time']);
        const start = startdate ? new Date(startdate) : null;
        const end = endDate ? new Date(endDate) : null;

        return (
            (!start || itemDate >= start) &&
            (!end || itemDate <= end)
        );
    });

    // Paginated subset of filtered data
    $: paginatedData = filteredData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    // Total number of pages
    $: totalPages = Math.ceil(filteredData.length / rowsPerPage);

    // Navigate to the previous page
    function prevPage() {
        if (currentPage > 1) {
            currentPage--;
        }
    }

    // Navigate to the next page
    function nextPage() {
        if (currentPage < totalPages) {
            currentPage++;
        }
    }
</script>

<div class="p-2">
    <h1 class="text-3xl pb-4 font-semibold">Bet History</h1>
    <table class="w-full border-collapse border rounded-md overflow-hidden border-gray-300">
        <!-- Table Header -->
        <thead>
            <tr class="bg-red-600 text-white">
                <th class="border p-2 text-left">Date & Time</th>
                <th class="border p-2 text-left">Competition</th>
                <th class="border p-2 text-left">Event</th>
                <th class="border p-2 text-left">Market</th>
                <th class="border p-2 text-left">Runner</th>
                <th class="border p-2 text-left">Side</th>
                <th class="border p-2 text-left">Line</th>
                <th class="border p-2 text-left">Rate</th>
                <th class="border p-2 text-left">Amount</th>
                <th class="border p-2 text-left">Profit/Loss</th>
                <th class="border p-2 text-left">Status</th>
            </tr>
        </thead>
        <!-- Table Body -->
        <tbody class="text-sm">
            {#if paginatedData.length > 0}
                {#each paginatedData as item}
                    <tr class="hover:bg-gray-800 ">
                        <td class="border p-2">{item['Date&Time']}</td>
                        <td class="border p-2">{item.Competition}</td>
                        <td class="border p-2">{item.Event}</td>
                        <td class="border p-2">{item.Market}</td>
                        <td class="border p-2">{item.Runner}</td>
                        <td class="border p-2">{item.Side}</td>
                        <td class="border p-2">{item.Line}</td>
                        <td class="border p-2">{item.Rate}</td>
                        <td class="border p-2">{item.Amount}</td>
                        <td class="border p-2">{item['Profit/Loss']}</td>
                        <td class="border p-2">{item.Status}</td>
                    </tr>
                {/each}
            {:else}
                <tr>
                    <td colspan="11" class="p-4 text-center text-gray-500">
                        No data available for the selected date range.
                    </td>
                </tr>
            {/if}
        </tbody>
    </table>

    <!-- Pagination Controls -->
    <div class="flex justify-between items-center mt-4">
        <button
            on:click={prevPage}
            class="px-4 py-2 border bg-gray-300 text-black rounded hover:bg-gray-400"
            disabled={currentPage === 1}
        >
            Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
            on:click={nextPage}
            class="px-4 py-2 border bg-gray-300 text-black rounded hover:bg-gray-400"
            disabled={currentPage === totalPages}
        >
            Next
        </button>
    </div>
</div>
