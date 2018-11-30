import React, { Component } from 'react';
import ProjectList from './project_list';
import { connect } from 'react-redux';
import { RegisterPost } from '../actions/index';


class LoginForm extends Component{
	constructor(){
		super();
		this.state = { name : "", email: "", password: "" };

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handlemailChange = this.handlemailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
		componentWillMount(){
			this.props.ProjectList();
		}

		handleNameChange(event){
			this.setState({ name: event.target.value });
		}
		handlemailChange(){
			this.setState({ email: event.target.value });
		}
		handlePasswordChange(){
			this.setState({ password: event.target.value });
		}
		onFormSubmit(event){
			event.preventDefault();

		}
		render(){
			return(
				<div>
					<form onSubmit={this.onFormSubmit} className="input-group" >
						<input className="form-control" placeholder = "Your name" value={this.state.name || ''} onChange={this.handleNameChange} />
						<input className="form-control" placeholder = "Your email" value={this.state.email } onChange={this.handlemailChange} />
						<input className="form-control" type="password" value={this.state.password || ''} onChange={this.handlePasswordChange} />
						<span className="input-group-btn">
							<button type="submit" className="btn btn-secondary">Submit</button>
						</span>
					</form>

					<div>
						<ProjectList p/>
					</div>
				</div>
			)
		}
	}

function mapDispatchToProps() {
	return {
		RegisterPost: function () {
			RegisterPost();
		},
	}
}

export default connect(null, mapDispatchToProps)(LoginForm);