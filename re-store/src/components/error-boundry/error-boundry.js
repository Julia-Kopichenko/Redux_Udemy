// error-boundry - компонент, у кот. есть метод жизн.цикла componentDidCatch()
// т.к. у него есть метод, то мы делаем его компонентом-классом

// componentDidCatch() вызовется когда в одном из компонентов ниже по иерархии возникнет ошибка
// в методе render или любом методе жизн.цикла

// мы сохраняем состояние в componentDidCatch() и переключаем ErrorBoundry в режим отображения ошибки

import { Component } from "react";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}
