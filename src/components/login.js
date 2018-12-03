import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component{
	constructor(){
		super();
		this.state = { email : "", password : "",  message: 'Enter your credentials' };

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handlemailChange = this.handlemailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
		handlemailChange(event){
			this.setState({ email: event.target.value });
		}
		handlePasswordChange(event){
			this.setState({ password: event.target.value });
		}
		onFormSubmit(event){
			event.preventDefault();
			var post = { email: this.state.email, password: this.state.password };
			axios.post('https://mk-api.herokuapp.com/resume/auth/register', post).then((response) => {
				if (response.status == 200) {
					this.setState({ message: 'created' })
					this.setState({ name: '', email: '', password: '' })
				}
			}).catch((error) => {
				this.setState({ message: Object.values(error.response.data) })
			});
		}

		render(){
			return(
				<div className="login-container">
					<form onSubmit={this.onFormSubmit} className="input-group">
						<p>{this.state.message}</p>
						<input className="form-control" placeholder = "Your email" value={this.state.email || '' } onChange={this.handlemailChange} />
						<input className="form-control" type="password" placeholder="Password" value={this.state.password || ''} onChange={this.handlePasswordChange} />
						<p>already a member?</p>
						<span className="input-group-btn">
							<button type="submit" className="btn btn-secondary">Submit</button>
						</span>
					</form>
				</div>
			)
		}
}
