import React from 'react';
import './psw-forget.css';


const PswPassword = () => {
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
					<form className="col s12">
						<div className="row">
							<div className="input-field col s6 offset-s3">
								<input id="email" type="email" className="validate input-form"></input>
								<label htmlFor="email">Email</label>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6 offset-s3">
								<a class="waves-effect waves-light btn go-btn">Recuperar</a>
							</div>
						</div>
                        
					</form>
				</div>
			</section>
		</div>
	);
};

export default PswPassword;