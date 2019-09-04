import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Form from '../Form/Form'
import Products from '../Products/Products'

class Navbar extends  Component {
    render(){
        return(
        <Router>
                              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="mx-3 text-white"  to="/" >Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="mx-3 text-white" to="/Form">Formulario</Link>
            </li>
          </ul>
        </div>
      </nav>

        <Route path="/" exact component={Products} />
        <Route path="/Form/" component={Form} />
        </Router>
        );
    }
}

export default Navbar;