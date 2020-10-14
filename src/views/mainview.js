import React, { Component } from 'react'
import {
  Accordion,
  Header,
  Icon,
  Grid,
  Button,
  Segment,
  Container,
  Divider,
  Image,
  Card
} from 'semantic-ui-react'
import axios from 'axios'
import '../styles/mainview.css'

import {urlAA, urlCV, urlEW, urlJM, urlbh} from "../secrets/images.js"
 
class MainView extends Component {

    render () {

      return (

        <div className='mainWrapper'> 
        
        <div className="mainimg">
          <div className="centered">Start</div>
          <div className="arrow bounce start">
           <a className="fa fa-arrow-down fa-2x" href="#lecture"></a>
          </div>
        </div>

          <Header as="h1" color="red" size="huge">
            Mysteries of Universe
          </Header>

          <Header as="h2" align="left" color="violet" size="medium">Description </Header> <br></br>

          <Container textAlign="center">
            <Card.Group textAlign ="center" itemsPerRow="4">
              <Card
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              >
                <Image src={urlEW} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Matthew Harris</Card.Header>
                  <Card.Meta>Co-Worker</Card.Meta>
                  <Card.Description>
                    Matthew is a pianist living in Nashville.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              >
                <Image src={urlCV} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Matthew Harris</Card.Header>
                  <Card.Meta>Co-Worker</Card.Meta>
                  <Card.Description>
                    Matthew is a pianist living in Nashville.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              >
                <Image src={urlJM} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Matthew Harris</Card.Header>
                  <Card.Meta>Co-Worker</Card.Meta>
                  <Card.Description>
                    Matthew is a pianist living in Nashville.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              >
                <Image src={urlAA} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Matthew Harris</Card.Header>
                  <Card.Meta>Co-Worker</Card.Meta>
                  <Card.Description>
                    Matthew is a pianist living in Nashville.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
        </div>
      )
    }
  }
  
  export default MainView