import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);
const gallery = document.querySelector('.gallery');

//render gallery
createGallery();
function createGallery() {
  const imgs = [];
  galleryItems.forEach(e => {
    const { preview, original, description } = e;
    const item = document.createElement('a');
    item.classList.add('gallery__link');
    item.href = `${original}`;
    imgs.push(item);
    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.src = `${preview}`;
    img.alt = `${description}`;
    item.append(img);
  });
  gallery.append(...imgs);
}

//SimpleLightbox

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
