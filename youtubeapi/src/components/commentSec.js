import React, { Component } from 'react';
import '../css/commentSec.css';
import CommentList from './CommentList.js';

class CommentSec extends Component {

	constructor(props){
		super(props);

		this.initialState = {
		      name: '',
		      job: '',
		    }

		    this.state = this.initialState
		  
    	this.handleChange = this.handleChange.bind(this);
    	// this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target

		  this.setState({
		    [name]: value,
		  })
  	}

  // 	handleSubmit(e) {
  //   	e.preventDefault();
  //   	if (!this.state.text.length) {
  //   	  return;
  //   	}
  //   	const newItem = {
  //     		text: this.state.text,
  //     		id: Date.now()
  //   	};
  //   	this.setState(state => ({
  //    		items: state.items.concat(newItem),
  //     		text: ''
  //   	}));
 	// }



	render(){
		const { name, job } = this.state;
		
		return(

			<div className="commentCont">
			<p className="commHead">Comments</p>
			<form className="commentform" >

				<div className="enterComment">
				<table><tbody><tr>
					<td><input type="text" placeholder="Your Name" className="comment" onChange={this.handleChange} name="name" value={this.state.name}/></td>
					<td><textarea placeholder="Your Comment" className="channelName" name="job" value={this.state.job}></textarea></td>
				</tr></tbody></table>
				</div>
				<div className="buttons">	
					<button className="commButton" onClick={this.press}>Comment</button>
					<button className="cancelButton">Cancel</button>
				</div>
				</form>
				<CommentList name={this.state.name} job={this.state.job}/>
			</div>

		);

	}

}

export default CommentSec;