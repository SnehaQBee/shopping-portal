
import React, { Component } from "react";

// * import react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// * import module / dependency
import "bootstrap/dist/css/bootstrap.min.css";

// * import css
import "./App.css";

// * import components
import NavBar from './Components/NavBar';
import {Catalog} from "./Components/Catalog/Catalog";
import {Cart} from "./Components/Cart/Cart";
import {CatalogContextProvider} from "./Components/Context/CatalogContext";
import background from "./Assets/img/placeholder.png";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div style={{ backgroundImage: `url(${background})` }}>
        <CatalogContextProvider>
          <Router>
          <NavBar />
            {/* react-router-dom */}
            <Routes>
              
              <Route path="/catalog" element={<Catalog/>} />
              <Route path="/cart" element={<Cart/>} />
              {/*<Route exact path="/" component={ProductList} />
              <Route component={Default} />*/}
            </Routes>
            <Footer/>
          </Router>
        </CatalogContextProvider>
      </div>
    );
  }
}

export default App;
