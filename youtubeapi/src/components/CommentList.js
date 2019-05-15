import React, { Component } from 'react';

class CommentList extends Component{


	render(){
		return(
			<ul>
		        {this.props.name.map(item => (
		          <li key={item.id}>{item.name}</li>
		        ))}
		    </ul>
		);
	}

}

export default CommentList;