import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './views/home';
import MenuCadastroAdm from './views/MenuCadastroAdm';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/menu-adm" component={MenuCadastroAdm}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;