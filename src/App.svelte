<script lang="ts">
  import Auth from './lib/Auth.svelte';
  import Gallery from './lib/Gallery.svelte';
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
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#schedule">Schedule</a></li>
        <li><a href="#accommodation">Accommodation</a></li>
        <li><a href="#travel">Travel</a></li>
        <li><a href="/terms.html#safety">Safety</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost text-xl font-bold text-baltic-blue flex items-center gap-2" href="#home">
      <img src="/logo.png" alt="Swim Perhentian Logo" class="h-8 w-8 object-contain" />
      <span class="hidden md:inline">SWIM PERHENTIAN</span>
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#categories">Categories</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#schedule">Schedule</a></li>
      <li><a href="#accommodation">Accommodation</a></li>
      <li><a href="#travel">Travel</a></li>
      <li><a href="/terms.html#safety">Safety</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a href="/register.html" class="btn bg-baltic-blue hover:bg-[#1a4460] text-white border-none shadow-none">Register Now</a>
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
        October 3, 2026 | <a href="https://www.google.com/maps/place/Pulau+Perhentian+Besar/@5.9029142,102.73505,14z/data=!3m1!4b1!4m6!3m5!1s0x31b6e08bc8a6980b:0x3b84f6f746a0078!8m2!3d5.9037879!4d102.7537372!16s%2Fg%2F1hc25hd3l?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="underline hover:text-light-green transition-colors">Pulau Perhentian Besar</a>
      </p>
      <div class="flex flex-wrap gap-4 justify-center mb-12">
        <a href="#categories" class="btn btn-lg bg-white hover:bg-gray-100 text-baltic-blue border-none shadow-none font-semibold">View Categories</a>
        <a href="/register.html" class="btn btn-lg bg-baltic-blue hover:bg-[#1a4460] text-white border-none shadow-none">Register Now</a>
      </div>
      <div class="stats stats-vertical lg:stats-horizontal shadow-2xl bg-white/90">
        <div class="stat">
          <div class="stat-title text-gray-600">Distance Options</div>
          <div class="stat-value text-baltic-blue">10km - 16km</div>
          <div class="stat-desc text-gray-600">Elite open-water swimming</div>
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
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-6 text-baltic-blue">
      Malaysia Swim Camp
    </h2>
    <p class="text-center text-xl mb-12 text-gray-600 max-w-3xl mx-auto">
      In conjunction with <strong><a href="https://u24.com.au" target="_blank" rel="noopener noreferrer" class="text-baltic-blue hover:text-tropical-teal transition-colors underline">U24</a></strong> & <strong><a href="https://swimwell.com.au" target="_blank" rel="noopener noreferrer" class="text-baltic-blue hover:text-tropical-teal transition-colors underline">Swimwell</a></strong>, we're heading to the idyllic waters of the Perhentian Islands
    </p>

    <div class="max-w-6xl mx-auto space-y-8">
      <!-- Main Description -->
      <div class="card bg-gradient-to-br from-tropical-teal/10 to-mint-leaf/10 shadow-xl">
        <div class="card-body">
          <p class="text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Set against crystal clear seas and white sand beaches, this camp is designed for swimmers who crave adventure as much as time in the water.
            Across the week you will enjoy daily swims ranging from relaxed recovery sessions to epic recce swims, iconic island routes, and a thrilling 16km race day experience.
          </p>
        </div>
      </div>

      <!-- Three Column Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-2xl text-tropical-teal">The Experience</h3>
            <p class="text-lg leading-relaxed">
              The Perhentian Island Challenge is Malaysia's premier open-water swimming event,
              attracting international and local athletes. Swim alongside coral reefs, tropical fish,
              and crystal-clear lagoons in the turquoise waters surrounding <a href="https://www.google.com/maps/place/Pulau+Perhentian+Besar/@5.9029142,102.73505,14z/data=!3m1!4b1!4m6!3m5!1s0x31b6e08bc8a6980b:0x3b84f6f746a0078!8m2!3d5.9037879!4d102.7537372!16s%2Fg%2F1hc25hd3l?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="text-tropical-teal underline hover:text-mint-leaf transition-colors font-semibold">Pulau Perhentian Besar</a>.
            </p>
          </div>
        </div>

        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-2xl text-mint-leaf">Elite Open-Water Challenge</h3>
            <p class="text-lg leading-relaxed">
              Featuring the challenging 16 km full island circumnavigation and the 10 km one-way swim,
              this event caters to serious open-water swimmers and relay teams. Safety,
              logistics, and hospitality are all carefully managed.
            </p>
          </div>
        </div>

        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-2xl text-baltic-blue">Beyond Swimming</h3>
            <p class="text-lg leading-relaxed">
              When we're not swimming, enjoy snorkelling, exploring nearby islands, swimming with turtles,
              or simply relaxing on a sunset cruise. From Redang Island adventures to beach dinners and recovery days in paradise.
            </p>
          </div>
        </div>
      </div>

      <!-- Community & Memories -->
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-2xl text-center justify-center text-baltic-blue mb-4">Community, Challenge & Immersion</h3>
          <p class="text-lg leading-relaxed text-center max-w-4xl mx-auto">
            This camp is about community, challenge, and immersion in a truly special location.
            Whether you're racing or simply soaking it all in, the Perhentian Islands promise warm waters,
            stunning scenery, and memories that will last well beyond the trip.
          </p>
          <p class="text-xl font-semibold text-center mt-4 text-tropical-teal">
            Perhentian Islands is a swim camp and adventure you won't want to miss.
          </p>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="card bg-gradient-to-r from-baltic-blue to-tropical-teal text-white shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-2xl justify-center mb-6">Get In Touch</h3>
          <p class="text-center text-lg mb-6">
            <strong>Booking opens soon!</strong> For more information or to express interest, please contact:
          </p>
          <div class="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div class="text-center">
              <p class="font-bold text-lg mb-2">Nick</p>
              <a href="tel:0455486292" class="link link-hover text-white underline text-lg">
                0455 486 292
              </a>
            </div>
            <div class="text-center">
              <p class="font-bold text-lg mb-2">Arno</p>
              <a href="tel:0419335592" class="link link-hover text-white underline text-lg">
                0419 335 592
              </a>
            </div>
            <div class="text-center">
              <p class="font-bold text-lg mb-2">Charlie</p>
              <a href="tel:0407008322" class="link link-hover text-white underline text-lg">
                0407 008 322
              </a>
            </div>
          </div>
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

    <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <!-- 16 KM Category -->
      <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div class="card-body">
          <div class="badge badge-lg bg-baltic-blue text-white border-none">ELITE</div>
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
            <a href="/register.html" class="btn bg-baltic-blue hover:bg-[#1a4460] text-white border-none btn-block">Register</a>
          </div>
        </div>
      </div>

      <!-- 10 KM Category -->
      <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div class="card-body">
          <div class="badge badge-lg bg-[#E91E8C] text-white border-none">ADVANCED</div>
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
            <a href="/register.html" class="btn bg-[#E91E8C] hover:bg-[#d11a7d] text-white border-none btn-block">Register</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Gallery Section -->
