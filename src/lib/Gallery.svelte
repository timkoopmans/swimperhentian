<script lang="ts">
  // Gallery images and videos
  const images = [
    { src: '/gallery/swim-01.jpeg', alt: 'Swim Perhentian Event 1' },
    { src: '/gallery/swim-02.jpeg', alt: 'Swim Perhentian Event 2' },
    { src: '/gallery/swim-03.jpeg', alt: 'Swim Perhentian Event 3' },
    { src: '/gallery/swim-04.jpeg', alt: 'Swim Perhentian Event 4' },
    { src: '/gallery/swim-05.jpeg', alt: 'Swim Perhentian Event 5' },
    { src: '/gallery/swim-06.jpeg', alt: 'Swim Perhentian Event 6' },
    { src: '/gallery/swim-07.jpeg', alt: 'Swim Perhentian Event 7' },
    { src: '/gallery/swim-08.jpeg', alt: 'Swim Perhentian Event 8' },
    { src: '/gallery/swim-09.jpeg', alt: 'Swim Perhentian Event 9' },
    { src: '/gallery/swim-10.jpeg', alt: 'Swim Perhentian Event 10' },
    { src: '/gallery/swim-11.jpeg', alt: 'Swim Perhentian Event 11' },
  ];

  const videos = [
    { src: '/gallery/swim-video-01.mp4', poster: '/gallery/swim-01.jpeg' },
    { src: '/gallery/swim-video-02.mp4', poster: '/gallery/swim-02.jpeg' },
    { src: '/gallery/swim-video-03.mp4', poster: '/gallery/swim-03.jpeg' },
    { src: '/gallery/swim-video-04.mp4', poster: '/gallery/swim-04.jpeg' },
    { src: '/gallery/swim-video-05.mp4', poster: '/gallery/swim-05.jpeg' },
  ];

  let selectedMedia: { type: 'image' | 'video'; src: string; alt?: string; poster?: string } | null = null;

  function openModal(type: 'image' | 'video', src: string, alt?: string, poster?: string) {
    selectedMedia = { type, src, alt, poster };
    (document.getElementById('gallery_modal') as HTMLDialogElement)?.showModal();
  }

  function closeModal() {
    selectedMedia = null;
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
    <div class="mb-16">
      <h3 class="text-2xl font-bold mb-6 text-tropical-teal">📸 Photos</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {#each images as image}
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden group"
            on:click={() => openModal('image', image.src, image.alt)}
            on:keypress={(e) => e.key === 'Enter' && openModal('image', image.src, image.alt)}
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

    <!-- Videos Section -->
    <div>
      <h3 class="text-2xl font-bold mb-6 text-mint-leaf">🎥 Videos</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {#each videos as video}
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden group"
            on:click={() => openModal('video', video.src, undefined, video.poster)}
            on:keypress={(e) => e.key === 'Enter' && openModal('video', video.src, undefined, video.poster)}
            role="button"
            tabindex="0"
          >
            <figure class="relative overflow-hidden">
              <video
                class="w-full h-64 object-cover"
                poster={video.poster}
                muted
                preload="metadata"
              >
                <source src={video.src} type="video/mp4">
              </video>
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </figure>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Modal for full-size view -->
<dialog id="gallery_modal" class="modal">
  <div class="modal-box max-w-5xl bg-base-200">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 bg-black/50 text-white hover:bg-black/70">✕</button>
    </form>

    {#if selectedMedia}
      <div class="w-full">
        {#if selectedMedia.type === 'image'}
          <img
            src={selectedMedia.src}
            alt={selectedMedia.alt}
            class="w-full h-auto max-h-[80vh] object-contain"
          />
        {:else if selectedMedia.type === 'video'}
          <video
            class="w-full h-auto max-h-[80vh]"
            controls
            autoplay
            poster={selectedMedia.poster}
          >
            <source src={selectedMedia.src} type="video/mp4">
          </video>
        {/if}
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

