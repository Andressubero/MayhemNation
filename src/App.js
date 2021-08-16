import './App.css';
import Navbar from './components/navbar/navbar';
import Itemlistcontainer from "./Views/Itemlistcontainer/Itemlistcontainer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Views/Home/Home";
import {ItemDetailContainer} from "./Views/ItemDetail/itemDetailContainer"
import { ItemsProvider } from './Context/Context';
import {CartViewContainer} from './Views/CartView/CartViewContainer'
import {Form}  from './components/Form/Form'
import {FinalMessage} from "./components/FinalMessage/Finalmessage"


function App() {
  return (
    <ItemsProvider>
    <Router>
    <div className="App">
       <Navbar />
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/CartView" component={CartViewContainer} />
        <Route path="/Form" component={Form} />
        <Route exact={true} path="/Shop" component={Itemlistcontainer} />
        <Route path="/Shop/:catId" component={Itemlistcontainer} />
        <Route path="/detail/:id" component={ItemDetailContainer} />
        <Route path="/checkOut" component={FinalMessage} />
       </Switch>      
    </div>
    </Router>
    </ItemsProvider>
  );
}

export default App;
