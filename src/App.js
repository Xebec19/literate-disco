import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Product from "./pages/Product";
import MainHeader from './components/Main';
function App() {
  return (
    <div>
      <header><MainHeader/></header>
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Product />
        </Route>
      </main>
    </div>
  );
}

export default App;
