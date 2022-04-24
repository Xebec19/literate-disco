import { Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import MainHeader from './components/Main';
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <div>
      <header><MainHeader/></header>
      <main>
        <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Product />
        </Route>
        <Route path="/product-detail/:id">
          <ProductDetails/>
        </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
