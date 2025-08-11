console.log("Books catalog loaded.");
if (book.stock < 5) {
  div.innerHTML += `<p style="color:red;">Only few left!</p>`;
}