<Gallery />

<!-- Schedule Section -->
<section id="schedule" class="py-20 bg-base-100">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-baltic-blue">
      Event Schedule
    </h2>
    <p class="text-center text-lg mb-12 text-gray-600">
      September 28 - October 5, 2026 - A week of swimming, exploration, and adventure
    </p>

    <div class="max-w-6xl mx-auto">
      <!-- Timeline -->
      <div class="space-y-8">

        <!-- Monday 28th -->
        <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div class="card-body">
            <div class="flex flex-col md:flex-row gap-4 items-start">
              <div class="badge badge-lg bg-tropical-teal text-white border-none font-semibold min-w-[140px]">MON SEP 28</div>
              <div class="flex-1">
                <h3 class="card-title text-2xl mb-3 text-baltic-blue">Arrival & Settle In</h3>
                <ul class="space-y-2 text-base">
                  <li>✓ Arrive in Perhentian</li>
                  <li>✓ Check in / settle in</li>
                  <li>✓ Light swim (optional)</li>
                  <li>✓ Explore the area / beach walk</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Tuesday 29th -->
        <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div class="card-body">
            <div class="flex flex-col md:flex-row gap-4 items-start">
              <div class="badge badge-lg bg-tropical-teal text-white border-none font-semibold min-w-[140px]">TUE SEP 29</div>
              <div class="flex-1">
                <h3 class="card-title text-2xl mb-3 text-baltic-blue">Redang Island Exploration Day</h3>
                <ul class="space-y-2 text-base">
                  <li>✓ Early morning start</li>
                  <li>✓ Explore the island</li>
                  <li>✓ <strong>Swim: 2.5 km</strong></li>
                  <li>✓ Snorkelling session</li>
                  <li>✓ Easy recovery + rest</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Wednesday 30th -->
        <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div class="card-body">
            <div class="flex flex-col md:flex-row gap-4 items-start">
              <div class="badge badge-lg bg-tropical-teal text-white border-none font-semibold min-w-[140px]">WED SEP 30</div>
              <div class="flex-1">
                <h3 class="card-title text-2xl mb-3 text-baltic-blue">Snorkel / Scuba Day</h3>
                <ul class="space-y-2 text-base">
                  <li>✓ Snorkel and/or scuba</li>
                  <li>✓ Dive boat trip to multiple locations around the island</li>
                  <li>✓ Dinner at the beach</li>
                  <li>✓ Night boat experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Thursday 1st -->
        <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div class="card-body">
            <div class="flex flex-col md:flex-row gap-4 items-start">
              <div class="badge badge-lg bg-tropical-teal text-white border-none font-semibold min-w-[140px]">THU OCT 1</div>
              <div class="flex-1">
                <h3 class="card-title text-2xl mb-3 text-baltic-blue">Recce Swim + PIR Turtle Beach</h3>
                <ul class="space-y-2 text-base">
                  <li>✓ <strong>Recce swim: 4–5 km</strong></li>
                  <li>✓ Boats & kayaks session (optional)</li>
                  <li>✓ PIR visit</li>
                  <li>✓ Turtle Beach time / explore</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Friday 2nd -->
        <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div class="card-body">
            <div class="flex flex-col md:flex-row gap-4 items-start">
              <div class="badge badge-lg bg-mint-leaf text-white border-none font-semibold min-w-[140px]">FRI OCT 2</div>
              <div class="flex-1">
                <h3 class="card-title text-2xl mb-3 text-baltic-blue">Alunan to Village Swim + Briefing</h3>
                <ul class="space-y-2 text-base">
                  <li>✓ Morning swim: Alunan to Village</li>
                  <li>✓ Race briefing / prep session</li>
                  <li>✓ Dinner at PIR</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Saturday 3rd - RACE DAY -->
        <div class="card bg-gradient-to-r from-baltic-blue to-tropical-teal text-white shadow-xl hover:shadow-2xl transition-all duration-300">
          <div class="card-body">
            <div class="flex flex-col md:flex-row gap-4 items-start">
              <div class="badge badge-lg bg-[#E91E8C] text-white border-none font-semibold min-w-[140px] text-base">SAT OCT 3</div>
              <div class="flex-1">
                <h3 class="card-title text-2xl mb-3 flex items-center gap-2">
                  Race Day
                </h3>
                <ul class="space-y-2 text-base">
                  <li>✓ Early start / race prep</li>
                  <li>✓ <strong>Race event (full-day involvement)</strong></li>
                  <li>✓ Medals + post-race activities</li>
                  <li>✓ Crew dinner at Alunan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Sunday 4th -->
        <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div class="card-body">
            <div class="flex flex-col md:flex-row gap-4 items-start">
              <div class="badge badge-lg bg-mint-leaf text-white border-none font-semibold min-w-[140px]">SUN OCT 4</div>
              <div class="flex-1">
                <h3 class="card-title text-2xl mb-3 text-baltic-blue">Recovery & Celebration</h3>
                <ul class="space-y-2 text-base">
                  <li>✓ Recovery day / free time</li>
                  <li>✓ Relax + optional gentle swim</li>
                  <li>✓ Sunset cruise</li>
                  <li>✓ Yacht trip experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Monday 5th -->
        <div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div class="card-body">
            <div class="flex flex-col md:flex-row gap-4 items-start">
              <div class="badge badge-lg bg-tropical-teal text-white border-none font-semibold min-w-[140px]">MON OCT 5</div>
              <div class="flex-1">
                <h3 class="card-title text-2xl mb-3 text-baltic-blue">Final Swim + Departure</h3>
                <ul class="space-y-2 text-base">
                  <li>✓ Morning swim (easy / fun session)</li>
                  <li>✓ Lunch with crew</li>
                  <li>✓ Depart island / travel home</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Additional Info -->
      <div class="alert alert-info mt-12 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <h3 class="font-bold text-lg">Planning Your Trip</h3>
          <p class="text-sm">We recommend arriving on Monday, September 28th to make the most of the full experience. The official race is on Saturday, October 3rd, with optional activities before and after.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Accommodation Section -->
