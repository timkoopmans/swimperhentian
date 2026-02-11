<script lang="ts">
  import Auth from './lib/Auth.svelte';
  import RegistrationForm from './lib/RegistrationForm.svelte';

  let currentSchedule = '16km';

  function showSchedule(type: string) {
    currentSchedule = type;
  }
</script>

<Auth>
<!-- Navigation -->
<div class="navbar bg-base-100 shadow-lg fixed top-0 z-50">
  <div class="navbar-start">
    <div class="dropdown">
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="#travel">Travel</a></li>
        <li><a href="#safety">Safety</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost text-xl font-bold text-baltic-blue flex items-center gap-2" href="#home">
      <img src="/logo.png" alt="Swim Perhentian Logo" class="h-8 w-8 object-contain" />
      SWIM PERHENTIAN
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#categories">Categories</a></li>
      <li><a href="#schedule">Schedule</a></li>
      <li><a href="#travel">Travel</a></li>
      <li><a href="#safety">Safety</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a href="#registration-form" class="btn bg-baltic-blue hover:bg-[#1a4460] text-white border-none shadow-none">Register Now</a>
  </div>
</div>

<!-- Hero Section -->
<section id="home" class="hero min-h-screen relative pt-16 overflow-hidden">
  <!-- Background Video -->
  <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover">
    <source src="/turtle.mp4" type="video/mp4">
  </video>
  <!-- Overlay for better text readability -->
  <div class="absolute inset-0 bg-gradient-to-b from-baltic-blue/70 via-tropical-teal/60 to-mint-leaf/70"></div>
  <!-- Content -->
  <div class="hero-content text-center text-white relative z-10">
    <div class="max-w-4xl">
      <h1 class="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
        SWIM PERHENTIAN 2026
      </h1>
      <p class="text-2xl md:text-3xl mb-4 font-light">
        Malaysia's Premier Open-Water Swimming Event
      </p>
      <p class="text-xl md:text-2xl mb-8 font-semibold">
        🏝️ October 3, 2026 | <a href="https://www.google.com/maps/place/Pulau+Perhentian+Besar/@5.9029142,102.73505,14z/data=!3m1!4b1!4m6!3m5!1s0x31b6e08bc8a6980b:0x3b84f6f746a0078!8m2!3d5.9037879!4d102.7537372!16s%2Fg%2F1hc25hd3l?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="underline hover:text-light-green transition-colors">Pulau Perhentian Besar</a>
      </p>
      <div class="flex flex-wrap gap-4 justify-center mb-12">
        <a href="#categories" class="btn btn-lg btn-accent shadow-none">View Categories</a>
        <a href="#registration-form" class="btn btn-lg bg-baltic-blue hover:bg-[#1a4460] text-white border-none shadow-none">Register Now</a>
      </div>
      <div class="stats stats-vertical lg:stats-horizontal shadow-2xl bg-white/90">
        <div class="stat">
          <div class="stat-title text-gray-600">Distance Options</div>
          <div class="stat-value text-baltic-blue">250m - 16km</div>
          <div class="stat-desc text-gray-600">For all skill levels</div>
        </div>
        <div class="stat">
          <div class="stat-title text-gray-600">Water Temp</div>
          <div class="stat-value text-tropical-teal">28-31°C</div>
          <div class="stat-desc text-gray-600">Perfect conditions</div>
        </div>
        <div class="stat">
          <div class="stat-title text-gray-600">Event Date</div>
          <div class="stat-value text-mint-leaf">Oct 3</div>
          <div class="stat-desc text-gray-600">2026</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- About Section -->
