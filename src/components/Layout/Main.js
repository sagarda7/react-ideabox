import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import IdeaBoard from '../IdeaBoard';
import Header from './Header';
import About from '../About';
import CreateIdea from '../CreateIdea';

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
        showModal: false
    }
  }

  handelSubmit = (e) => {
    
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
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={IdeaBoard} exact />
                    <Route path="/about" component={About}/>
                </Switch>
                <CreateIdea showModal={false}/>
            </div>
        </BrowserRouter>
      )
    }
}

export default Main