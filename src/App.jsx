import { Route, Switch, NavLink, Redirect } from "react-router-dom";

import "./App.css";
// eslint-disable-next-line import/extensions
import PageNotFound from "./components/commons/PageNotFound";
import Product from "./components/Product";
import ProductList from "./components/ProductList";

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
      <Route component={Product} path="/products/:slug" />
      <Route component={ProductList} path="/products" />
      <Redirect exact from="/" to="/products" />
      <Route component={PageNotFound} path="*" />
    </Switch>
  </>
);
export default App;
