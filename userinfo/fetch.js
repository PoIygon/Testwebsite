const wrapper = document.querySelector('.wrapper');

function createContent(data) {
  const content = `
    <img src="${data.images}" alt="PoIygon" width="50">
    <span>${data.username}</span>
    <br>
    <span>${data.country}</span>
  `;
  wrapper.insertAdjacentHTML('beforeend', content);
}

fetch('https://api.scratch.mit.edu/users/poiygon')
  .then(response => response.json())
  .then(data => createContent(data))
  .catch((error) => console.log(error));