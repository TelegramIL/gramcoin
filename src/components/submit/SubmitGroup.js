import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText,
} from 'reactstrap';
import '../../styles/submit.scss';
import AddGroup from '../../storage/datahandler';

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

  handleSubmit(event) {
    this.data = {groupname: event.groupname.value, description: event.description.value, link: event.link.value, password: event.password.value}
    //AddGroup(this.data);
      //event.preventDefault();
      //const data = new FormData(event.target);
      
    //   fetch('http://localhost:3001/submit/', {
    //     method: 'POST',
    //     mode: 'no-cors',
    //     body: 'vasya',
    //   })
    //   .then(function(response) {  
    //     console.log(response.headers.get('Content-Type'));  
    //     console.log(response.headers.get('Date'));
    
    //     console.log(response.status);  
    //     console.log(response.statusText);  
    //     console.log(response.type);  
    //     console.log(response.url);  
    // }).catch(function(error) {  
    //   console.log('Request failed', error)  
    // });
  }
  

  render() {
    return (
      <Container className="submit_container">
        <h2>Submit Group</h2>
        <Form target='_blank' method='POST' action="http://localhost:3001/submit/" className="form" onSubmit={(e) => this.handleSubmit(e.target)}>
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