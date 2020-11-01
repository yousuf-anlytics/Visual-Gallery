import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './history';
import './index.css';
import axios from 'axios';
import ReactPaginate from 'react-paginate';


export default class Home extends Component {
	
	constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 5,
      currentPage: 0
};
}
	
	receivedData(){
		axios
            .get(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => {
				
	const data = res.data;
	
	var datas = [
	{id:1,thumbnailUrl:"/tsunami.png",link:"/Products"}
	
	]
	const slice = datas.slice(this.state.offset, this.state.offset + this.state.perPage);
	
	const postData = slice.map(pd => <React.Fragment>
                    <p></p>
                    <img  src={process.env.PUBLIC_URL + pd.thumbnailUrl} alt="" className = "graphs"
					onClick={() => history.push(pd.link)} 
					key = {pd.id}
					/
					>
                </React.Fragment>)
				
	            this.setState({
                    pageCount: Math.ceil(datas.length / this.state.perPage),
                    postData,
					data : datas
                })
	
			});
	}
	
	    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
		
		
		        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };
	
	componentDidMount() {
        this.receivedData()
    }
	
  render() {
	  var lengthCheck = this.state.data.length;
	  let pagination;
	  if(lengthCheck > 5){
		  pagination = <ReactPaginate className = "paginate"
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
					onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
	  }
	  
    return (
      <div className="col-md-12">
	  
        <div className="col-md-6">
		  {this.state.postData}
		 </div>
		 
		 <div className = "col-md-6">
		 
		 {pagination}
			
		 
		</div>
      </div>
    );
  }
}