import withBookstoreService from "../hoc/with-bookstore-service";

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());

  return <h1>HEllo</h1>;
};

export default withBookstoreService()(App);
