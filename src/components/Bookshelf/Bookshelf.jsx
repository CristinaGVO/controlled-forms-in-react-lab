import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setBooks([...books, newBook]);

    setNewBook({
      title: "",
      author: "",
    });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
          />

          <br />

          <label htmlFor="author">Author:</label>
          <input
            id="author"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
          />

          <br />

          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {/* ✅ Mostrar libros con map */}
        {books.map((book, index) => (
          <div className="bookCard" key={index}>
            <p>
              <strong>Title:</strong> {book.title}
            </p>
            <p>
              <strong>Author:</strong> {book.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
