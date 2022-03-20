import './App.css';
import StartPage from "./pages/StartPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <>
        <Switch>
            <Route exact path={'/'} component={StartPage}/>
            <Route exact path={'/home'} component={HomePage}/>
            <Route exact path={'/authorization'} component={RegisterPage}/>
        </Switch>
    </>
  );
}

export default App;
