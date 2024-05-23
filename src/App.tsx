// App.tsx
import React from "react";
import { Provider } from "react-redux";
import BreedsComponent from "./dogComponent";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BreedsComponent />
      </div>
    </Provider>
  );
};

export default App;
