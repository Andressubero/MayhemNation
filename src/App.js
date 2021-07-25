import './App.css';
import Navbar from './components/navbar/navbar';
import Itemlistcontainer from "./Views/Itemlistcontainer/Itemlistcontainer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Views/Home/Home";
import Contact from "./Views/Contact/Contact";
import Programs from "./Views/Programs/Programs";
import {ItemDetailContainer} from "./Views/ItemDetail/itemDetailContainer";
import { ItemsProvider } from './Context/Context';


function App() {
  return (
    <ItemsProvider>
    <Router>
    <div className="App">
       <Navbar />
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Clothing" component={Programs} />
        <Route path="/FitnessEquipment" component={Itemlistcontainer} />
        <Route path="/FitnessEquipment/:cat" component={Itemlistcontainer} />
        <Route path="/Contact" component={Contact} />
        <Route path="/detail/:id" component={ItemDetailContainer} />
       </Switch>
       
      
    </div>
    </Router>
    </ItemsProvider>
  );
}

export default App;
