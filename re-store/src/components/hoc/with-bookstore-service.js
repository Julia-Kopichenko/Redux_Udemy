import { BookstoreServiceConsumer } from "../bookstore-service-context/bookstore-service-context";

const withBookstoreService = () => (WrappedComponent) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {(bookstoreService) => {
          return (
            <WrappedComponent {...props} bookstoreService={bookstoreService} />
          );
        }}
      </BookstoreServiceConsumer>
    );
  };
};

export default withBookstoreService;
