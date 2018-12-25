import React, { Component } from 'react'
import IdeaBoard from './IdeaBoard'
import CreateIdea from './CreateIdea'
import {connect} from 'react-redux'
import {handleCreateIdeaModalAction} from './../store/actions/ModalAction'
import {createIdeaAction} from './../store/actions/IdeaAction'
import {reset} from 'redux-form';

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

    this.state = {
      isOpen: false,
      showModal: false
    }
  }


  handelSubmit = (e) => {
    //e.preventDefault()
    console.log(this.props.createIdeaForm.CreateIdea.values)
    this.props.createIdea(this.props.createIdeaForm.CreateIdea.values)
    this.props.handleModal(false)
    this.props.resetIdeaForm()
  }

  

  closeModal () {
    this.setState({
      showModal: false
    })
  }

  save () {
    alert("Hi")
  }

  toggle () {
    this.setState({
      isOpen: !this.isOpen
    })
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">IdeaBoard</NavbarBrand>
          <NavbarToggler onClick={() => this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={() => this.props.handleModal(true)}>Create New Idea</NavLink>
              </NavItem>
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
        <IdeaBoard/>
        <CreateIdea showModal={false} onSubmit={this.handelSubmit}/>
      </div>
    );
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

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);



export default App