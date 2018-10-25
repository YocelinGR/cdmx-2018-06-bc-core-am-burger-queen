import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import './signin.css';

const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
	<div className= "LogInStyle">
	  <section className = "form-format" onSubmit={this.onSubmit}>
				<div className="row">
					<form className="col s12">
						<div className="row">
							<div className="input-field col s6 offset-s3">
								<input value={email}
          						onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
								id="email" type="email" className="validate input-form"></input>
								<label htmlFor="email">Email</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6 offset-s3">
								<input value={password}
								onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
								id="password" type="password" className="validate input-form"></input>
								<label htmlFor="password">Password</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6 offset-s3">
								<a disabled={isInvalid} type="submit" class="waves-effect waves-light btn go-btn">Iniciar</a>
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

export default withRouter(SignInPage);

export {
  SignInForm,
};
