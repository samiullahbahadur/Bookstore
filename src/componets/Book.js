import PropType from "prop-types";

const Book = ({ category, title, author }) => (
  <li>
    <h3>{category}</h3>
    <h2>{title}</h2>
    <h3>{author}</h3>
    <button type="button">Remove</button>
  </li>
);
Book.PropType = {
  title: PropType.string.isRequired,
  author: PropType.string.isRequired,
  category: PropType.string.isRequired,
};
export default Book;
