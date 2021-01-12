import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import history from './history';
import Routes from './Routes';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home.js'

class Shopping extends React.Component{
	
	render(){
		return(
			<div className="App">
				<Navbar style = {{position: "sticky"}} bg="info" expand="lg">
				<Navbar.Brand href="/" style = {{color:"white"}}>Viz Galleryh</Navbar.Brand>
			</Navbar>
		<Routes />
		
		<Home />
	</div>
			
		 
		);
		
	}
}

ReactDOM.render(
<Router>
<Shopping />
</Router>
,document.getElementById('root'));


