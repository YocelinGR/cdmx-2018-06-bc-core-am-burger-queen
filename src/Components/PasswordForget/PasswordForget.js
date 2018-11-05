import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import './PasswordForget.css';
import * as routes from '../../constants/routes';

const PasswordForgetView = () => 
  <div className="row">
				<h1>Burguer</h1>
				<h2><strong>Queen</strong></h2>
				<p>Para los amantes de lo bueno</p>
				<img alt ="An hamburguer for the main view" src="https://github.com/YocelinGR/cdmx-2018-06-bc-core-am-burger-queen/blob/master/assets/hamb-burgue-circle.png?raw=true" />
        <PasswordForgetForm />
	</div>

const updateByPropertyName =(propertyName, value) => () =>({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { email } = this.state;

    auth.sendPasswordResetEmail(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
		<div className= "LogInStyle">
			<section className = "form-format">
				<div className="row">
					<form className="col s12 onSubmit={this.onSubmit}">
						<div className="row">
							<div className="input-field col s6 offset-s3">
								<input value={this.state.email}
          							onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
								id="email" type="email" className="validate input-form"></input>
								<label htmlFor="email">Email</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6 offset-s3">
								<button disabled={isInvalid} type="submit" className="waves-effect waves-light btn go-btn">Recuperar</button>
							</div>
						</div>
            { error && <p>{error.message}</p> }          
					</form>
				</div>
			</section>
		</div>
    );
  }
}
const PasswordForgetLink = () =>
  <p>Olvidaste tu contraseña
    <Link to = {routes.PASSWORD_FORGET}>Da click aquí</Link>
  </p>

export default PasswordForgetView;

export {
  PasswordForgetForm,
  PasswordForgetLink,
}
