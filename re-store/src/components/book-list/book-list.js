import { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import BookListItem from "../book-list-item/book-list-item";
import withBookstoreService from "../hoc/with-bookstore-service";
import { booksLoaded } from "../../actions";

import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    // получить данные
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    // передать данные в редакс стор
    this.props.booksLoaded(data);
  }
  render() {
    const { books } = this.props;
    return (
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const mapDispatchToProps = {
  booksLoaded,
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);

// в первую функцию коннекта мы передаем конфигурацию как именно мы будем подключать BookList
// во вторую сам  компонент
// вся конструция вернет новый компонен, кот.будет знать о redux store

// первая часть конфигурации описывает какие данные сможет получать компонент из стор

// mapStateToProps говорит, что в наш компонент надо передать свойство books, а в качестве значения будет state.books
