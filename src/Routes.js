import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './views/home';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;