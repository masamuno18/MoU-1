import React, { Component } from 'react'
import {
  Header,
  Segment,
  Container,
  Item,
  Label, 
  GridColumn,
  Grid,
  Image,
  Divider
} from 'semantic-ui-react'

import Speaker from '../components/speaker.js'
import '../styles/mainview.css'

import {abstractJS, abstractCV, abstractJM} from "../secrets/abstract.js"
 

class MainView extends Component {

    render () {

      return (

        <div className='mainWrapper'>

          <div className="mainimg">
            <Container textAlign="center">

              <div className="mainHeader">
                <Header as="H1" size="huge" className='white'>Mysteries of Universe</Header>
                <Header sub className="white">(Oct 17 to Nov 27, 2020)</Header>
              </div>

              <div className="arrow bounce start">
                <a className="fa fa-arrow-down fa-3x" href="#speaker"></a>
              </div>

            </Container>
          </div>

         <div class="speaker" id="speaker">
          <Container >

            <div id="esh">
              <Header as="h1" size="huge">
                Event Speakers
              </Header>
            </div>
            
            <Segment padded textAlign="left" color="teal"> 
              <Item.Group divided link>
                
                <Speaker
                  name="John H. Schwarz"
                  urlImage={require('../images/JS.jpg')}
                  title="The Birth and Development of Superstring Theory"
                  description="One of the Founding fathers of String theory"
                  time="Oct-17 8:30 PM IST (UTC + 5:30)"
                  abstract={abstractJS}
                />

                <Speaker
                  name="Edward Witten"
                  urlImage={require('../images/EW.jpg')}
                  title="2-Dimensional gravity and volumes of moduli spaces"
                  description="Field Medalist (1990), Fundamental Physics laureate (2012), led the 'Second Superstring Revolution'."
                  time="Oct-23 6:00 PM IST (UTC + 5:30)"
                />

                <Speaker
                  name="Cumrun Vafa"
                  urlImage={require('../images/CV.jpg')}
                  title="2-Dimensional gravity and volumes of moduli spaces"
                  description="Field Medalist (1990), Fundamental Physics laureate (2012), led the 'Second Superstring Revolution'."
                  time="Oct-23 6:00 PM IST (UTC + 5:30)"
                  abstract={abstractCV}
                />

                <Speaker
                  name="Juan Maldacena"
                  urlImage={require('../images/JM.jpg')}
                  title="Black holes and the information in Hawking radiation"
                  description="Field Medalist (1990), Fundamental Physics laureate (2012), led the 'Second Superstring Revolution'."
                  time="Nov-21 6:00 PM IST (UTC + 5:30)"
                  abstract={abstractJM}
                />

                <Speaker
                  name="Abhay Ashtekhar"
                  urlImage={require('../images/AA.jpeg')}
                  title="Black Holes, Big Bang and Gravitational Waves: Illustrations of Paradigm Shifts in Fundamental Science"
                  description="Field Medalist (1990), Fundamental Physics laureate (2012), led the 'Second Superstring Revolution'."
                  time="Nov-28 8:00 PM IST (UTC + 5:30)"
                />

              </Item.Group>
            </Segment>
           </Container>
          </div>
        
         <div className="about">
           <Header as="h1" id="#lecture" size="huge" color="purple">Brief about the lectures </Header>
           <p class="desp">Indian Physics Association (IPA), IIT Roorkee Chapter along with Physics and Astronomy Club, IIT Roorkee heartily invites you to a series of four lectures in the field of 
           Theoretical High Energy Physics and Cosmology, dubbed as <em>The 
           Institute Lecture MOU (Mysteries of Universe)</em>.</p> <p class="desp"> The lectures will be 
           the source of immense information covering from Gravity to Black Holes to
           Gravitational Waves to Hawking Radiation and other related areas. In the lectures, you will be 
           interacting with some of the eminent physicists of our times. 
           With these lectures, you will join us as we go on for a beautiful and 
           knowledgeable experience of the profound and exciting aspects of theoretical physics and Cosmology.
           </p><br></br><br></br>
         </div>
          
         
            <Segment padded inverted>
              <Grid stackable>
                
                  <Grid.Column width="9" floated="left">
                    <Image.Group size='small'>
                      <Image src={require('../images/iitrlogo.png')}  circular />
                      <Image src={require('../images/Ipa.png')}  />
                      <Image src={require('../images/wma.png')}  />
                      <Image src={require('../images/stclogo.png')}  />
                      <Image src={require('../images/paaclogo.png')} circular />
                    </Image.Group>
                  
                  </Grid.Column>
                  
                  
                  <Grid.Column width="3" floated="right" textAlign="left" verticalAlign="middle">
                    <Header as="h2" id="contact"> Contact</Header>
                    <hr id="divi"/>
                    <Grid.Row>
                      <Header color="teal" as="a"> paac@iitr.ac.in</Header>
                    </Grid.Row>
                    <Grid.Row>
                      <Header color="teal" as="a">aalok.mishra@ph.iitr.ac.in</Header>
                    </Grid.Row>
                    
                    
                  </Grid.Column>
                

              </Grid>
              
            </Segment>
  

        </div>
      )
    }
  }
  
  export default MainView