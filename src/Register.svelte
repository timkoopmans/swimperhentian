<script lang="ts">
  import RegistrationForm from './lib/RegistrationForm.svelte';
</script>

<!-- Navigation -->
<div class="navbar bg-base-100 shadow-lg fixed top-0 z-50">
  <div class="navbar-start">
    <a class="btn btn-ghost text-xl font-bold text-baltic-blue flex items-center gap-2" href="/">
      <img src="/logo.png" alt="Swim Perhentian Logo" class="h-8 w-8 object-contain" />
      <span class="hidden md:inline">SWIM PERHENTIAN</span>
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/#home">Home</a></li>
      <li><a href="/#about">About</a></li>
      <li><a href="/#categories">Categories</a></li>
      <li><a href="/#gallery">Gallery</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a href="/" class="btn btn-ghost">Back to Site</a>
  </div>
</div>

<!-- Registration Page Content -->
<div class="pt-20 min-h-screen bg-gradient-to-b from-tea-green/30 to-light-green/20">
  <RegistrationForm />
</div>

<!-- Footer -->
<footer class="footer footer-center p-6 md:p-10 bg-base-200 text-base-content">
  <div class="w-full max-w-4xl">
    <div class="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
      <img src="/logo.png" alt="Swim Perhentian Logo" class="h-8 w-8 md:h-10 md:w-10 object-contain" />
      <p class="font-bold text-xl md:text-2xl text-baltic-blue text-center">
        SWIM PERHENTIAN 2026
      </p>
    </div>
    <p class="text-sm md:text-base text-center">Malaysia's Premier Open-Water Swimming Event</p>
    <p class="text-sm md:text-base text-center">
      October 3, 2026 | <a href="https://www.google.com/maps/place/Pulau+Perhentian+Besar/@5.9029142,102.73505,14z/data=!3m1!4b1!4m6!3m5!1s0x31b6e08bc8a6980b:0x3b84f6f746a0078!8m2!3d5.9037879!4d102.7537372!16s%2Fg%2F1hc25hd3l?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="text-tropical-teal underline hover:text-mint-leaf transition-colors">Pulau Perhentian Besar</a>
    </p>
  </div>
  <div class="w-full max-w-4xl">
    <div class="flex flex-wrap items-center justify-center gap-3 md:gap-4">
      <a href="/#about" class="link link-hover text-sm md:text-base">About</a>
      <span class="hidden sm:inline text-gray-400">•</span>
      <a href="/#register" class="link link-hover text-sm md:text-base">Contact</a>
      <span class="hidden sm:inline text-gray-400">•</span>
      <a href="/terms.html#safety" class="link link-hover text-sm md:text-base">Safety</a>
      <span class="hidden sm:inline text-gray-400">•</span>
      <a href="/terms.html" class="link link-hover text-sm md:text-base">Terms & Conditions</a>
      <span class="hidden sm:inline text-gray-400">•</span>
      <a href="/terms.html#privacy-policy" class="link link-hover text-sm md:text-base">Privacy Policy</a>
    </div>
  </div>
  <div class="w-full max-w-4xl">
    <p class="text-xs md:text-sm text-center">Copyright © 2026 - All rights reserved by Swim Perhentian</p>
  </div>
</footer>

