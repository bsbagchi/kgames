<script lang="ts">
    import { fade } from 'svelte/transition';
    import { writable, type Writable } from 'svelte/store';
  
    // Props
    export let isOpen: Writable<boolean> = writable(false);
    export let mode:string = 'login';
  
    // Form State
    let email: string = '';
    let password: string = '';
    let rememberMe: boolean = false;
    let captchaAnswer: string = '';
  
    // Captcha Variables
    let num1: number = Math.floor(Math.random() * 100);
    let num2: number = Math.floor(Math.random() * 10);
  
    // Refresh Captcha
    function refreshCaptcha(): void {
      num1 = Math.floor(Math.random() * 100);
      num2 = Math.floor(Math.random() * 10);
    }
  
    // Form Submission
    function handleSubmit(): void {
      if (parseInt(captchaAnswer) !== num1 + num2) {
        alert('Incorrect captcha');
        return;
      }
      console.log('Form submitted:', { email, password, rememberMe });
    }
  
    // Demo Login
    function handleDemoLogin(): void {
      email = 'demo@example.com';
      password = 'demo123';
      handleSubmit();
    }
  
    // Handle Overlay Click
    function handleOverlayClick(e: MouseEvent): void {
      if (e.target === e.currentTarget) {
        isOpen.set(false);
      }
    }
  </script>
  
  <!-- Component Markup -->
  {#if $isOpen}

  <div
    class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
    transition:fade
   
  >
  <button aria-label="close" on:click={handleOverlayClick} class="h-screen w-screen absolute "></button>
    <div
      class="w-full max-w-md p-6 relative rounded-lg shadow-xl dark:bg-[#1a1f2d] bg-white"
      role="dialog"
      aria-modal="true"
    >
      <!-- Close Button -->
      <button
        class="absolute right-4 top-4 dark:text-gray-400 hover:dark:text-gray-200 text-gray-500 hover:text-gray-700"
        on:click={() => isOpen.set(false)}
        aria-label="Close"
      >
        ✕
      </button>
  
      <!-- Title -->
      <h2 class="text-2xl font-bold mb-6 dark:text-red-500 text-gray-900">
        {mode === 'login' ? 'Sign In' : 'Register'}
      </h2>
  
      <!-- Form -->
      <form on:submit|preventDefault={handleSubmit} class="space-y-4">
        <div>
          <label class="block text-sm font-medium dark:text-gray-200 text-gray-700" for="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            bind:value={email}
            class="mt-1 block w-full rounded-md px-3 py-2 border shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF7F7F] dark:bg-[#131722] dark:border-gray-700 dark:text-white dark:placeholder-gray-400 bg-white border-gray-300 text-gray-900"
            required
          />
        </div>
  
        <div>
          <label class="block text-sm font-medium dark:text-gray-200 text-gray-700" for="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            bind:value={password}
            class="mt-1 block w-full rounded-md px-3 py-2 border shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF7F7F] dark:bg-[#131722] dark:border-gray-700 dark:text-white dark:placeholder-gray-400 bg-white border-gray-300 text-gray-900"
            required
          />
        </div>
  
        {#if mode === 'login'}
        <div class="flex items-center">
          <input
            type="checkbox"
            id="remember"
            bind:checked={rememberMe}
            class="h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-600"
          />
          <label for="remember" class="ml-2 block text-sm dark:text-gray-200 text-gray-700">
            Remember me
          </label>
        </div>
        {/if}
  
        <!-- Captcha -->
        <div class="p-4 rounded-md space-y-2 dark:bg-[#131722] bg-gray-100">
          <div class="flex items-center justify-between">
            <span class="font-medium dark:text-gray-200 text-gray-900">{num1} + {num2} = ?</span>
            <button
              type="button"
              class="text-red-500 hover:text-red-600"
              on:click={refreshCaptcha}
              aria-label="Refresh Captcha"
            >
              ↻
            </button>
          </div>
          <input
            type="text"
            bind:value={captchaAnswer}
            class="block w-full rounded-md px-3 py-2 border shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF7F7F] dark:bg-[#1a1f2d] dark:border-gray-700 dark:text-white dark:placeholder-gray-400 bg-white border-gray-300 text-gray-900"
            placeholder="Solve captcha"
            required
          />
        </div>
  
        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full rounded-md bg-red-500 py-2 px-4 text-white font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          {mode === 'login' ? 'Sign In' : 'Register'}
        </button>
  
        {#if mode === 'login'}
        <!-- Demo Login Button -->
        <button
          type="button"
          class="w-full rounded-md py-2 px-4 font-semibold border focus:outline-none focus:ring-2 focus:ring-[#FF7F7F] focus:ring-offset-2 dark:border-[#FF7F7F] dark:text-red-500 dark:hover:bg-red-500/10 border-[#FF7F7F] text-red-500 hover:bg-red-500/10"
          on:click={handleDemoLogin}
        >
          Demo Login
        </button>
        {/if}
  
        <!-- Mode Switch -->
        <div class="text-center text-sm">
          {#if mode === 'login'}
          <span class="dark:text-gray-400 text-gray-600">Don't have an account?</span>
          <button
            type="button"
            class="ml-1 text-red-500 hover:text-red-600"
            on:click={() => (mode = 'register')}
          >
            Register
          </button>
          {:else}
          <span class="dark:text-gray-400 text-gray-600">Already have an account?</span>
          <button
            type="button"
            class="ml-1 text-red-500 hover:text-red-600"
            on:click={() => (mode = 'login')}
          >
            Sign In
          </button>
          {/if}
        </div>
      </form>
    </div>
  </div>
  {/if}
  