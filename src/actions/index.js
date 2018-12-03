import axios from 'axios';

// export const REGISTER_POST = 'REGISTER_POST';
// export const LOGIN_POST = 'LOGIN_POST';
// export const PROJECT_LIST = 'PROJECT_LIST';

export function RegisterPost(props) {
	axios.post('https://mk-api.herokuapp.com/resume/auth/register', props).then((response) => {
		return {
			payload: response 
		}
	});
}

export function Login(argument) {
	axios.post('https://mk-api.herokuapp.com/resume/auth/login', props).then((response) => {
		return {
			payload: response 
		}
	});}

export function ProjectList() {
	axios.get('https://mk-api.herokuapp.com/resume/auth/login').then((response) => {
		return {
			type : PROJECT_LIST,
			payload: response 
		}
	})
}