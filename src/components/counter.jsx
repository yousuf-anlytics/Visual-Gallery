import React, { Component }from 'react';
import ReactDOM from 'react-dom';


class Counter extends Component{
	render(){	
		return(
			<div>
				<nav className = "navbar navbar-expand-lg navbar-light bg-light">
					<h1>Gallery</h1>
				</nav>
				<div class="col-md-12">
				<div className = "col-md-5 graphItems m-5" style = {{border:"1px solid lightgrey",height:"300px",boxShadow:"2px 2px lightgrey",width:"600px"
				}}>
				</div>
				</div>
				
			</div>
		);
	}
}

export default Counter;