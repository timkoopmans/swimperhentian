<script lang="ts">
  // Gallery images
  const images = [
    { src: '/gallery/swim-01.jpeg', alt: 'Swim Perhentian'},
    { src: '/gallery/swim-02.jpeg', alt: 'Swim Perhentian'},
    { src: '/gallery/swim-03.jpeg', alt: 'Swim Perhentian'},
    { src: '/gallery/swim-04.jpeg', alt: 'Swim Perhentian'},
    { src: '/gallery/swim-05.jpeg', alt: 'Swim Perhentian'},
    { src: '/gallery/swim-06.jpeg', alt: 'Swim Perhentian'},
    { src: '/gallery/swim-07.jpeg', alt: 'Swim Perhentian'},
    { src: '/gallery/swim-08.jpeg', alt: 'Swim Perhentian'},
    { src: '/gallery/swim-09.jpeg', alt: 'Swim Perhentian'},
    { src: '/gallery/swim-10.jpeg', alt: 'Swim Perhentian'},
    { src: '/gallery/swim-11.jpeg', alt: 'Swim Perhentian'},
    { src: '/gallery/swim-12.jpeg', alt: 'Swim Perhentian'},
    { src: '/gallery/swim-14.jpeg', alt: 'Swim Perhentian'},
    { src: '/gallery/swim-15.jpeg', alt: 'Swim Perhentian'},
    { src: '/gallery/swim-16.jpeg', alt: 'Swim Perhentian'},
    { src: '/gallery/swim-17.jpeg', alt: 'Swim Perhentian'},
    { src: '/gallery/swim-18.jpeg', alt: 'Swim Perhentian'},
    { src: '/gallery/swim-19.jpeg', alt: 'Swim Perhentian'},
    { src: '/gallery/swim-20.jpeg', alt: 'Swim Perhentian'},
    { src: '/gallery/swim-21.jpeg', alt: 'Swim Perhentian'},
  ];

  let selectedImage: { src: string; alt?: string } | null = null;

  function openModal(src: string, alt?: string) {
    selectedImage = { src, alt };
    (document.getElementById('gallery_modal') as HTMLDialogElement)?.showModal();
  }

  function closeModal() {
    selectedImage = null;
    (document.getElementById('gallery_modal') as HTMLDialogElement)?.close();
  }
</script>

<section id="gallery" class="py-20 bg-base-100">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-baltic-blue">
      Gallery
    </h2>
    <p class="text-center text-lg mb-12 text-gray-600">
      Relive the excitement and beauty of past Swim Perhentian events
    </p>

    <!-- Images Section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {#each images as image}
        <div
          class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden group"
          on:click={() => openModal(image.src, image.alt)}
          on:keypress={(e) => e.key === 'Enter' && openModal(image.src, image.alt)}
          role="button"
          tabindex="0"
        >
          <figure class="relative overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </figure>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Modal for full-size view -->
<dialog id="gallery_modal" class="modal">
  <div class="modal-box max-w-5xl bg-base-200">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 bg-black/50 text-white hover:bg-black/70">✕</button>
    </form>

    {#if selectedImage}
      <div class="w-full">
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          class="w-full h-auto max-h-[80vh] object-contain"
        />
      </div>
    {/if}
  </div>
  <form method="dialog" class="modal-backdrop">
    <button on:click={closeModal}>close</button>
  </form>
</dialog>

<style>
  /* Ensure smooth scrolling and proper modal behavior */
  :global(body:has(dialog[open])) {
    overflow: hidden;
  }
</style>

