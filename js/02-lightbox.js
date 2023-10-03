import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const markup = [];
galleryItems.map(markupCreateFunction);
function markupCreateFunction(obj) {
  markup.push(`
  <li class="gallery__item">
   <a class="gallery__link" href="${obj.original}">
      <img class="gallery__image" src="${obj.preview}" alt="${obj.description}" />
   </a>
</li>
  `);
}
gallery.insertAdjacentHTML("afterbegin", markup.join(""));
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
