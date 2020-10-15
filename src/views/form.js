import React, { Component } from 'react'
import {
  Form,
  Header,
  Message,
  Container,
  Segment,
  Radio
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
      name: '', 
      country: '', 
      institute: '', 
      designation: '', 
      email: ''
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

  handleChange = (e, { name, value }) => {
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
      isLoading,
      value
    } = this.state

    return(
      <div className="pageBG">

        <div className='form_wrapper'>

        <Container>

          <div className="formHeader">
            <Header as='h1' size="huge" id="fh">
              Register for the event
              <Header color="green" as="h3">*The registration is not mandatory for attendance.</Header>
            </Header>
            
          </div>
         
          <Segment color="black" padded >

            <Form
            className="form"
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

              <Form.Input
                name='institute'
                fluid
                label='Institute'
                placeholder='Current Institute'
                onChange={this.handleChange}
                required
                value={institute}
              />

              <Header as="h3">Designation <span style={{color: "red"}}>*</span></Header>
              <Form.Group inline id="fg">
                
              <Form.Field
                control={Radio}
                as="h1"
                name="designation"
                label='Student'
                value='Student'
                checked={designation === 'Student'}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                as="h1"
                name="designation"
                label='Post. Doc.'
                value='Post. Doc.'
                checked={designation === 'Post. Doc.'}
                onChange={this.handleChange}
              />
              <Form.Field
                control={Radio}
                as="h1"
                name="designation"
                label='Faculty Member'
                value='Faculty Member'
                checked={designation === 'Faculty Member'}
                onChange={this.handleChange}
              />
            </Form.Group>

              

              <Form.Input
                fluid
                name='country'
                label='Country'
                placeholder='Country of Residence'
                onChange={this.handleChange}
                required
                value={country}
              />

              <Form.Button 
                color="green"
                inverted
                primary
                size="large"
                content = "Submit"
              />

            </Form>
          </Segment>

        </Container>
        </div>
      </div>
      
    )
  }
}

export default Register