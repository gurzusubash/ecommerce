import { HomePage } from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";
import "./App.scss";

export const SubMenu = ({match}) => {
  return <div>{match.params.subMenu}</div>;
};

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/:subMenu" component={SubMenu} />
    </div>
  );
}

export default App;
