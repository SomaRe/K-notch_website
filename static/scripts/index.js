import PhotoSwipeLightbox from '/static/scripts/photoswipe-lightbox.esm.min.js';

function initGallery(galleryId) {
    const gallery = new PhotoSwipeLightbox({
      gallery: `#${galleryId}`,
      children: 'figure',
      pswpModule: () => import('/static/scripts/photoswipe.esm.min.js')
    });
    gallery.init();
  }
  
  // Initialize galleries
  initGallery('traditional-gallery');
  initGallery('vogue-gallery');
  initGallery('absolute-gallery');