import Footer from "./components/Footer";
import Header from "./components/Header";
import Departments from "./containers/Departments";
import Home from "./containers/Home";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Doctors from "./containers/Doctors";
import About from "./containers/About";
import Contacts from "./containers/Contacts";
import Login from "./containers/Login";
import Medicine from "./containers/Medicine";
import Ref from "./containers/Ref";
import Bookappoment from "./containers/appoiment/Bookappoment";
import Listappoiment from "./containers/appoiment/Listappoiment";

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
      <Route path={"/Login"} exact component={Login}/>
      <Route path={"/appoiment"} exact component={Bookappoment}/>
      <Route path={"/Medicine"} exact component={Medicine}/>
      <Route path={"/ref"} exact component={Ref}/>
      <Route path={"/lista"} exact component={Listappoiment}/>
      </Switch>
    <Footer/>
    </>
  );
}
export default App;
