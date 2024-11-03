// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { API_KEY, BASE_URL, fetchData } from './js/pixabay-api';
import { createGallery } from './js/render-functions';

const form = document.querySelector('form');
const list = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.querySelector('input');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (!input.value.trim()) {
    return;
  }
  const query = new URLSearchParams({
    key: API_KEY,
    q: input.value.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const loader = document.querySelector(".loader")
  loader.classList.remove("hidden")
  fetchData(`${BASE_URL}?${query}`)
  .then(response => {
    if (response.hits.length < 1) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        color: '#ef4040',
        messageColor: '#fff',
        theme: 'dark',
      });
      return;
    }
    createGallery(response.hits, list);
  })
  .finally(() => loader.classList.add("hidden"))
}
