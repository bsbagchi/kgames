<script>
  export let fields = [];
  export let onSubmit = () => {};
</script>

<form on:submit|preventDefault={onSubmit} class="space-y-4">
  {#each fields as field}
    <input type="text" placeholder={field.placeholder} bind:value={field.value} class="border p-2 rounded w-full" />
  {/each}
  <button type="submit" class="px-4 py-2 bg-green-500  rounded">Submit</button>
</form>
