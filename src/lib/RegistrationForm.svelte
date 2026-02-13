<script lang="ts">
  // You can replace this with your actual Google Form embed URL
  // To get this: Create a Google Form -> Send -> Embed HTML -> Copy the src URL
  export let formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdd1c8FIVu3dXOg64gPkmIIv-utySgBx4EnG54219ROGInwVA/viewform?embedded=true";
</script>

<div class="container mx-auto px-4 py-20">
  <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-baltic-blue">
    Register for Swim Perhentian 2026
  </h2>
  <p class="text-center text-lg mb-8 text-gray-600">
    Fill out the form below to secure your spot in this incredible event
  </p>

  <div class="max-w-4xl mx-auto">
    <!-- Pricing Section -->
    <div class="card bg-gradient-to-r from-baltic-blue to-tropical-teal text-white shadow-xl mb-8">
      <div class="card-body">
        <h3 class="card-title text-3xl justify-center mb-6">Package Price</h3>
        <div class="text-center mb-6">
          <p class="text-5xl font-bold mb-2">A$3,988</p>
          <p class="text-lg opacity-90">per person (twin share)</p>
        </div>

        <!-- Payment Terms -->
        <div class="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
          <h4 class="font-bold text-xl mb-3 text-center">Payment Terms</h4>
          <div class="space-y-2 text-base">
            <p><strong>Deposit:</strong> A$500 non-refundable deposit required to secure your spot</p>
            <p><strong>Balance Due:</strong> Invoice for remainder will be due on 1st July 2026</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Package Inclusions -->
    <div class="card bg-base-100 shadow-xl mb-8">
      <div class="card-body">
        <h3 class="card-title text-3xl text-baltic-blue mb-6 justify-center">What's Included</h3>

        <div class="grid md:grid-cols-2 gap-6">
          <!-- Transportation -->
          <div>
            <h4 class="font-bold text-xl text-tropical-teal mb-3">Transportation</h4>
            <ul class="space-y-2 text-base">
              <li class="flex items-start gap-2">
                <span class="text-mint-leaf font-bold">✓</span>
                <span>Transfers from Kota Bharu Airport to Kuala Besut Jetty</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mint-leaf font-bold">✓</span>
                <span>Boat transfers: Kuala Besut Jetty to Perhentian Islands (return)</span>
              </li>
            </ul>
          </div>

          <!-- Accommodation -->
          <div>
            <h4 class="font-bold text-xl text-tropical-teal mb-3">Accommodation</h4>
            <ul class="space-y-2 text-base">
              <li class="flex items-start gap-2">
                <span class="text-mint-leaf font-bold">✓</span>
                <span>7 nights at Alunan Resort (28 Sep - 5 Oct)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mint-leaf font-bold">✓</span>
                <span>Twin share accommodation (single rooms available on request at additional cost)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mint-leaf font-bold">✓</span>
                <span>Shared room on Pulau Perhentian Besar for race day facilities</span>
              </li>
            </ul>
          </div>

          <!-- Meals -->
          <div>
            <h4 class="font-bold text-xl text-tropical-teal mb-3">Meals</h4>
            <ul class="space-y-2 text-base">
              <li class="flex items-start gap-2">
                <span class="text-mint-leaf font-bold">✓</span>
                <span>Daily breakfast throughout your stay</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mint-leaf font-bold">✓</span>
                <span>Daily dinner throughout your stay</span>
              </li>
            </ul>
          </div>

          <!-- Activities & Race -->
          <div>
            <h4 class="font-bold text-xl text-tropical-teal mb-3">Activities & Race Entry</h4>
            <ul class="space-y-2 text-base">
              <li class="flex items-start gap-2">
                <span class="text-mint-leaf font-bold">✓</span>
                <span>Day trip to Redang Island (including boat transfer)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mint-leaf font-bold">✓</span>
                <span>Sunset cruise experience</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mint-leaf font-bold">✓</span>
                <span>Snorkel trip with equipment</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mint-leaf font-bold">✓</span>
                <span>All race entries and insurance costs</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-mint-leaf font-bold">✓</span>
                <span>Event public liability insurance</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Important Note -->
        <div class="alert alert-info mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h3 class="font-bold">Important Information</h3>
            <p class="text-sm">
              Package price is per person based on twin share accommodation. Single room upgrades are available upon request at additional cost.
              Please review our <a href="/terms.html" class="link font-semibold">Terms & Conditions</a> before registering.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <!-- Google Form Embed -->
        <div class="w-full" style="min-height: 800px;">
          <iframe
            src={formUrl}
            width="100%"
            height="800"
            title="Registration Form"
            class="border-0"
          >
            Loading…
          </iframe>
        </div>

        <!-- Alternative: Direct instructions if no form URL set -->
        {#if formUrl.includes('YOUR_FORM_ID')}
        <div class="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h3 class="font-bold">Setup Required</h3>
            <div class="text-sm">
              <p class="mb-2">To enable registration, create a Google Form and update the formUrl in RegistrationForm.svelte</p>
              <p>Or contact us directly at: <a href="mailto:info@swimperhentian.com" class="link">info@swimperhentian.com</a></p>
            </div>
          </div>
        </div>
        {/if}
      </div>
    </div>

    <!-- Contact Info -->
    <div class="text-center mt-8">
      <p class="text-lg">
        Need help? Contact us at:
        <a href="mailto:info@swimperhentian.com" class="link text-baltic-blue font-semibold">
          info@swimperhentian.com
        </a>
      </p>
    </div>
  </div>
</div>

