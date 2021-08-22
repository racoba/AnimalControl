import { BrowserRouter, Route, Switch } from "react-router-dom";
import naoEncontrado404 from "./views/naoEncontrado404";
import MenuCadastroAdm from './views/MenuCadastroAdm';
import CadastroAnimal from "./views/cadastroAnimal";
import TelaHome from "./views/home";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={TelaHome}></Route>
            <Route exact path="/menu-adm" component={MenuCadastroAdm}></Route>
            <Route exact path="/cadastro-animal" component={CadastroAnimal}></Route>
            <Route component={naoEncontrado404}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;