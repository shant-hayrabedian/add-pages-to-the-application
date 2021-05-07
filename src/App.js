import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import ProductList from "./components/ProductList/ProductList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "./components/Product/Product";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <div className="content">
                    <Switch>
                        <Route exact path="/"><Home/></Route>
                        <Route exact path="/products"><ProductList/></Route>
                        {/*<Route path="/create"><Create/></Route>*/}
                        <Route path="/products/:id"><Product/></Route>
                        <Route path="*"><NotFound/></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
