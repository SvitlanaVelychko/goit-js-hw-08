import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = onCreateGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

new SimpleLightbox('.gallery a', {
    captions: true,
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: '250',
});

function onCreateGalleryItemsMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}">
        </a>`;
        })
        .join('');
}