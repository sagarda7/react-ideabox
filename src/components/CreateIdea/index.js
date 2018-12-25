import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import {handleCreateIdeaModalAction} from './../../store/actions/ModalAction'
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

  render() {
    return (
      <div>
        <Modal isOpen={this.props.createIdeaModal.show}>
          <ModalHeader>Create Idea</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.props.handleSubmit} className="form" name="formIdea">
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
                  <Button color="secondary" onClick={() => this.props.handleModal(false)}>Cancel</Button>
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
    handleModal: (show) => dispatch(handleCreateIdeaModalAction(show))
  }
}


CreateIdea = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateIdea);


export default reduxForm({
  form: 'CreateIdea' // a unique identifier for this form
})(CreateIdea)