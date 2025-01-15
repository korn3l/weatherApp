// Jest to plik, w którym tworzony jest store Reduxa. Store jest to obiekt, który przechowuje całe drzewo stanu aplikacji. Store jest tworzony na podstawie reducerów, które są odpowiedzialne za zmiany stanu aplikacji. W tym pliku tworzony jest store z użyciem funkcji createStore z biblioteki Redux. Store jest zapisywany w localStorage, dzięki czemu po odświeżeniu strony stan aplikacji nie jest tracony.
import { createStore } from "redux";
import rootReducer from "./reducers";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("app_state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Błąd podczas ładowania stanu z localStorage:", err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({
      units: state.units,
    });
    localStorage.setItem("app_state", serializedState);
  } catch (err) {
    console.error("Błąd podczas zapisywania stanu do localStorage:", err);
  }
};

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
