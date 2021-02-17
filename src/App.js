import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { Navbar } from "./components";
import Home from "./pages/HomePage/Home";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route  path ="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
