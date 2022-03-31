import "../assets/BookList.css";
import Book from "./Book";
import { v4 as uuidv4 } from "uuid";

const BookList = () => {
  const store = [
    {
      category: "Action",
      title: "The Hunger Games",
      author: "Suzanne Collins",
    },
    {
      category: "Science Fiction",
      title: "Dune",
      author: "Frank Herbert",
    },
    {
      category: "Economy",
      title: "Caital in the Twenty-First Century",
      author: "Suzanne Collins",
    },
  ];
  return (
    <div className="book-list">
      <ul className="book">
        {store.map((book) => (
          <Book
            category={book.category}
            title={book.title}
            author={book.author}
            key={uuidv4}
          />
        ))}
      </ul>
      <hr />
      <AddNew />
    </div>
  );
};

export default BookList;
