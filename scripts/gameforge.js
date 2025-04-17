// Greeting
const hour = new Date().getHours();
const greet = hour < 12 ? "Good morning, Gamer!" : "Welcome back to GameForge!";
document.querySelector('.intro')?.insertAdjacentHTML('afterbegin', `<h3>${greet}</h3>`);

// Dynamic Year & Last Modified
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

// Responsive Menu Toggle
const menuBtn = document.getElementById('menu');
const navList = document.querySelector('nav ul');
menuBtn.addEventListener('click', () => {
  navList.classList.toggle('open');
});

// Subscription Form
const form = document.getElementById('subscribeForm');
form?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  localStorage.setItem('subscribedEmail', email);
  document.getElementById('thanksMessage').textContent = `Thanks for subscribing, ${email}!`;
  form.reset();
});

// Reviews Section
const reviews = [
  { name: "Logitech G Pro X Superlight", type: "Mouse", rating: 4.8 },
  { name: "Razer BlackWidow V3", type: "Keyboard", rating: 4.5 },
  { name: "SteelSeries Arctis 7", type: "Headset", rating: 4.7 },
  { name: "Alienware x17 R2", type: "Laptop", rating: 4.6 }
];

const reviewsContainer = document.getElementById('reviewsContainer');
const searchInput = document.getElementById('searchInput');

if (reviewsContainer && searchInput) {
  function renderReviews(filter = "") {
    reviewsContainer.innerHTML = "";
    const filtered = reviews.filter(r => r.name.toLowerCase().includes(filter.toLowerCase()));
    filtered.forEach(review => {
      reviewsContainer.innerHTML += `
        <div class="review-card">
          <h3>${review.name}</h3>
          <p>Type: ${review.type}</p>
          <p>Rating: ${review.rating}/5</p>
        </div>
      `;
    });
  }

  renderReviews();
  searchInput.addEventListener('input', (e) => renderReviews(e.target.value));
}

// Comment Section
const commentForm = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');
const storedComments = JSON.parse(localStorage.getItem('comments') || '[]');

function displayComment({ username, comment }) {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${username}</strong>: ${comment}`;
  commentList.appendChild(li);
}

storedComments.forEach(displayComment);

commentForm?.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const comment = document.getElementById('comment').value;
  const commentObj = { username, comment };
  storedComments.push(commentObj);
  localStorage.setItem('comments', JSON.stringify(storedComments));
  displayComment(commentObj);
  commentForm.reset();
});