<section id="about" class="py-20 bg-base-100">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 text-baltic-blue">
      About the Challenge
    </h2>
    <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-2xl text-tropical-teal">🌊 The Experience</h3>
          <p class="text-lg leading-relaxed">
            The Perhentian Island Challenge is Malaysia's premier open-water swimming event,
            attracting international and local athletes. Swim alongside coral reefs, tropical fish,
            and crystal-clear lagoons in the turquoise waters surrounding <a href="https://www.google.com/maps/place/Pulau+Perhentian+Besar/@5.9029142,102.73505,14z/data=!3m1!4b1!4m6!3m5!1s0x31b6e08bc8a6980b:0x3b84f6f746a0078!8m2!3d5.9037879!4d102.7537372!16s%2Fg%2F1hc25hd3l?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="text-tropical-teal underline hover:text-mint-leaf transition-colors font-semibold">Pulau Perhentian Besar</a>.
          </p>
        </div>
      </div>
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-2xl text-mint-leaf">🏆 For Everyone</h3>
          <p class="text-lg leading-relaxed">
            With distances ranging from the 16 km solo island marathon to the 250 m fun swims,
            it caters to elite marathon swimmers, relay teams, and newcomers alike. Safety,
            logistics, and hospitality are all carefully managed.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Categories Section -->
<section id="categories" class="py-20 bg-gradient-to-b from-tea-green/30 to-light-green/20">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-baltic-blue">
      Event Categories
    </h2>
    <p class="text-center text-lg mb-12 text-gray-600">Choose your challenge</p>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <!-- 16 KM Category -->
      <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div class="card-body">
          <div class="badge badge-primary badge-lg">ELITE</div>
          <h3 class="card-title text-3xl mt-2">16 km</h3>
          <p class="text-sm text-gray-500">Solo & Relay (Duo/Team)</p>
          <div class="divider"></div>
          <ul class="space-y-2 text-sm">
            <li>✓ Full island circumnavigation</li>
            <li>✓ Solo, Duo (2), or Team (4)</li>
            <li>✓ Flag-off: 8:00 AM</li>
            <li>✓ Cut-off: 7h 30min</li>
            <li>✓ Age: Solo 18+, Relay 14+</li>
          </ul>
          <div class="card-actions justify-end mt-4">
            <a href="#registration-form" class="btn btn-primary btn-block">Register</a>
          </div>
        </div>
      </div>

      <!-- 10 KM Category -->
      <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div class="card-body">
          <div class="badge badge-secondary badge-lg">ADVANCED</div>
          <h3 class="card-title text-3xl mt-2">10 km</h3>
          <p class="text-sm text-gray-500">Solo</p>
          <div class="divider"></div>
          <ul class="space-y-2 text-sm">
            <li>✓ Bubbles Resort → Teluk Pauh</li>
            <li>✓ One-way swim</li>
            <li>✓ Flag-off: 9:00 AM</li>
            <li>✓ Cut-off: 5 hours</li>
            <li>✓ Age: 18+</li>
          </ul>
          <div class="card-actions justify-end mt-4">
            <a href="#registration-form" class="btn btn-secondary btn-block">Register</a>
          </div>
        </div>
      </div>

      <!-- 4 KM Category -->
      <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div class="card-body">
          <div class="badge badge-accent badge-lg">INTERMEDIATE</div>
          <h3 class="card-title text-3xl mt-2">4 km</h3>
          <p class="text-sm text-gray-500">Solo</p>
          <div class="divider"></div>
          <ul class="space-y-2 text-sm">
            <li>✓ PIR to Turtle Beach - return</li>
            <li>✓ Flag-off: 8:45 AM</li>
            <li>✓ Age: 13+</li>
            <li>✓ Great for first-timers</li>
          </ul>
          <div class="card-actions justify-end mt-4">
            <a href="#registration-form" class="btn btn-accent btn-block">Register</a>
          </div>
        </div>
      </div>

      <!-- 1.5 KM Category -->
      <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div class="card-body">
          <div class="badge badge-info badge-lg">FUN SWIM</div>
          <h3 class="card-title text-3xl mt-2">1.5 km</h3>
          <p class="text-sm text-gray-500">Solo (13+ years)</p>
          <div class="divider"></div>
          <ul class="space-y-2 text-sm">
            <li>✓ Near Teluk Pauh Beach</li>
            <li>✓ Flag-off: 8:45 AM</li>
            <li>✓ Calm waters</li>
            <li>✓ Ideal for beginners</li>
          </ul>
          <div class="card-actions justify-end mt-4">
            <a href="#registration-form" class="btn btn-info btn-block">Register</a>
          </div>
        </div>
      </div>

      <!-- 500M Category -->
      <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div class="card-body">
          <div class="badge badge-success badge-lg">FUN SWIM</div>
          <h3 class="card-title text-3xl mt-2">500 m</h3>
          <p class="text-sm text-gray-500">Sea Angel (10-12) & Solo (13+)</p>
          <div class="divider"></div>
          <ul class="space-y-2 text-sm">
            <li>✓ Near Teluk Pauh Beach</li>
            <li>✓ Flag-off: 11:00/11:30 AM</li>
            <li>✓ Calm, safe waters</li>
            <li>✓ Perfect for youth</li>
          </ul>
          <div class="card-actions justify-end mt-4">
            <a href="#registration-form" class="btn btn-success btn-block">Register</a>
          </div>
        </div>
      </div>

      <!-- 250M Category -->
      <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div class="card-body">
          <div class="badge badge-warning badge-lg">SEA ANGEL</div>
          <h3 class="card-title text-3xl mt-2">250 m</h3>
          <p class="text-sm text-gray-500">Sea Angel (7-9 years)</p>
          <div class="divider"></div>
          <ul class="space-y-2 text-sm">
            <li>✓ Near Teluk Pauh Beach</li>
            <li>✓ Flag-off: 11:00 AM</li>
            <li>✓ Very calm waters</li>
            <li>✓ Young swimmers welcome</li>
          </ul>
          <div class="card-actions justify-end mt-4">
            <a href="#registration-form" class="btn btn-warning btn-block">Register</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Registration CTA Section -->
