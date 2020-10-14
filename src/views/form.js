import React, { Component } from 'react'
import {
  Form,
  Header,
  Message,
  Container,
  Segment,
  Button
} from 'semantic-ui-react'
import { GoogleSpreadsheet } from "google-spreadsheet";

import '../styles/form.css'

import {SPREADSHEET_ID, CLIENT_EMAIL, PRIVATE_KEY, SHEET_ID} from "../secrets/secret.js"

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);



class Register extends Component {
  constructor (props) {
    super(props)

    this.state = {
      submitSuccess: false,
      isLoading: false,
    }
  }
  
  appendSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      // loads document properties and worksheets
      await doc.loadInfo();
  
      const sheet = doc.sheetsById[SHEET_ID];
      const result = await sheet.addRow(row);

      if (result._rowNumber > 1) {
        this.setState({submitSuccess: true, isLoading: false})
        this.setState({name: '', country: '', institute: '', designation: '', email: ''})
      }
      
    } catch (e) {
      this.setState({isLoading:false})
      console.error('Error: ', e);
    }
  };

  handleChange = (event, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    
    this.setState({isLoading:true})

    const {
      name,
      email,
      institute,
      designation,
      country
    } = this.state

    var newRow = { 
      Name: name, 
      Email: email, 
      Institute: institute, 
      Designation: designation, 
      Country: country 
    };

    this.appendSpreadsheet(newRow);
  }

  render () {
    const {
      name,
      email,
      institute,
      designation,
      country,
      submitSuccess,
      isLoading
    } = this.state

    return(
      <div className='form_wrapper'>

        <Container>

          <Segment inverted padded >
          <Header as='h1' color="grey">
              Register for the event
            </Header>
          </Segment>
          

          <Segment inverted color="teal" padded >

            <Form
              size="huge"
              onSubmit={this.handleSubmit}
              success={submitSuccess}
              loading = {isLoading}
            >
              {submitSuccess && (
                <Message
                  success
                  header='Registered successfully!'
                  info
                  content='Your registration has been completed successfully.'
                />
              )}

              <Form.Group widths='equal'>

                <Form.Input
                  name='name'
                  fluid
                  label='Name'
                  placeholder='Name'
                  onChange={this.handleChange}
                  required
                  value={name}
                />

                <Form.Input
                  name='email'
                  fluid
                  label='Email'
                  placeholder='abc@example.com'
                  onChange={this.handleChange}
                  required
                  value={email}
                />
                
              </Form.Group>

              <Form.Input
                  name='institute'
                  fluid
                  label='Institute'
                  placeholder='Current Institute'
                  onChange={this.handleChange}
                  required
                  value={institute}
                />

              <Form.Group widths='equal'>
              
                <Form.Input
                  name='designation'
                  fluid
                  label='Designation'
                  placeholder='Current Designation'
                  onChange={this.handleChange}
                  required
                  value={designation}
                />
                <Form.Input
                  name='country'
                  fluid
                  label='Country'
                  placeholder='Country of residence'
                  onChange={this.handleChange}
                  required
                  value={country}
                />
              </Form.Group>

                <Button 
                  onClick={this.handleSubmit}
                  color="green"
                  inverted
                  primary
                  size="huge"
                >
                    Submit
                </Button>

            </Form>

          </Segment>
    
        </Container>
      </div>
    )
  }
}

export default Register