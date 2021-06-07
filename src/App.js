import { HomePage } from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

import Shop from "./pages/shop/shop.component";
import NavigationBar from "./components/navigation-bar/navigation-bar.component";

export const SubMenu = ({ match }) => {
  return <div>{match.params.subMenu}</div>;
};

function App() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop/:subMenu" component={SubMenu} />
      </Switch>
    </div>
  );
}

export default App;
