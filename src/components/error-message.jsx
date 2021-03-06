import "./error-message.css";

import React, { Component } from "react";

class ErrorMessage extends Component {
	render() {
		return (
			<div className="error-message" onClick={this.props.onDismiss} key={this.props.time}>
				<span>{this.props.message}</span>
			</div>
		);
	}
}

export default ErrorMessage;
