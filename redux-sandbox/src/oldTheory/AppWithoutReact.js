import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
// import { inc, dec, rnd } from "./actions";
//! мы хотим получить все импорты из fctions в объект actions
import * as actions from './actions'

const store = createStore(reducer);
const { dispatch, getState, subscribe } = store;

// было
// const decDispatch = () => dispatch(dec());
// const incDispatch = () => dispatch(inc());
// const rndDispatch = (payload) => dispatch(rnd(payload));

// свяжем actioncreator и dispatch в новую функцию

// const bindActionCreator =
//   (creator, dispatch) =>
//   (...args) => {
//     dispatch(creator(...args));
//   };
//! функция выше написана для иллюстрации аботы встроенной в редакс функции bindActionCreators
// заменим нашу самописную функцию на встроенную


//const decDispatch = bindActionCreator(dec, dispatch);
//const incDispatch = bindActionCreator(inc, dispatch);
//const rndDispatch = bindActionCreator(rnd, dispatch);

// const decDispatch = bindActionCreators(dec, dispatch);
// const incDispatch = bindActionCreators(inc, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

// еще модернизируем
const {inc, dec, rnd} = bindActionCreators(actions,dispatch)
//! изначальный вариант
// document.getElementById("dec").addEventListener("click", () => {
// store.dispatch(dec());
// });

document.getElementById("dec").addEventListener("click", dec);
document.getElementById("inc").addEventListener("click", inc);

// document.getElementById("rnd").addEventListener("click", () => {
//   const payload = Math.floor(Math.random() * 10);
//   store.dispatch(rnd(payload));
// });
document.getElementById("rnd").addEventListener("click", () => {
  const payload = Math.floor(Math.random() * 10);
  rnd(payload);
});

const update = () => {
  document.getElementById("counter").innerHTML = getState();
};

subscribe(() => update());
