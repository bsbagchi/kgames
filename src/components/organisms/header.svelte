<script lang="ts">
  import { theme } from '$lib/Store/darktheme';
  import { writable } from 'svelte/store';
  import Button from '../atoms/button.svelte';
  import English from '../../public/icons/English icon.svg';
  import downarrow from '../../public/icons/arrowgray.svg';
  import sun from '../../public/icons/sun (2).svg';
  import moon from '../../public/icons/moon.svg';
  import { isSidebarOpen, submenu } from '$lib/Store/store';
  import Authmodel from '../molecules/authmodel.svelte';

  // Manage Auth Modal State
  const isOpen = writable(false);
  let Authmode:string='login';
  // Menu items
  interface MenuItem {
    image: string;
    label: string;
    msg: string;
  }

  const menu: MenuItem[] = [
    { image: '/src/public/home/menu/fire-svgrepo-com.svg', label: 'In Play', msg: '' },
    { image: '/src/public/home/menu/multimarket.svg', label: 'Multi market', msg: '' },
    { image: '/src/public/home/menu/cricket.svg', label: 'Cricket', msg: '' },
    { image: '/src/public/home/menu/soccer.svg', label: 'Soccer', msg: '' },
    { image: '/src/public/home/menu/tennies.svg', label: 'Tennis', msg: '' },
    { image: '/src/public/home/menu/india.svg', label: 'Casino Games', msg: '' }
  ];

  const submenuItems: MenuItem[] = [
    { image: '/src/public/home/menu/Aviator Icon.svg', label: 'Aviator', msg: 'HOT' },
    { image: '/src/public/home/menu/aura.svg', label: 'Aura', msg: '' },
    { image: '/src/public/home/menu/blast rocket.svg', label: 'Blast', msg: 'HOT' },
    { image: '/src/public/home/menu/india.svg', label: 'Indian Poker', msg: '' },
    { image: '/src/public/home/menu/blast rocket.svg', label: 'AE SEXY', msg: '' },
    { image: '/src/public/home/menu/india.svg', label: 'Indian Poker 2', msg: '' }
  ];

  // Menu handler to toggle submenu
  function menuHandler(): void {
    submenu.update((value) => !value);
  }

  // Toggle Auth Modal
  function login(): void {
    isOpen.update((value) => !value);
    Authmode='login'
  }
  function Register(): void {
    isOpen.update((value) => !value);
    Authmode='';
  }

  // Track current theme
  let currentTheme: string;
  $: currentTheme = $theme;

  // Toggle theme between dark and light
  const toggleTheme = (): void => {
    theme.set(currentTheme === 'dark' ? 'light' : 'dark');
  };
</script>
<div class="sticky z-40 top-0">
<div class="w-full h-10 flex justify-between items-center bg-white dark:bg-[--primary] px-[5%] py-8 ">
  <!-- Menu Icon -->
  <button aria-label="menu" on:click={() => $isSidebarOpen = !$isSidebarOpen}>
    <div class="flex">
      <div class="border-2 h-3 w-3 border-[--Border] dark:border-white rounded m-[1px]"></div>
      <div class="border-2 h-3 w-3 border-[--Border] dark:border-white rounded m-[1px]"></div>
    </div>
    <div class="flex">
      <div class="border-2 h-3 w-3 border-[--Border] dark:border-white rounded m-[1px]"></div>
      <div class="border-2 h-3 w-3 border-[--Border] dark:border-white rounded-full m-[1px]"></div>
    </div>
  </button>

  <!-- Theme and Language Options -->
  <div class="flex gap-2 md:gap-3 bg-transparent">
    <!-- Theme Toggle -->
    <button on:click={toggleTheme}>
      {#if currentTheme === 'dark'}
        <img class="h-8" src={sun} alt="Light Theme" />
      {:else}
        <img class="h-7" src={moon} alt="Dark Theme" />
      {/if}
    </button>

    <!-- Language Selector -->
    <button
      class="px-3 h-9 md:h-10 w-fit rounded-lg text-white flex items-center justify-center whitespace-nowrap"
      style={`background-color: var(--Primary-Light);`}
    >
      <img loading="lazy" decoding="async" src={English} alt="English" />
      <span class="bg-transparent px-2">English</span>
      <img class="rotate-180" loading="lazy" decoding="async" src={downarrow} alt="Dropdown" />
    </button>

    <!-- Buttons -->
    <div class="max-sm:hidden">
      <Button handel={login} text="Sign In" color="--Primary-Light" />
    </div>
    <Button handel={Register} text="Register" color="--Accent" />
  </div>
</div>

<!-- Menu Items -->
<div class="flex  px-[5%] bg-gray-300 dark:bg-[--Primary-Light]">
  <div class="py-3 w-full overflow-x-scroll scrollbar-hidden flex gap-2 bg-transparent">
    {#each menu as item}
      <Button
        handel={item.label === 'Casino Games' ? menuHandler : undefined}
        msg={item.msg}
        color="--bg-body"
        image1={item.image}
        text={item.label}
      />
    {/each}
    {#if $submenu}
      {#each submenuItems as items}
        <Button msg={items.msg} color="--Secondary" image1={items.image} text={items.label} />
      {/each}
    {/if}
  </div>
</div>
</div>
<!-- Auth Modal -->

  <Authmodel isOpen={isOpen} mode={Authmode}  />

