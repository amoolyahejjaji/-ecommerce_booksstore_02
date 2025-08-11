console.log("Books catalog loaded.");
<<<<<<< HEAD
const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 250,
    stock: 10
  },
  {
    id: 2,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 300,
    stock: 5
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    price: 350,
    stock: 7
  },
  {
    id: 4,
    title: "Deep Work",
    author: "Cal Newport",
    price: 280,
    stock: 6
  },
  {
    id: 5,
    title: "Ikigai",
    author: "Héctor García",
    price: 220,
    stock: 2
  }

  {
    id: 6,
    title: "harry potter",
    author: "rowling",
    price: 2500,
    stock: 1
  },
  {
    id: 7,
    title: "outsiders",
    author: "hinton",
    price: 350,
    stock: 50
  },
  {
    id: 8,
    title: "a man called ove",
    author: "backman",
    price: 359,
    stock: 70
  },
  {
    id: 9,
    title: "too good to be true",
    author: "mostly sane",
    price: 180,
    stock: 60
  },
  {
    id: 10,
    title: "the hating game",
    author: "sally thorne",
    price: 290,
    stock: 20
  }
];
=======
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
>>>>>>> books-display
