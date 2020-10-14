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
          <div className="centered">Mysteries Of Universe</div>
          <div className="c2">(Oct 23 to Nov 28)</div>
          <div className="arrow bounce start">
           <a className="fa fa-arrow-down fa-2x" href="#main"></a>
          </div>
        </div>
        
        <div class="main" id="main">
       <Header as="h1" id="lecture" size="huge">Brief about the lectures </Header>
        <p class="desp">Indian Physics Association (IPA), IIT Roorkee Chapter along with Physics and Astronomy Club, IIT Roorkee heartily invites you to a series of four lectures in the field of 
          Theoretical High Energy Physics and Cosmology, dubbed as <em>The 
          Institute Lecture MOU(Mysteries of Universe)</em>.</p> <p class="desp"> The lectures will be 
          the source of immense information covering from Gravity to Black Holes to
           Gravitational Waves to Hawking Radiation and other related areas. In the lectures, you will be 
           interacting with some of the eminent physicists of our times. 
           With these lectures, you will join us as we go on for a beautiful and 
           knowledgeable experience of the profound and exciting aspects of theoretical physics and Cosmology.
           </p><br></br><br></br>
        
          <Container textAlign="center">
            <Card.Group textAlign ="center" itemsPerRow="4" stackable>
              <Card
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              >
                <Image src={urlEW} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Edward Witten</Card.Header>
                  <Card.Meta>2-DIMENSIONAL GRAVITY AND VOLUMES OF MODULI SPACES</Card.Meta>
                  <Card.Description>
                    <p><strong>Oct 23 6 PM IST</strong></p>
                  <p>
                  Field Medalist (1990), Fundamental Physics laureate (2012), led the "Second Superstring Revolution". Widely regarded as the "successor of Einstein", Professor Witten's path-breaking treasure trove of contributions to theoretical Physics have led to important developments in pure Mathematics.
                  </p>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                  <Button fluid basic color='green'>
                    ZOOM link
                  </Button>
                  <Button fluid basic color='blue'>
                    View Poster
                  </Button>
                  </div>
                  
                </Card.Content>

              </Card>
              <Card
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              >
                <Image src={urlCV} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Cumrun Vafa</Card.Header>
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
                  <Card.Header>Juan Maldacena</Card.Header>
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
                  <Card.Header>Abhay Ashtekar</Card.Header>
                  <Card.Meta>Co-Worker</Card.Meta>
                  <Card.Description>
                    Matthew is a pianist living in Nashville.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
          <div class="footer">
            Organising teams
            <p>
              
            </p>
          </div>
          </div>
          
          
        </div>
      )
    }
  }
  
  export default MainView