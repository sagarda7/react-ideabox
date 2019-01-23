import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleCreateIdeaModalAction} from './../../store/actions/ModalAction'
import {createIdeaAction} from './../../store/actions/IdeaAction'
import {reset} from 'redux-form';
import {NavLink as RouterLink, withRouter} from 'react-router-dom'

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
class Header extends Component {

  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
        isOpen: false
    }
  }

  render() {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">IdeaBoard</NavbarBrand>
            <NavbarToggler onClick={() => this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <li className="nav-item"><RouterLink to="/" className="nav-link">Home</RouterLink></li>
                <NavItem>
                
                    <NavLink onClick={() => this.props.handleModal(true)}>Create New Idea</NavLink>
                
                </NavItem>

                <li className="nav-item"><RouterLink to="/about" className="nav-link">About</RouterLink></li>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Sagar
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                    Setting
                    </DropdownItem>
                    <DropdownItem>
                    Profile
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    Logout
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            </Collapse>
        </Navbar>
      )
    }
}

const mapStateToProps = (state)  => {
    return {
      createIdeaModal: state.createIdeaModal,
      createIdeaForm: state.form
    }
  }
  
  const mapDispatchToProps = (dispatch)  => {
    return {
      handleModal: (show) => dispatch(handleCreateIdeaModalAction(show)),
      createIdea: (data) => dispatch(createIdeaAction(data)),
      resetIdeaForm: () => dispatch(reset('CreateIdea'))
    }
  }
  
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header))