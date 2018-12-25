import React, { Component } from 'react'
import './style.css'
import {CardDeck, Jumbotron, Button, Row, Col} from 'reactstrap'
import Idea from './../Idea'
import {connect} from 'react-redux'
import {handleCreateIdeaModalAction} from './../../store/actions/ModalAction'

class IdeaBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ideas:[
        {id: 1, title:'My Idea', content:'This is description'}
      ]
    }
  }

  render() {
    return (
      <div>
      <Jumbotron className="idea-box" style={{
        justifyContent: this.props.ideas.length>0?'left':'center'
      }}>
        <div>
          { this.props.ideas.length===0 && 
            <Row className="create-new-if-zero">
              <Col md="12">
                There are no Ideas, you can <Button onClick={this.props.handleModal}  color="link" size="md">Create New</Button>
              </Col>
            </Row> 
          }

          { this.props.ideas.length>0 && 
            <CardDeck>
              {
                this.props.ideas.map((idea, ind) => {
                  return <Idea key={ind} title={idea.title} description={idea.description}/>
                })
              }
              
            </CardDeck>
          }

        </div>
      </Jumbotron>
    </div>
      )
    }
}

const mapStateToProps = (state)  => {
  return {
    ideas: state.ideas
  }
}

const mapDispatchToProps = (dispatch)  => {
  return {
    handleModal: (show) => dispatch(handleCreateIdeaModalAction(show))
  }
}


export default connect(
  mapStateToProps, mapDispatchToProps
)(IdeaBoard);