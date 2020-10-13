import React, { Component } from 'react'
import axios from 'axios'
import {
  Form,
  FormGroup,
  Header,
  Message,
  Segment,
  Label,
  Icon,
  Button,
  Image,
  Container
} from 'semantic-ui-react'

class Register extends Component {
  constructor (props) {
    super(props)

    this.state = {
      submitSuccess: false,
    }
  }

  handleChange = (event, { name, value }) => {
    this.setState({ [name]: value }, () => {
      console.log(this.state.date)
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    const {
      name,
      email,
      institute,
      designation,
      country,
      submitSuccess
    } = this.state

    var url = `https://docs.google.com/forms/u/5/d/e/1FAIpQLScT-MwX14ArqVffaEHYH-TtlCTZA9VSfx3R9_070BM12FRzLw/formResponse`

    var formData = new FormData()
    formData.append('entry.1461829831', name)
    formData.append('entry.236179936', email)
    formData.append('entry.1585434173', institute)
    formData.append('entry.131549021', designation)
    formData.append('entry.79622650', country)

    axios({
      method: "post",
      url: url,
      data: formData,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(response => {console.log(response)})
  }

  render () {
    const {
      name,
      email,
      institute,
      designation,
      country,
      submitSuccess
    } = this.state

    return(
      <div styleName='main.form_wrapper'>

        <Container>
        <Header as='h2' dividing>
          Register for the event
        </Header>

      
          <Form
            onSubmit={this.handleSubmit}
            success={submitSuccess}
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
                name='institute'
                fluid
                label='Institute'
                placeholder='Current Institute'
                onChange={this.handleChange}
                required
                value={institute}
              />
              
            </Form.Group>
            <Form.Group widths='equal'>
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
            <Form.Button type='Submit'> Submit </Form.Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default Register