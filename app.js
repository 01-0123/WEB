const reviewsContainer = document.getElementById('reviews-container');

function generateReviewCards() {
  reviewsContainer.innerHTML = '';

  window.reviewData.forEach(review => {
    const card = document.createElement('div');
    card.classList.add('review-card');

    const name = document.createElement('h3');
    name.textContent = review.name;
    card.appendChild(name);

    const date = document.createElement('p');
    date.classList.add('review-date');
    date.textContent = review.date;
    card.appendChild(date);

    const rating = document.createElement('p');
    rating.classList.add('review-rating');
    rating.textContent = 'Rating: ';
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('span');
      star.dataset.value = i <= review.rating;
      star.textContent = star.dataset.value === "true" ? "★" : "☆";
      rating.appendChild(star);
    }
    card.appendChild(rating);

    const text = document.createElement('p');
    text.classList.add('review-text');
    text.textContent = review.text;
    card.appendChild(text);

    reviewsContainer.appendChild(card);
  });
}

document.getElementById('review-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('review-name').value;
  const date = document.getElementById('review-date').value;
  const rating = parseInt(document.getElementById('review-rating').value);
  const text = document.getElementById('review-text').value;

  const newReview = { name, date, rating, text };
  window.reviewData.push(newReview);

  generateReviewCards();

  event.target.reset();
});


window.addEventListener('load', generateReviewCards);
