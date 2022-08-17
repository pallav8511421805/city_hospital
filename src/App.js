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
import Privateroute from "./containers/routing/Privateroute";
import Publicroute from "./containers/routing/Publicroute";
import { Themeprovider } from "./context/Themecontext";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
    <Provider store={store}>
    <Themeprovider>
    <Header/>
    <Switch>
      <Publicroute path={"/H"} exact component={Home}/>
      <Publicroute path={"/d"} exact component={Departments}/>
      <Publicroute path={"/Doctor"} exact component={Doctors}/>
      <Publicroute path={"/About"} exact component={About}/>
      <Publicroute path={"/contact"} exact component={Contacts}/>
      <Publicroute path={"/Login"} exact restricted={true} component={Login}/>
      <Publicroute path={"/Medicine"} exact component={Medicine}/>
      <Publicroute path={"/ref"} exact component={Ref}/>
      <Privateroute path={"/appoiment"} exact component={Bookappoment}/>
      <Privateroute path={"/lista"} exact component={Listappoiment}/>
      </Switch>
    <Footer/>
    </Themeprovider>
    </Provider>
    </>
  );
}
export default App;
