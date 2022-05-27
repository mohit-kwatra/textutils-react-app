import React from "react";

class Alert extends React.Component {
  render() {
    return (
      this.props.data && (
        <div className={`alert alert-${this.props.data.type} m-0`} role="alert">
          {this.props.data.msg}
        </div>
      )
    );
  }
}

export default Alert;
