// компонент, кот. позволит нам передать наш сервис всем компонентам  в нашем приложении,
// используя котекст API реакта
import React from "react";

// Создаем пару потребитель и поставщик(провайдер)

// Когда React будет отрисовывать потребителя контекста Consumer,
// он считает текущее значение контекста из ближайшего соответствующего поставщика Provider выше в дереве иерархии.


const BookstoreContext = React.createContext()

const BookstoreServiceProvider = BookstoreContext.Provider
const BookstoreServiceConsumer = BookstoreContext.Consumer


// или сразу:
// const {
//   Provider: BookstoreServiceProvider,
//   Consumer: BookstoreServiceConsumer,
// } = React.createContext();

export { BookstoreServiceProvider, BookstoreServiceConsumer };
