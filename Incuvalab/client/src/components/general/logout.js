import React, { Component } from 'react';

export class ButtonLogout extends Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      sessionStorage.clear();
      window.location.replace('/');
    }

    render() {
      return <button onClick={this.handleClick} className="dropdown-item">Cerrar Sesión</button>;
    }
  }

export default ButtonLogout;