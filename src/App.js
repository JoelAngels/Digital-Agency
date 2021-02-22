import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { Footer, Navbar } from "./components";
import Home from "./pages/HomePage/Home";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Pricing />
      <Footer />
    </Router>
  );
}

export default App;
