import React, { Component } from 'react';


class ProjectList extends Component{
	render(){
		return(
			<li>{this.props.data}</li>
		)
	}
}

export default ProjectList;