<section id="accommodation" class="py-20 bg-gradient-to-b from-tea-green/30 to-light-green/20 relative overflow-hidden">
  <div class="container mx-auto px-4 relative z-10">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-baltic-blue">
      Accommodation
    </h2>
    <p class="text-center text-lg mb-12 text-gray-600">
      Included in your package - Stay at the stunning Alunan Resort
    </p>

    <div class="max-w-6xl mx-auto">
      <!-- Main Resort Card with Video Background -->
      <div class="card bg-base-100 shadow-2xl overflow-hidden mb-8">
        <div class="relative h-[400px] md:h-[500px]">
          <!-- Vimeo Video Background -->
          <div class="absolute inset-0">
            <iframe
              src="https://player.vimeo.com/video/1045914033?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
              class="w-full h-full object-cover border-0"
              allow="autoplay; fullscreen"
              title="Alunan Resort Video"
            ></iframe>
          </div>
          <!-- Overlay for text readability -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <!-- Content Overlay -->
          <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <h3 class="text-3xl md:text-4xl font-bold mb-2">Alunan Resort</h3>
            <p class="text-lg md:text-xl mb-4">Your Home in Paradise</p>
            <div class="flex flex-wrap gap-4 items-center">
              <a
                href="https://alunanresort.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="btn bg-white hover:bg-gray-100 text-baltic-blue border-none shadow-lg"
              >
                Visit Resort Website
              </a>
              <a
                href="https://www.tripadvisor.com.au/Hotel_Review-g304004-d7318153-Reviews-Alunan_Resort-Pulau_Perhentian_Kecil_Perhentian_Islands_Terengganu.html"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-outline text-white border-white hover:bg-white hover:text-baltic-blue shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                TripAdvisor Reviews
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Resort Features Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <div class="text-4xl mb-2">🏊</div>
            <h4 class="card-title text-lg">Infinity Pool</h4>
            <p class="text-sm">Cliff-edge pool with sweeping sea views</p>
          </div>
        </div>

        <div class="card bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <div class="text-4xl mb-2">🍽️</div>
            <h4 class="card-title text-lg">All-Inclusive Dining</h4>
            <p class="text-sm">Bayu Restaurant with bottomless drinks</p>
          </div>
        </div>

        <div class="card bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <div class="text-4xl mb-2">🏖️</div>
            <h4 class="card-title text-lg">Private Beach Access</h4>
            <p class="text-sm">Direct access to pristine white sand beaches</p>
          </div>
        </div>

        <div class="card bg-base-100 shadow-xl">
          <div class="card-body items-center text-center">
            <div class="text-4xl mb-2">🤿</div>
            <h4 class="card-title text-lg">Water Activities</h4>
            <p class="text-sm">Snorkeling, kayaking, paddleboarding included</p>
          </div>
        </div>
      </div>

      <!-- Package Inclusions -->
      <div class="card bg-gradient-to-r from-baltic-blue to-tropical-teal text-white shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-2xl md:text-3xl justify-center mb-6">Package Inclusions</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-bold text-lg mb-3">Accommodation:</h4>
              <ul class="space-y-2">
                <li>✓ Serenity Suites or Family Pool View Villas</li>
                <li>✓ Rooftop balcony with sun loungers</li>
                <li>✓ Minibar, Wi-Fi, reef-safe toiletries</li>
                <li>✓ Scheduled boat transfers from Kuala Besut</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-lg mb-3">Activities & Amenities:</h4>
              <ul class="space-y-2">
                <li>✓ All meals and bottomless drinks</li>
                <li>✓ Unlimited snorkeling trips with gear</li>
                <li>✓ Sunset cruise with canapés & cocktails</li>
                <li>✓ Access to kayaks, paddleboards & more</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- TripAdvisor Highlight -->
      <div class="alert bg-base-100 shadow-xl mt-8">
        <div class="flex items-start gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-mint-leaf flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          <div class="flex-1">
            <h4 class="font-bold text-lg mb-2">Highly Rated on TripAdvisor</h4>
            <p class="text-sm mb-3">
              Alunan Resort is consistently praised for its stunning location, exceptional service, and pristine facilities.
              Guests rave about the infinity pool, delicious food, and the perfect blend of relaxation and adventure.
            </p>
            <a
              href="https://www.tripadvisor.com.au/Hotel_Review-g304004-d7318153-Reviews-Alunan_Resort-Pulau_Perhentian_Kecil_Perhentian_Islands_Terengganu.html"
              target="_blank"
              rel="noopener noreferrer"
              class="link link-hover text-tropical-teal font-semibold"
            >
              Read reviews on TripAdvisor →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Travel Section -->
