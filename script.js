console.log("Books catalog loaded.");
const container = document.querySelector(".book-container");

books.forEach(book => {
  const div = document.createElement("div");
  div.className = "book";
  div.innerHTML = `
    <h3>${book.title}</h3>
    <p><strong>Author:</strong> ${book.author}</p>
    <p><strong>Price:</strong> ₹${book.price}</p>
    <p><strong>Stock:</strong> ${book.stock}</p>
    <button>Add to Cart</button>
  `;
  container.appendChild(div);
});
