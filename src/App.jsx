import { Route, Switch, NavLink } from "react-router-dom";

import "./App.css";
// eslint-disable-next-line import/extensions
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Product from "./components/Product";

const App = () => (
  <>
    <div className="flex space-x-2">
      <NavLink exact activeClassName="underline font-bold" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="underline font-bold" to="/product">
        Product
      </NavLink>
    </div>
    <Switch>
      <Route component={Product} path="/product" />
      <Route component={PageNotFound} path="*" />
      <Route component={Home} path="/" />
    </Switch>
  </>
);
export default App;