<section id="travel" class="py-20 bg-base-100">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-baltic-blue">
      How to Get There
    </h2>
    <p class="text-center text-lg mb-12 text-gray-600">
      Your journey to paradise - Getting to Alunan Resort, Perhentian Islands
    </p>

    <div class="max-w-6xl mx-auto space-y-8">

      <!-- Overview Card -->
      <div class="card bg-gradient-to-br from-tropical-teal/10 to-mint-leaf/10 shadow-xl">
        <div class="card-body">
          <p class="text-lg leading-relaxed text-center">
            Alunan Resort is located on the beautiful Perhentian Islands, accessible via boat from Kuala Besut Jetty on the mainland.
            Plan your journey carefully to ensure smooth transfers and maximum enjoyment of your swim camp experience.
          </p>
        </div>
      </div>

      <!-- Step-by-Step Guide -->
      <div class="space-y-6">

        <!-- Step 1: Fly to Malaysia -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <div class="flex items-start gap-4">
              <div class="badge badge-lg bg-baltic-blue text-white border-none font-bold text-xl min-w-[50px] h-[50px] flex items-center justify-center">1</div>
              <div class="flex-1">
                <h3 class="card-title text-2xl mb-3 text-baltic-blue">Fly to Kuala Lumpur (KUL)</h3>
                <p class="text-base mb-3">
                  Most international travelers arrive at Kuala Lumpur International Airport (KLIA).
                  From major Australian cities, direct flights are available with Malaysia Airlines, AirAsia, and other carriers.
                </p>
                <div class="bg-base-100 p-4 rounded-lg">
                  <p class="font-semibold mb-2">Flight Options from Melbourne:</p>
                  <ul class="space-y-2 text-sm">
                    <li><strong>Malaysia Airlines</strong> - Direct flights departing 11:30 PM, arriving KL ~6:00 AM (overnight)</li>
                    <li><strong>Singapore Airlines</strong> - Via Singapore (option to break journey in Singapore)</li>
                    <li>Day flights are also available from Melbourne to KL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2: Domestic Flight -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <div class="flex items-start gap-4">
              <div class="badge badge-lg bg-tropical-teal text-white border-none font-bold text-xl min-w-[50px] h-[50px] flex items-center justify-center">2</div>
              <div class="flex-1">
                <h3 class="card-title text-2xl mb-3 text-tropical-teal">Connect to Kota Bharu (KBR)</h3>
                <p class="text-base mb-3">
                  From Kuala Lumpur, take a domestic flight to Sultan Ismail Petra Airport (Kota Bharu).
                  This is the closest airport to the Perhentian Islands, approximately 45 minutes drive from Kuala Besut Jetty.
                </p>
                <div class="bg-base-100 p-4 rounded-lg">
                  <ul class="space-y-2 text-sm">
                    <li><strong>Flight Duration:</strong> ~1 hour from KL to Kota Bharu</li>
                    <li><strong>Recommended Connection:</strong> Allow 2+ hours layover in KL</li>
                    <li><strong>Example:</strong> KL departure 8:00 AM → Kota Bharu arrival 9:30 AM</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3: Transfer to Jetty -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <div class="flex items-start gap-4">
              <div class="badge badge-lg bg-mint-leaf text-white border-none font-bold text-xl min-w-[50px] h-[50px] flex items-center justify-center">3</div>
              <div class="flex-1">
                <h3 class="card-title text-2xl mb-3 text-mint-leaf">Transfer to Kuala Besut Jetty</h3>
                <p class="text-base mb-3">
                  From Kota Bharu Airport, travel to Kuala Besut Jetty (approximately 45 minutes - 1 hour drive).
                  <strong>Airport transfer is included in your package!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 4: Boat to Island -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <div class="flex items-start gap-4">
              <div class="badge badge-lg bg-[#E91E8C] text-white border-none font-bold text-xl min-w-[50px] h-[50px] flex items-center justify-center">4</div>
              <div class="flex-1">
                <h3 class="card-title text-2xl mb-3" style="color: #E91E8C;">Boat to Perhentian Islands</h3>
                <p class="text-base mb-3">
                  Scheduled boat transfers operate daily from Kuala Besut Jetty to the Perhentian Islands.
                  <strong>Alunan Resort includes boat transfers in your package!</strong>
                </p>
                <div class="bg-base-100 p-4 rounded-lg">
                  <ul class="space-y-2 text-sm">
                    <li><strong>Boat Schedule:</strong> Departures from 8:00 AM - 4:30 PM</li>
                    <li><strong>Journey Time:</strong> ~30-45 minutes</li>
                    <li><strong>Return Boats:</strong> 8:00 AM, 12:00 PM, 4:00 PM from the island</li>
                    <li><strong>Included:</strong> Scheduled transfers included in your swim camp package</li>
                    <li><strong>Note:</strong> Weather dependent - monsoon season (Nov-Feb) may affect schedules</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Recommended Timing -->
      <div class="card bg-gradient-to-r from-baltic-blue to-tropical-teal text-white shadow-xl">
        <div class="card-body">
          <h3 class="card-title text-2xl md:text-3xl justify-center mb-6">Recommended Travel Times</h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="font-bold text-xl mb-4 flex items-center gap-2">
                <span>Arrival</span>
              </h4>
              <ul class="space-y-3 text-base">
                <li><strong>Recommended Arrival:</strong> Monday, September 28, 2026</li>
                <li><strong>Latest Arrival:</strong> Before 3:00 PM on Sept 28 to catch afternoon boat</li>
                <li><strong>Ideal Flight:</strong> Arrive Kota Bharu by 12:00 PM to allow time for transfers</li>
                <li><strong>Tip:</strong> Arriving a day earlier (Sept 27) gives you buffer time and helps with jet lag</li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold text-xl mb-4 flex items-center gap-2">
                <span>Departure</span>
              </h4>
              <ul class="space-y-3 text-base">
                <li><strong>Departure Day:</strong> Monday, October 5, 2026 (after lunch)</li>
                <li><strong>Morning Boat:</strong> 8:00 AM or 12:00 PM from island</li>
                <li><strong>Earliest Flight:</strong> Don't book flights before 3:00 PM from Kota Bharu</li>
                <li><strong>Weather Buffer:</strong> Allow extra time for potential boat delays</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Important Tips -->
      <div class="grid md:grid-cols-2 gap-6">
        <div class="alert bg-base-200 shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 class="font-bold">Packing Tips</h3>
              <p class="text-sm mt-2">Keep essentials in carry-on. Boats have limited luggage space. Pack reef-safe sunscreen, swimwear, and light clothing.</p>
            </div>
          </div>
        </div>

        <div class="alert bg-base-200 shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-warning shrink-0 w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
            <div>
              <h3 class="font-bold">Weather Considerations</h3>
              <p class="text-sm mt-2">October is ideal for swimming. Boat schedules depend on weather. Always allow buffer time for your return journey.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- More Information -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body text-center">
          <h3 class="text-xl font-bold mb-4 text-baltic-blue">Need More Information?</h3>
          <p class="mb-4">For detailed travel assistance and transfer arrangements, visit the Alunan Resort website or contact our team.</p>
          <div class="flex flex-wrap gap-4 justify-center">
            <a
              href="https://alunanresort.com/how-to-get-to-alunan-resort-perhentian/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn bg-tropical-teal hover:bg-[#2d8a8c] text-white border-none"
            >
              Visit Alunan Travel Guide
            </a>
            <a href="#about" class="btn btn-outline border-baltic-blue text-baltic-blue hover:bg-baltic-blue hover:text-white">
              Contact Event Organizers
            </a>
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
      <a href="/register.html" class="btn btn-lg bg-white hover:bg-gray-100 text-baltic-blue border-none font-semibold px-8 shadow-none">Register Now</a>
    </div>
    <div class="text-lg">
      <p>Email: <a href="mailto:info@swimperhentian.com" class="underline">info@swimperhentian.com</a></p>
    </div>
  </div>
</section>


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
</Auth>
