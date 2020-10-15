import React, { Component } from 'react'
import {
  Header,
  Segment,
  Container,
  Item,
  Grid,
  Image,

} from 'semantic-ui-react'
import { Link, animateScroll as scroll } from "react-scroll";

import Speaker from '../components/speaker.js'
import '../styles/mainview.css'
import {abstractJS, abstractCV, abstractJM, abstractEW, abstractAA} from "../secrets/abstract.js"

 

class MainView extends Component {

    render () {

      return (

        <div className='mainWrapper'>

          <div className="mainimg">
            <Container textAlign="center">

              <div className="mainHeader">
                <Header as="h1" size="huge" className='white'>Mysteries of Universe</Header>
                <Header sub className="white">(Oct 17 to Nov 27, 2020)</Header>
              </div>

              <Link
                to="speaker"
                spy={true}
                smooth={true}
                duration={500}
              >
                <div className="arrow bounce start">
                <a className="fa fa-arrow-down fa-3x"></a>
              </div>
              </Link>
              

            </Container>
          </div>

         <div className="speaker" id="speaker">
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
                  urlImage={require('../resources/images/JS.jpg')}
                  title="The Birth and Development of Superstring Theory"
                  description="Theoretical Physicist and one of the founding fathers of the String theory."
                  time="Oct-17 8:30 PM IST (UTC + 5:30)"
                  abstract={abstractJS}
                  urlPoster={require('../resources/pdfs/JS.pdf')}
                />

                <Speaker
                  name="Edward Witten"
                  urlImage={require('../resources/images/EW.jpg')}
                  title="2-Dimensional gravity and volumes of moduli spaces"
                  description="Prestigious and highly awarded Physicist who also developed important concepts in pure mathematics. "
                  time="Oct-23 6:00 PM IST (UTC + 5:30)"
                  urlPoster={require('../resources/pdfs/EW.pdf')}
                  abstract={abstractEW}
                />

                <Speaker
                  name="Cumrun Vafa"
                  urlImage={require('../resources/images/CV.jpg')}
                  title="Puzzles to Unravel the Universe"
                  description="Phd student of Prof. Witten, A Physicist with research focused on Quantum gravity."
                  time="Oct-23 6:00 PM IST (UTC + 5:30)"
                  abstract={abstractCV}
                />

                <Speaker
                  name="Juan Maldacena"
                  urlImage={require('../resources/images/JM.jpg')}
                  title="Black holes and the information in Hawking radiation"
                  description="Discoverer of AdS/CFT correspondence, Highly cited Theoretical Physicist."
                  time="Nov-21 6:00 PM IST (UTC + 5:30)"
                  abstract={abstractJM}
                />

                <Speaker
                  name="Abhay Ashtekhar"
                  urlImage={require('../resources/images/AA.jpeg')}
                  title="Black Holes, Big Bang and Gravitational Waves: Illustrations of Paradigm Shifts in Fundamental Science"
                  description="Founder of loop quantum gravity and loop quantum cosmology."
                  time="Nov-28 8:00 PM IST (UTC + 5:30)"
                  abstract={abstractAA}
                />

              </Item.Group>
            </Segment>
           </Container>
          </div>
        
         <div className="about">
            <Header as="h1" id="#lecture" size="huge" color="purple">Brief about the lectures </Header>
            <p className="desp">
              Indian Physics Association (IPA), IIT Roorkee Chapter along with Physics and Astronomy Club, 
              IIT Roorkee heartily invites you to a series of five lectures in the field of 
              Theoretical High Energy Physics and Cosmology, dubbed as <b>The Institute Lecture Series - MOU 
              (Mysteries of Universe)</b>.
            </p> 
            <p className="desp"> 
              The lectures will be 
              the source of immense information covering from Gravity to Black Holes to Gravitational Waves 
              to Hawking Radiation and other related areas. In the lectures, we shall be interacting with some of the 
              biggest names in the field of Physics times. Join us as we go on for a beautiful and 
              exhilirating journey of the most profound and exciting aspects of theoretical Physics and Cosmology.
           </p>
           <br></br><br></br>
         </div>
          
         
            <Segment padded inverted>
              <Grid stackable>
                
                  <Grid.Column width="9" floated="left">
                    <Image.Group size='small'>
                      <Image src={require('../resources/images/iitrlogo.png')} title="IIT Roorkee"/>
                      <Image src={require('../resources/images/Ipa.png')} title="Indian Physics Association, Roorkee Chapter"  />
                      <Image src={require('../resources/images/wma.png')} title="Mysteries of Universe by Prof. Aalok Mishra"/>
                      <Image src={require('../resources/images/stclogo.png')} title="Student Technical Council, IITR"  />
                      <Image src={require('../resources/images/paaclogo.png')} circular title="Physics and Astronomy Club, IITR"/>
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