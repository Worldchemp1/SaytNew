// Kontakt formasini ishlov berish
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    alert(`Xabar yuborildi:\nIsm: ${name}\nXabar: ${message}`);
  });

// Buyurtma formasini ishlov berish
document
  .getElementById("order-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const item = document.getElementById("order-item").value;
    const quantity = document.getElementById("order-quantity").value;
    alert(`Buyurtma berildi:\nTaom: ${item}\nMiqdor: ${quantity}`);
  });

  // Buyurtma formasini ishlov berish
document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const item = document.getElementById('order-item').value;
    const quantity = document.getElementById('order-quantity').value;
    const address = document.getElementById('order-address').value;
    alert(`Buyurtma berildi:\nTaom: ${item}\nMiqdor: ${quantity}\nManzil: ${address}`);
});

// Sharh formasini ishlov berish
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('review-name').value;
    const message = document.getElementById('review-message').value;
    const reviewsList = document.getElementById('reviews-list');
    const newReview = document.createElement('div');
    newReview.innerHTML = `<strong>${name}:</strong> <p>${message}</p>`;
    reviewsList.appendChild(newReview);
    document.getElementById('review-form').reset();
});
