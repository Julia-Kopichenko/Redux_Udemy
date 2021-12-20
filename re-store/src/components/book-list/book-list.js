import { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import BookListItem from "../book-list-item/book-list-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import withBookstoreService from "../hoc/with-bookstore-service";
import { fetchBooks, bookAddedToCart } from "../../actions";

import "./book-list.css";

class BookListContainer extends Component {
  componentDidMount() {
    // const { bookstoreService, booksRequested, booksLoaded, booksError } =
    //   this.props;

    // booksRequested();
    // bookstoreService
    //   .getBooks()
    //   .then((data) => booksLoaded(data))
    //   .catch((err) => booksError(err));
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart = {onAddedToCart}/>;
  }
}

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem book={book}
            onAddedToCart={() => onAddedToCart(book.id)} />
          </li>
        );
      })}
    </ul>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     books: state.books,
//     loading: state.loading
//   };
// };
const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  };
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
);

// в первую функцию коннекта мы передаем конфигурацию как именно мы будем подключать BookList
// во вторую сам  компонент
// вся конструция вернет новый компонен, кот.будет знать о redux store

// первая часть конфигурации описывает какие данные сможет получать компонент из стор

// mapStateToProps говорит, что в наш компонент надо передать свойство books, а в качестве значения будет state.books
