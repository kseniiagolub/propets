import './App.css';
import StartPage from "./pages/StartPage";
import HomePage from "./pages/HomePage";
import {Route, Switch} from "react-router-dom";
import Modal from "./modal";

function App() {

    return (
        <>
            <Switch>
                <Route exact path={'/'} component={StartPage}/>
                <Route exact path={['/home', '/:nav']} component={HomePage}/>
            </Switch>
            <Modal/>
        </>
    );
}

export default App;
