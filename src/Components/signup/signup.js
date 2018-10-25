import React, { Component }from 'react';
import {Link, withRouter,  } from 'react-router-dom';
import {auth, db} from '../../firebase/firebase';
import * as routes from '../../constants/routes';

const SignUpPage = ({history}) =>
	<div>
		<SignUpForm history = {history}/>
	</div>

const updateByPropertyName = (propertyName, value ) => () => ({
	[propertyName]: value,
});
const INITIAL_STATE = {
	username: '',
	email: '',
	passwordOne: '',
	error: null,
};

class SignUpForm extends Component {
	constructor(props){
		super(props);
		this.state = {...INITIAL_STATE};
	}
	onSubmit = (event) => {
		const {
			username,
			email,
			passwordOne,
		} = this.state;

	  const {
		history,
	  } = this.props;

		auth.doCreateUserWithEmailAndPassword(email, passwordOne)
			.then(authUser => {
				db.doCreateUser(authUser.user.uid, username, email)
				.then(() => {
					this.setState(()=> ({ ...INITIAL_STATE }));
					history.push(routes.HOME);
					})
					.catch(error => {
					this.setState(updateByPropertyName('error', error));
					});
				})
				.catch(error => {
				  this.setState(updateByPropertyName('error', error));
				});
	  
	event.preventDefault();
	}
	render () {
		const {
			username,
			email,
			passwordOne,
			error,
		} = this.state;

		const isInvalid = 
			passwordOne === '' ||
			email === '' ||
			username === '';
		return (
			<form onSubmit = {this.onSubmit}>
			<div className= "LogInStyle">
			<div className="row">
				<h1>Burguer</h1>
				<h2><strong>Queen</strong></h2>
				<p>Para los amantes de lo bueno</p>
				<img alt ="An hamburguer for the main view" src="https://github.com/YocelinGR/cdmx-2018-06-bc-core-am-burger-queen/blob/master/assets/hamb-burgue-circle.png?raw=true" />
			</div>
			<section className = "form-format">
				<div className="row">
					<section className="col s12">
						<div className="row">
							<div className="input-field col s6 offset-s3">
								<input value = {username}
									onChange= {event => this.setState(updateByPropertyName('username',event.target.value))}
									id="first_name" type="text" className="validate input-form"></input> 
								<label htmlFor="first_name">NickName</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6 offset-s3">
								<input value = {email} onChange = {event => this.setState(updateByPropertyName('email', event.target.value))}
									id="email" type="email" className="validate input-form"></input>
								<label htmlFor="email">Email</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6 offset-s3">
								<input value={passwordOne} onChange = {event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
									id="password" type="password" className="validate input-form"></input>
								<label htmlFor="password">Password</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6 offset-s3">
								<a type = 'submit' disabled = {isInvalid} class="waves-effect waves-light btn go-btn">Iniciar</a>
							</div>
						</div>
					</section>
				</div>
			</section>
		</div>
		{ error && <p>{error.message}</p> }
		</form>
		);
	}
}
const SignUpLink = () =>
	<span>Si no te has registrado, ve aquí: <Link to={routes.SIGN_UP}>SignUp</Link></span>

	export default withRouter(SignUpPage);

	export {
		SignUpForm,
		SignUpLink,
	};