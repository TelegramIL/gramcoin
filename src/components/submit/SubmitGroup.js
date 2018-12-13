import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText,
} from 'reactstrap';
import '../../styles/submit.scss';

export class SubmitForm extends Component {
  render() {
    return (
      <Container className="submit_container">
        <h2>Submit Group</h2>
        <Form className="form" onSubmit={ () => console.log("tesr'") }>
          <Col>
            <FormGroup>
              <Label>Group Name</Label>
              <Input
                type="text"
                name="text"
                id="groupname"
                placeholder="Group Name..."
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Group Description</Label>
              <Input
                type="textarea"
                name="text"
                id="groupdesc"
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
                id="grouplink"
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
                id="examplePassword"
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