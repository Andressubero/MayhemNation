import './App.css';
import Navbar from './Navbar/Navbar';
import ItemList from "./Itemlist/Itemlist";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./Views/Home"
import Contact from "./Views/Contact"
import Programs from "./Views/Programs"
import ItemDetail from "./Views/ItemDetail/ItemDetail"


function App() {
  return (
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
  );
}

export default App;
