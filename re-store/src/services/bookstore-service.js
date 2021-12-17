// сервис, который отвечает за получение данных о книгах

export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: "Ivan",
        author: "Petrov",
      },
      {
        id: 2,
        title: "Ivan",
        author: "Petrov",
      },
    ];
  }
}
