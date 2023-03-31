import React, { Component } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export class ButtonLogoutAdmin extends Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      sessionStorage.clear();
      window.location.replace('/');
    }

    render() {
      return<li className='nav-text d-flex text-white' onClick={this.handleClick} >
        
        <button className="dropdown-item text-white" >
        <IoIcons.IoMdLogOut className='me-3'/>
            Cerrar Sesión
        </button>
        </li> 
    }
  }

export default ButtonLogoutAdmin;