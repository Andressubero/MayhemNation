import './App.css';
import Navbar from './Navbar/Navbar';
import ItemList from "./Views/Itemlist/Itemlist";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Views/Home/Home";
import Contact from "./Views/Contact/Contact";
import Programs from "./Views/Programs/Programs";
import ItemDetail from "./Views/ItemDetail/ItemDetail";
import { ItemsProvider } from './Views/Context/Context';


function App() {
  return (
    <ItemsProvider>
    <Router>
    <div className="App">
       <Navbar />
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/programs" component={Programs} />
        <Route path="/shop" component={ItemList} />
        <Route path="/contact" component={Contact} />
        <Route path="/detail/:id" component={ItemDetail} />
       </Switch>
       
      
    </div>
    </Router>
    </ItemsProvider>
  );
}

export default App;
