import { BrowserRouter, Route, Switch } from "react-router-dom";
import naoEncontrado404 from "./views/naoEncontrado404";
import Home from './views/home';
import MenuCadastroAdm from './views/MenuCadastroAdm';
import Login from "./views/Login";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/menu-adm" component={MenuCadastroAdm}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route component={naoEncontrado404}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;