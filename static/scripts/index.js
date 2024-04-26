import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe/dist/photoswipe-lightbox.esm.js';

function initGallery(galleryId) {
    const gallery = new PhotoSwipeLightbox({
      gallery: `#${galleryId}`,
      children: 'figure',
      pswpModule: () => import('https://unpkg.com/photoswipe')
    });
    gallery.init();
  }
  
  // Initialize galleries
  initGallery('traditional-gallery');
  initGallery('vogue-gallery');
  initGallery('absolute-gallery');