<section id="register" class="py-20 bg-gradient-to-r from-baltic-blue to-tropical-teal text-white">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-4xl md:text-5xl font-bold mb-6">
      Ready to Take the Challenge?
    </h2>
    <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
      Join swimmers from around the world for an unforgettable open-water experience in paradise
    </p>
    <div class="flex flex-wrap gap-4 justify-center mb-8">
      <a href="#registration-form" class="btn btn-lg bg-white hover:bg-gray-100 text-baltic-blue border-none font-semibold px-8 shadow-none">Register Now</a>
      <button class="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-baltic-blue font-semibold px-8 shadow-none">Download Info Pack</button>
    </div>
    <div class="text-lg">
      <p>📧 Email: <a href="mailto:info@swimperhentian.com" class="underline">info@swimperhentian.com</a></p>
    </div>
  </div>
</section>

<!-- Registration Form -->
<RegistrationForm />

<!-- Footer -->
<footer class="footer footer-center p-10 bg-base-200 text-base-content">
  <div>
    <div class="flex items-center justify-center gap-2 mb-2">
      <img src="/logo.png" alt="Swim Perhentian Logo" class="h-10 w-10 object-contain" />
      <p class="font-bold text-2xl text-baltic-blue">
        SWIM PERHENTIAN 2026
      </p>
    </div>
    <p>Malaysia's Premier Open-Water Swimming Event</p>
    <p>October 3, 2026 | <a href="https://www.google.com/maps/place/Pulau+Perhentian+Besar/@5.9029142,102.73505,14z/data=!3m1!4b1!4m6!3m5!1s0x31b6e08bc8a6980b:0x3b84f6f746a0078!8m2!3d5.9037879!4d102.7537372!16s%2Fg%2F1hc25hd3l?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="text-tropical-teal underline hover:text-mint-leaf transition-colors">Pulau Perhentian Besar</a></p>
  </div>
  <div>
    <div class="grid grid-flow-col gap-4">
      <a href="#about" class="link link-hover">About</a>
      <a href="#register" class="link link-hover">Contact</a>
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a href="#" class="link link-hover">Terms & Conditions</a>
      <!-- svelte-ignore a11y_invalid_attribute -->
      <a href="#" class="link link-hover">Privacy Policy</a>
    </div>
  </div>
  <div>
    <p>Copyright © 2026 - All rights reserved by Swim Perhentian</p>
  </div>
</footer>
</Auth>
