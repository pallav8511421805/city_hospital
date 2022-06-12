import Footer from "./components/Footer";
import Header from "./components/Header";
import Departments from "./containers/Departments";
import Home from "./containers/Home";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Doctors from "./containers/Doctors";
import About from "./containers/About";
import Contacts from "./containers/Contacts";

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route path={"/H"} exact component={Home}/>
      <Route path={"/d"} exact component={Departments}/>
      <Route path={"/Doctor"} exact component={Doctors}/>
      <Route path={"/About"} exact component={About}/>
      <Route path={"/contact"} exact component={Contacts}/>
      </Switch>
    <Footer/>
    </>
  );
}

export default App;
