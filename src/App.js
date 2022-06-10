import Footer from "./components/Footer";
import Header from "./components/Header";
import Departments from "./containers/Departments";
import Home from "./containers/Home";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
