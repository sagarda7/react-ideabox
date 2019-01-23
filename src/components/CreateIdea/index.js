import React, { Component } from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {handleCreateIdeaModalAction} from './../../store/actions/ModalAction'
import {createIdeaAction} from './../../store/actions/IdeaAction'
import './style.css'
import {
  Button, Modal, ModalHeader, ModalBody, Form,
  FormGroup,
  Input,
  Col,
  Label
} from 'reactstrap';



const required = value => (value ? undefined : 'Required')

const renderFieldInput = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) =>
  (<div>
    <FormGroup>
      <Label>{label}</Label>
      <Input
        {...input} placeholder={label} type={type}
      />
      {touched && ((error && <span className='error'>{error}</span>) || (warning && <span className='error'>{warning}</span>))}
    </FormGroup>
  </div>)



class CreateIdea extends Component {

  constructor(props) {
    super(props)
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this);
    this.props.createIdea(this.props.createIdeaForm.CreateIdea.values)
    this.props.handleModal(false)
    this.props.resetIdeaForm()
  }

  closeModal () {
    console.log(this)
    this.props.handleModal(false)
    this.props.resetIdeaForm()
  }

  componentDidMount () {
    console.log(this+" is create component")
  }
  render() {
    return (
      <div>
        <Modal isOpen={this.props.createIdeaModal.show}>
          <ModalHeader>Create Idea</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit} className="form" name="formIdea">
              <Col>
              <Field
                      name="title"
                      type="text"
                      component={renderFieldInput}
                      label="Title"
                      validate={[required]}
                    />
              </Col>
              <Col>
                <Field
                      name="description"
                      type="text"
                      component={renderFieldInput}
                      label="Description"
                      validate={[required]}
                    />
              </Col>
              <Col>
                <FormGroup>
                  <Button color="primary" type="submit">Create</Button>{' '}
                  <Button color="secondary" onClick={() => this.closeModal()}>Cancel</Button>
                </FormGroup>
              </Col>
            </Form>
          </ModalBody>
          {/* <ModalFooter>
            <Button color="primary" onClick={() => this.save()}>Create</Button>{' '}
            <Button color="secondary" onClick={() => this.closeModal()}>Cancel</Button>
          </ModalFooter> */}
        </Modal>
      </div>
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


CreateIdea = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateIdea)


export default reduxForm({
  form: 'CreateIdea' // a unique identifier for this form
})(CreateIdea)