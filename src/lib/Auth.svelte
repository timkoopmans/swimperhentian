<script lang="ts">
  import { onMount } from 'svelte';
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();

  let isAuthenticated = $state(false);
  let password = $state('');
  let error = $state('');
  let showPassword = $state(false);

  // Change this password to whatever you want
  const CORRECT_PASSWORD = 'swimperhentian2026';
  const AUTH_KEY = 'swim_auth';

  onMount(() => {
    // Check if already authenticated
    const stored = sessionStorage.getItem(AUTH_KEY);
    if (stored === CORRECT_PASSWORD) {
      isAuthenticated = true;
    }
  });

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, password);
      isAuthenticated = true;
      error = '';
    } else {
      error = 'Incorrect password';
      password = '';
    }
  }

  function togglePasswordVisibility() {
    showPassword = !showPassword;
  }
</script>

{#if !isAuthenticated}
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 p-4">
    <div class="card bg-base-100 shadow-2xl w-full max-w-md">
      <div class="card-body">
        <h2 class="card-title text-3xl font-bold text-center mb-2">
          🏊‍♂️ Swim Perhentian 2026
        </h2>
        <p class="text-center text-gray-600 mb-6">
          Website Under Development
        </p>

        <div class="alert alert-info mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>This page is password protected during development.</span>
        </div>

        <form onsubmit={handleSubmit}>
          <div class="form-control">
            <label class="label" for="password">
              <span class="label-text font-semibold">Enter Password</span>
            </label>
            <div class="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                bind:value={password}
                placeholder="Enter password"
                class="input input-bordered w-full pr-12"
                required
                autocomplete="off"
              />
              <button
                type="button"
                onclick={togglePasswordVisibility}
                class="absolute right-3 top-1/2 -translate-y-1/2 btn btn-ghost btn-sm btn-circle"
              >
                {#if showPassword}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                {:else}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                {/if}
              </button>
            </div>
          </div>

          {#if error}
            <div class="alert alert-error mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          {/if}

          <div class="form-control mt-6">
            <button type="submit" class="btn btn-primary">
              Unlock Site
            </button>
          </div>
        </form>

        <div class="divider">INFO</div>

        <div class="text-sm text-gray-500 text-center">
          <p>Contact the administrator if you need access.</p>
          <p class="mt-2">📅 Event Date: October 3, 2026</p>
          <p>🏝️ Location: <a href="https://www.google.com/maps/place/Pulau+Perhentian+Besar/@5.9029142,102.73505,14z/data=!3m1!4b1!4m6!3m5!1s0x31b6e08bc8a6980b:0x3b84f6f746a0078!8m2!3d5.9037879!4d102.7537372!16s%2Fg%2F1hc25hd3l?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline hover:text-blue-700 transition-colors">Pulau Perhentian Besar</a></p>
        </div>
      </div>
    </div>
  </div>
{:else}
  {@render children()}
{/if}

