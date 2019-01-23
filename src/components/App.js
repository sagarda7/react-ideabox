import React, { Component } from 'react'
import Main from './Layout/Main'
import CreateIdea from './CreateIdea'
import {connect} from 'react-redux'
import {handleCreateIdeaModalAction} from './../store/actions/ModalAction'
import {createIdeaAction} from './../store/actions/IdeaAction'
import {reset} from 'redux-form';
import {NavLink as RouterLink} from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Main/>
      </div>
    );
  }
}

export default App