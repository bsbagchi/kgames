<script lang="ts">
    import { unsettle } from "$lib/report";
</script>
<div class="p-2">
    <h1 class="text-3xl font-semibold pb-4">Unsettle Report</h1>
    <table class="w-full text-sm">
        <thead class="bg-red-500">
            <tr>
                <th class="border p-1">Date</th>
                <th class="border p-1">Competition</th>
                <th class="border p-1">Event</th>
                <th class="border p-1">Market</th>
                <th class="border p-1">Runner</th>
                <th class="border p-1">Side</th>
                <th class="border p-1">Line</th>
                <th class="border p-1">Rate</th>
                <th class="border p-1">Amount</th>
                <th class="border p-1">Potential Profit</th>
                <th class="border p-1">Potential loss</th>
            </tr>
        </thead>
        <tbody>
            
            {#each unsettle as item}
            <tr>
                <td class="border p-1">{item.Date}</td>
                <td class="border p-1">{item.Competition}</td>
                <td class="border p-1">{item.Event}</td>
                <td class="border p-1">{item.Market}</td>
                <td class="border p-1">{item.Runner}</td>
                <td class="border p-1">{item.Side}</td>
                <td class="border p-1">{item.Line}</td>
                <td class="border p-1">{item.Rate}</td>
                <td class="border p-1">{item.Amount}</td>
                <td class="border p-1">{item["Potential Profit"]}</td>
                <td class="border p-1">{item["Potential Loss"]}</td>
            </tr>
            {/each}
        </tbody>
</table>
</div>