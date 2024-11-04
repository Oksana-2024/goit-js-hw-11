export function createGallery(array, element, gallery) {
  const imagesFragment = document.createDocumentFragment();
  for (const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } of array) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    const linkItem = document.createElement('a');
    linkItem.classList.add('link-item');
    const img = document.createElement('img');
    const box = document.createElement('div');
    box.classList.add('desc-container');

    linkItem.href = largeImageURL;
    img.src = webformatURL;
    img.alt = tags;
    img.width = '360';
    img.height = '200';
    listItem.appendChild(linkItem);
    linkItem.appendChild(img);
    linkItem.appendChild(box);

    for (const [text, value] of [
      ['likes', likes],
      ['views', views],
      ['comments', comments],
      ['downloads', downloads],
    ]) {
      const container = document.createElement('div');
      const title = document.createElement('p');
      title.classList.add('title');
      const titleValue = document.createElement('p');
      titleValue.classList.add('title-value');

      box.appendChild(container);
      container.appendChild(title);
      container.appendChild(titleValue);
      title.textContent = text;
      titleValue.textContent = value;
    }
    imagesFragment.appendChild(listItem);
  }
  element.innerHTML = '';
  element.append(imagesFragment);

  gallery.refresh();
}
