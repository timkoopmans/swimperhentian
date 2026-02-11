<script lang="ts">
  let currentSchedule = '16km';

  function showSchedule(type: string) {
    currentSchedule = type;
  }
</script>

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
    <a class="btn btn-ghost text-xl font-bold text-primary" href="#home">
      🏊‍♂️ SWIM PERHENTIAN
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
    <a href="#register" class="btn btn-primary">Register Now</a>
  </div>
</div>

<!-- Hero Section -->
<section id="home" class="hero min-h-screen hero-gradient pt-16">
  <div class="hero-content text-center text-white">
    <div class="max-w-4xl">
      <h1 class="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
        SWIM PERHENTIAN 2026
      </h1>
      <p class="text-2xl md:text-3xl mb-4 font-light">
        Malaysia's Premier Open-Water Swimming Event
      </p>
      <p class="text-xl md:text-2xl mb-8 font-semibold">
        📅 October 3, 2026 | 🏝️ Pulau Perhentian Besar
      </p>
      <div class="flex flex-wrap gap-4 justify-center mb-12">
        <a href="#categories" class="btn btn-lg btn-accent">View Categories</a>
        <a href="#register" class="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-primary">Register Now</a>
      </div>
      <div class="stats stats-vertical lg:stats-horizontal shadow-2xl bg-white/90">
        <div class="stat">
          <div class="stat-title text-gray-600">Distance Options</div>
          <div class="stat-value text-primary">250m - 16km</div>
          <div class="stat-desc text-gray-600">For all skill levels</div>
        </div>
        <div class="stat">
          <div class="stat-title text-gray-600">Water Temp</div>
          <div class="stat-value text-cyan-600">28-31°C</div>
          <div class="stat-desc text-gray-600">Perfect conditions</div>
        </div>
        <div class="stat">
          <div class="stat-title text-gray-600">Event Date</div>
          <div class="stat-value text-teal-600">Oct 3</div>
          <div class="stat-desc text-gray-600">2026</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- About Section -->
<section id="about" class="py-20 bg-base-100">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
      About the Challenge
    </h2>
    <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-2xl text-cyan-600">🌊 The Experience</h3>
          <p class="text-lg leading-relaxed">
            The Perhentian Island Challenge is Malaysia's premier open-water swimming event,
            attracting international and local athletes. Swim alongside coral reefs, tropical fish,
            and crystal-clear lagoons in the turquoise waters surrounding Pulau Perhentian Besar.
          </p>
        </div>
      </div>
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-2xl text-teal-600">🏆 For Everyone</h3>
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
<section id="categories" class="py-20 bg-gradient-to-b from-cyan-50 to-blue-50">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
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
            <button class="btn btn-primary btn-block">Register</button>
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
            <button class="btn btn-secondary btn-block">Register</button>
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
            <button class="btn btn-accent btn-block">Register</button>
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
            <button class="btn btn-info btn-block">Register</button>
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
            <button class="btn btn-success btn-block">Register</button>
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
            <button class="btn btn-warning btn-block">Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Registration CTA Section -->
<section id="register" class="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-4xl md:text-5xl font-bold mb-6">
      Ready to Take the Challenge?
    </h2>
    <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
      Join swimmers from around the world for an unforgettable open-water experience in paradise
    </p>
    <div class="flex flex-wrap gap-4 justify-center mb-8">
      <button class="btn btn-accent btn-lg">Register Now</button>
      <button class="btn btn-outline text-white border-white hover:bg-white hover:text-primary btn-lg">Download Info Pack</button>
    </div>
    <div class="text-lg">
      <p>📧 Email: <a href="mailto:info@swimperhentian.com" class="underline">info@swimperhentian.com</a></p>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="footer footer-center p-10 bg-base-200 text-base-content">
  <div>
    <p class="font-bold text-2xl text-primary">
      SWIM PERHENTIAN 2026 🏊‍♂️
    </p>
    <p>Malaysia's Premier Open-Water Swimming Event</p>
    <p>October 3, 2026 | Pulau Perhentian Besar</p>
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
