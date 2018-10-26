import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp/SignUp';
import { PasswordForgetLink } from '../PasswordForget/PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import './SignIn.css';

const SignInPage = ({ history }) =>
  <div>
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
								id="email" type="text" className="validate input-form"></input>
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
								<button disabled={isInvalid} type="submit" className="waves-effect waves-light btn go-btn">Iniciar</button>
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
