<script lang="ts">
  // You can replace this with your actual Google Form embed URL
  // To get this: Create a Google Form -> Send -> Embed HTML -> Copy the src URL
  export let formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdd1c8FIVu3dXOg64gPkmIIv-utySgBx4EnG54219ROGInwVA/viewform?embedded=true";
</script>

<div class="py-20 bg-base-100" id="registration-form">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-baltic-blue">
      Register for Swim Perhentian 2026
    </h2>
    <p class="text-center text-lg mb-8 text-gray-600">
      Fill out the form below to secure your spot in this incredible event
    </p>

    <div class="max-w-4xl mx-auto">
      <div class="card bg-base-200 shadow-xl">
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
</div>

