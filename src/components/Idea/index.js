import React, { Component } from 'react'
import './style.css'
import { Card, CardHeader, CardBody,
  CardText } from 'reactstrap';
import close from './../../assets/close.svg'
import {connect} from 'react-redux'
import {deleteIdeaAction} from './../../store/actions/IdeaAction'

class Idea extends Component {

  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <Card inverse color="info" style={{margin:'10px', maxWidth:"15rem", minWidth:"15rem"}}>
            <CardHeader>
              {this.props.title}
              <img src={close} onClick={() => this.props.deleteIdea(this.props.key)} style={{width:15, height:15, float: 'right', cursor:'pointer'}}></img>
            </CardHeader>
            <CardBody>
              {/* <CardTitle>{this.props.title}</CardTitle> */}
              <CardText>{this.props.description}</CardText>
            </CardBody>
          </Card>
        </div>
      )
    }
}

const mapDispatchToProps = (dispatch)  => {
  return {
    deleteIdea: (index) => dispatch(deleteIdeaAction(index))
  }
}

const mapStateToProps = (state)  => {
  return {
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (Idea)