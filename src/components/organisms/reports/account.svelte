<script lang="ts">
    import { account } from "$lib/report";
</script>

<div class="p-2">
    <h1 class="text-3xl font-semibold pb-4">Account Report</h1>
    <table>
        <thead class="bg-red-500">
            <tr>
                <th class="border p-1">Date</th>
                <th class="border p-1">Credit</th>
                <th class="border p-1">Debit</th>
                <th class="border p-1">Balance</th>
                <th class="border p-1">Description</th>
            </tr>
        </thead>
        <tbody>
            
                {#each account as item}
                <tr>
                <td class="border p-1">{item.Date}</td>
                <td class="border p-1">{item.Credit}</td>
                <td class="border p-1">{item.Debit}</td>
                <td class="border p-1">{item.Balance}</td>
                <td class="border p-1">{item.Description}</td>
            </tr>
                {/each}
                
            
        </tbody>
    </table>
</div>