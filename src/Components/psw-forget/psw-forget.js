import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import './psw-forget.css';

const PasswordForgetPage = () =>
  <div>
    <PasswordForgetForm />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
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
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
		<div className= "LogInStyle">
			<div className="row">
				<h1>Burguer</h1>
				<h2><strong>Queen</strong></h2>
				<p>Para los amantes de lo bueno</p>
				<img alt ="An hamburguer for the main view" src="https://github.com/YocelinGR/cdmx-2018-06-bc-core-am-burger-queen/blob/master/assets/hamb-burgue-circle.png?raw=true" />
			</div>
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
								<a disabled={isInvalid} type="submit" class="waves-effect waves-light btn go-btn">Recuperar</a>
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
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};
