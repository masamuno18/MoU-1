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
  Card,
  Item,
  Label
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
           <a className="fa fa-arrow-down fa-2x" href="#speaker"></a>
          </div>
        </div>

        <div class="speaker" id="speaker">
          
          <Container >

            <div id="esh">
              <Header as="h1" size="huge">
                Event Speakers
              </Header>
            </div>

            <Segment padded textAlign="left" color="teal"> 
              <Item.Group divided>
                <Item>
                  <Item.Image src={urlEW}/>
                  
                  <Item.Content verticalAlign="middle">

                    <Item.Header>Edward Witten</Item.Header>
                    <Item.Meta>2-DIMENSIONAL GRAVITY AND VOLUMES OF MODULI SPACES</Item.Meta>

                    <Item.Description>
                      Field Medalist (1990), Fundamental Physics laureate (2012), led the "Second Superstring Revolution".
                    </Item.Description>

                    <Item.Extra>
                      <Label color="teal" icon='clock' content='Oct-23 6:00 PM IST (UTC + 5:30)' />
                      <Button inverted color="green" floated='right' content="ZOOM LINK"/>
                      <Button inverted color="purple" floated='right' content="View Poster"/>
                    </Item.Extra>
                    
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image src={urlEW}/>
                  
                  <Item.Content verticalAlign="middle">

                    <Item.Header>Edward Witten</Item.Header>
                    <Item.Meta>2-DIMENSIONAL GRAVITY AND VOLUMES OF MODULI SPACES</Item.Meta>
                    
                    <Item.Description>
                      Field Medalist (1990), Fundamental Physics laureate (2012), led the "Second Superstring Revolution".
                    </Item.Description>

                    <Item.Extra>
                      <Label color="teal" icon='clock' content='Oct-23 6:00 PM IST (UTC + 5:30)' />
                      <Button inverted color="green" floated='right' content="ZOOM LINK"/>
                      <Button inverted color="purple" floated='right' content="View Poster"/>
                    </Item.Extra>
                    
                  </Item.Content>  
                </Item>

                <Item>
                  <Item.Image src={urlEW}/>
                  
                  <Item.Content verticalAlign="middle">

                    <Item.Header>Edward Witten</Item.Header>
                    <Item.Meta>2-DIMENSIONAL GRAVITY AND VOLUMES OF MODULI SPACES</Item.Meta>

                    <Item.Description>
                      Field Medalist (1990), Fundamental Physics laureate (2012), led the "Second Superstring Revolution".
                    </Item.Description>

                    <Item.Extra>
                      <Label color="teal" icon='clock' content='Oct-23 6:00 PM IST (UTC + 5:30)' />
                      <Button inverted color="green" floated='right' content="ZOOM LINK"/>
                      <Button inverted color="purple" floated='right' content="View Poster"/>
                    </Item.Extra>
                    
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image src={urlEW}/>
                  
                  <Item.Content verticalAlign="middle">

                    <Item.Header>Edward Witten</Item.Header>
                    <Item.Meta>2-DIMENSIONAL GRAVITY AND VOLUMES OF MODULI SPACES</Item.Meta>

                    <Item.Description>
                      Field Medalist (1990), Fundamental Physics laureate (2012), led the "Second Superstring Revolution".
                    </Item.Description>

                    <Item.Extra>
                      <Label color="teal" icon='clock' content='Oct-23 6:00 PM IST (UTC + 5:30)' />
                      <Button inverted color="green" floated='right' content="ZOOM LINK"/>
                      <Button inverted color="purple" floated='right' content="View Poster"/>
                    </Item.Extra>
                    
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image src={urlEW}/>
                  
                  <Item.Content verticalAlign="middle">

                    <Item.Header>Edward Witten</Item.Header>
                    <Item.Meta>2-DIMENSIONAL GRAVITY AND VOLUMES OF MODULI SPACES</Item.Meta>

                    <Item.Description>
                      Field Medalist (1990), Fundamental Physics laureate (2012), led the "Second Superstring Revolution".
                    </Item.Description>

                    <Item.Extra>
                      <Label color="teal" icon='clock' content='Oct-23 6:00 PM IST (UTC + 5:30)' />
                      <Button inverted color="green" floated='right' content="ZOOM LINK"/>
                      <Button inverted color="purple" floated='right' content="View Poster"/>
                    </Item.Extra>
                    
                  </Item.Content>
                </Item>
              </Item.Group>
            </Segment>
          </Container>
          
        </div>
        
        <div class="main">
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
        
          
          </div>
          
        </div>
      )
    }
  }
  
  export default MainView