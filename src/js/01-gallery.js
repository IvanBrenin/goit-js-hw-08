import { galleryItems } from './gallery-items.js';
import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const refs = {
    gallery: document.querySelector('div.gallery'),
}

const gallery = galleryItems.map(item => 
   `<a class="gallery__item" href="${item.original}"><img src="${item.preview}" alt="${item.description}" class="gallery__image"></img></a>`
).join("");

refs.gallery.insertAdjacentHTML('beforeend', gallery)
const lightbox = new simpleLightbox('.gallery a', {'captionDelay': 250, 'captionsData': 'alt'});