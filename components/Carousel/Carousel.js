/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container');

let position = 600;

const moveLeft = () => {
  if (position <= 1200) {
    gsap.to('.caro-container', { x: (position + 1200) });
    position += 1200;
  } else {
    gsap.to('.caro-container', {x: - 1800});
    position = -1800;
  }
}

const moveRight = () => {
  if (position >= -1200) {
    gsap.to('.caro-container', { x: (position - 1200) });
    position -= 1200;
  } else {
    gsap.to('.caro-container', {x: 1800});
    position = 1800
  }
}

const createCarousel = () => {
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const rightButton = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const imgContainer = document.createElement('div');

  carousel.classList.add('carousel');
  imgContainer.classList.add('caro-container');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  leftButton.textContent = '<';
  rightButton.textContent = '>';

  img1.src = './assets/carousel/mountains.jpeg';
  img2.src = './assets/carousel/computer.jpeg';
  img3.src = './assets/carousel/trees.jpeg';
  img4.src = './assets/carousel/turntable.jpeg';

  imgContainer.append(img1, img2, img3, img4);
  carousel.append(imgContainer, leftButton, rightButton);

  rightButton.addEventListener('click', moveRight);
  leftButton.addEventListener('click', moveLeft);

  return carousel;
}

carouselContainer.append(createCarousel());
gsap.to('.caro-container', { x: 600 });