import Root from './components/Root';
import './App.css';
import './assets/main.css'

import requests from './components/movieAPI/requests'
import { Provider } from "react-redux"
import Store from "./components/redux/Store"
import FetchMovies from './components/movieAPI/FetchMovies';
import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Switch>
        <Provider store={Store}>
          {Object.keys(requests).map(req => (
            <FetchMovies key={req} title={req} fetchurl={requests[req]} />
          ))}
          <Route path="/" exact>
            <Root />
          </Route>
        </Provider>
      </Switch>
    </>
  );
}

export default App;
