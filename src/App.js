import Footer from "./components/Footer";
import Header from "./components/Header";
import Departments from "./containers/Departments";
import Home from "./containers/Home";

function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Home/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
