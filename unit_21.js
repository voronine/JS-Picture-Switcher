

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images
const imgMax = document.querySelector('.div-12-max img');

const next = document.querySelectorAll('.next');
next[0].onclick = nextFunction;

const prev = document.querySelectorAll('.prev');
prev[0].onclick = prevFunction;

const reset = document.querySelector('.reset');
reset.onclick = resetFunction;

function nextFunction() {
  if (count + 1 < images.length) {
    count++
  } else {
    count = 0;
  }

  images.forEach(element => {
    element.classList.remove('active-img')
  });
  images[count].classList.add('active-img');
  imgMax.src = images[count].src;
}

function prevFunction() {
  if (count - 1 < 0) {
    count = images.length;
  }
  count--

  images.forEach(element => {
    element.classList.remove('active-img')
  });
  images[count].classList.add('active-img');
  imgMax.src = images[count].src;
}

function resetFunction() {
  count = 0;

  images.forEach(element => {
    element.classList.remove('active-img');
  });
  images[count].classList.add('active-img');
  imgMax.src = images[count].src;
}