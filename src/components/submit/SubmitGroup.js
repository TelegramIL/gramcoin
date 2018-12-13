import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText,
} from 'reactstrap';
import '../../styles/submit.scss';

export class SubmitForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      name: ''
    };

    this.data = null;
  }

   updateGroupName(value){
    this.data = value;
  }

  handleSubmit(event) {
    this.data = {groupname: event.groupname.value, description: event.description.value, link: event.link.value, password: event.password.value}
  }

  render() {
    return (
      <Container className="submit_container">
        <h2>Submit Group</h2>
        <Form className="form" onSubmit={(e) => this.handleSubmit(e.target)}>
          <Col>
            <FormGroup>
              <Label>Group Name</Label>
              <Input
                type="text"
                name="text"
                id="groupname"
                placeholder="Group Name..."
                onChange = {(e) => this.updateGroupName(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Group Description</Label>
              <Input
                type="textarea"
                name="text"
                id="description"
                placeholder="Group Description..."
                className='submit_container__desc'
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Telegram link</Label>
              <Input
                type="textarea"
                name="text"
                id="link"
                placeholder="Telegram link..."
                className='submit_container__link'
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="********"
              />
              <FormText>Remember your password for future modifications.</FormText> 
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default SubmitForm;