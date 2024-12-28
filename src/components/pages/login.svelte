<script>
  import Form from '../molecules/Form.svelte';
  let fields = [
    { placeholder: 'Email', value: '' },
    { placeholder: 'Password', value: '' },
  ];

  const handleLogin = () => {
    console.log('Logging in...');
  };
</script>

<div class="p-6">
  <h1 class="text-xl font-bold">Login</h1>
  <Form {fields} on:submit={handleLogin} />
</div>
