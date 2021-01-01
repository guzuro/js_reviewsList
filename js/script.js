const reviews = [{
      id: 1,
      number: "review #1",
      img: '../img/face1.jpg',
      name: 'John Doe',
      text: `adipisicing elit. Impedit consectetur a quos ex quae
      asperiores blanditiis ea. Repellat, aperiam ex!`
   },
   {
      id: 2,
      number: "review #2",
      img: '../img/face2.jpg',
      name: 'Igor',
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit consectetur a quos ex quae
      asperiores. Repellat, aperiam ex!`
   },
   {
      id: 3,
      number: "review #3",
      img: '../img/face3.jpg',
      name: 'Maxim',
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit consectetur a quos ex quae
      asperiores blanditiis ea.`
   },
   {
      id: 4,
      number: "review #4",
      img: '../img/face4.jpg',
      name: 'Mariya',
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit consectetur a quos ex quae
      asperiores blanditiis ea. Repellat, aperiam ex!`
   },
   {
      id: 5,
      number: "review #5",
      img: '../img/face5.jpg',
      name: 'Dakota',
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. quae
      asperiores blanditiis ea. Repellat, aperiam ex!`
   },
]

let currentReview = 0;
const reviewNumber = document.getElementById('reviewId');
const authorImage = document.getElementById('authorImage');
const authorName = document.getElementById('authorName');
const authorText = document.getElementById('authorText');

const slideButtons = document.querySelectorAll('.btn');

window.addEventListener("DOMContentLoaded", function () {
   console.log('ok');
   showReview(currentReview);
});

function showReview(currentReview) {
   let review = reviews[currentReview];
   reviewNumber.innerText = review.number;
   authorImage.src = review.img;
   authorName.innerText = review.name;
   authorText.innerText = review.text;
}

slideButtons.forEach(arrow => {
   arrow.addEventListener('click', function (e) {
      if (e.target.dataset.direction === 'left') {
         slideLeft();
      } else if (e.target.dataset.direction === 'right') {
         slideRight();
      } else if (e.target.dataset.direction === 'random') {
         generateRandowReview();
      }
   })
});


function slideLeft() {
   if (currentReview <= 0) {
      currentReview = reviews.length - 1
   } else {
      currentReview = currentReview - 1
   }
   showReview(currentReview);
}

function slideRight() {
   if (currentReview >= reviews.length - 1) {
      currentReview = 0
   } else {
      currentReview = currentReview + 1
   }
   showReview(currentReview);
}

function generateRandowReview() {
   let rand = Math.floor(Math.random() * reviews.length);
   currentReview = Math.round(rand);
   showReview(currentReview);
}