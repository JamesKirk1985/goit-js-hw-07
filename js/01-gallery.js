import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const markup = [];
galleryItems.map(markupCreateFunction);
function markupCreateFunction(obj) {
  markup.push(`
  <li class="gallery__item">
  <a class="gallery__link" href="${obj.original}">
  
  <img
  class="gallery__image"
  src="${obj.preview}"
  data-source="${obj.original}"
   alt="${obj.description}" 
   />
  </a>
  </li>`);
}
gallery.insertAdjacentHTML("afterbegin", markup.join(""));
gallery.addEventListener("click", handlerClick);
function handlerClick(evt) {
  evt.preventDefault();
  const instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}" width="800" height="600">
  `);
  instance.show();
}
