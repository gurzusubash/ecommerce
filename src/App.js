import { HomePage } from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";
import "./App.scss";

import Shop from './pages/shop/shop.component';

export const SubMenu = ({match}) => {
  return <div>{match.params.subMenu}</div>;
};

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path='/shop' component={Shop} />
      <Route exact path="/shop/:subMenu" component={SubMenu} />
    </div>
  );
}

export default App;
