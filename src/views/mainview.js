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
                <h1 size="huge" className='h1'>Mysteries of the Universe </h1>
                <p className="date">(Oct 17 to Nov 27, 2020)</p>
                <h2 className='h2' id="h2">
                  Presented by Institute Lecture Series committee, in collaboration with the Indian Physics Association, Roorkee Chapter
                  and the Student's Technical Council (The Physics and Astronomy Club)
                </h2>
              </div>

              <Link
                to="speaker"
                spy={true}
                smooth={true}
                duration={500}
              >
                <div className="arrow bounce start">
                <a className="fa fa-arrow-down fa-3x" id="ba"></a>
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
              <Item.Group divided>
                
                <Speaker
                  name="John H. Schwarz"
                  urlImage={require('../resources/images/JS.jpg')}
                  title="The Birth and Development of Superstring Theory"
                  description="Harold Brown Professor of Theoretical Physics at Caltech and one of the founding fathers of Superstring theory"
                  time="Oct-17 8:30 PM IST (UTC + 5:30)"
                  abstract={abstractJS}
                  urlPoster={require('../resources/images/JSP.jpeg')}
                  urlInfo="http://pma.caltech.edu/people/john-h-schwarz"
                  urlY="https://www.youtube.com/watch?v=TwayPGEXx1E"
                  urlPpt={require('../resources/PPTs/JS.pdf')}
                  
                />

                <Speaker
                  name="Edward Witten"
                  urlImage={require('../resources/images/EW.jpg')}
                  title="2-Dimensional gravity and volumes of moduli spaces"
                  description="Fields Medalist and Charles Simonyi Professor in the School of Natural Sciences at the Institute for Advanced Study, Princeton "
                  time="Oct-23 6:00 PM IST (UTC + 5:30)"
                  urlPoster={require('../resources/images/EWP.jpeg')}
                  abstract={abstractEW}
                  urlInfo="http://www.sns.ias.edu/witten"
                  urlPpt={require('../resources/PPTs/EW.pdf')}
                  urlY="https://youtu.be/DaRwdfMiR3w"
                />

                <Speaker
                  name="Cumrun Vafa"
                  urlImage={require('../resources/images/CV.jpg')}
                  title="Puzzles to Unravel the Universe"
                  description="Hollis Professor of Mathematics and Natural Philosophy at Harvard"
                  time="Oct-31 6:00 PM IST (UTC + 5:30)"
                  urlPoster={require('../resources/images/CVP.jpeg')}
                  abstract={abstractCV}
                  urlInfo="https://www.physics.harvard.edu/people/facpages/vafa"
                />

                <Speaker
                  name="Juan Maldacena"
                  urlImage={require('../resources/images/JM.jpg')}
                  title="Black holes and the structure of spacetime"
                  description="Carl P. Feinberg Professor in the School of Natural Sciences at the Institute for Advanced Study, Princeton"
                  time="Nov-21 6:00 PM IST (UTC + 5:30)"
                  urlPoster={require('../resources/images/JMP.jpg')}
                  abstract={abstractJM}
                  urlInfo="https://www.ias.edu/scholars/maldacena"
                />

                <Speaker
                  name="Abhay Ashtekar"
                  urlImage={require('../resources/images/AA.jpeg')}
                  title="Black Holes, Big Bang and Gravitational Waves: Illustrations of Paradigm Shifts in Fundamental Science"
                  description="Director, Institute for Gravitation & the Cosmos; Evan Pugh Professor of Physics; Holder, Eberly Chair"
                  time="Nov-27 8:00 PM IST (UTC + 5:30)"
                  urlPoster={require('../resources/images/AAP.jpg')}
                  abstract={abstractAA}
                  urlInfo="http://igpg.gravity.psu.edu/people/Ashtekar/index.html"
                />

              </Item.Group>
            </Segment>
           </Container>
          </div>
        
         <div className="about">
            <Header as="h1" id="#lecture" size="huge" color="purple">Brief about the lectures </Header>
            <p className="desp">
            The Institute Lecture Series Committee, 
            in collaboration with the Students' Technical Council 
            (the Physics and Astronomy Club, in particular) and the Indian Physics Association, Roorkee Chapter, 
            is delighted to bring you a bouquet of Mysteries of the Universe (MOU) online lecture series 
            delivered by world renowned experts who are the founding fathers of our 
            efforts in understanding concepts like black holes, unification of forces, 
            origin of the universe and quantum gravity.
            </p> 
            <p className="desp"> 
              The lectures will be 
              a source of immense information covering areas ranging from Black Holes to Gravitational Waves to Quantum Gravity
              and other related areas. In these lectures, we shall be interacting with some of the 
              biggest names in the field of Physics of our times. Join us as we go on a beautiful and 
              exhilarating journey of the most profound and exciting aspects of theoretical Physics and Cosmology.
           </p>
           <br></br><br></br>
         </div>
          
         
            <Segment padded inverted>
              <Grid stackable>
                
                  <Grid.Column width="9" floated="left">
                    <Image.Group padded>
                      <Image size="tiny" src={require('../resources/images/iitrlogo.jpg')} circular title="IIT Roorkee"/>
                      <Image size="small" src={require('../resources/images/Ipa.png')} title="Indian Physics Association, Roorkee Chapter"  />
                      <Image size="small" src={require('../resources/images/wma.png')} title="Mysteries of Universe by Prof. Aalok Misra"/>
                      <Image size="small" src={require('../resources/images/stclogo.png')} title="Student's Technical Council, IITR"  />
                      <Image size="small" src={require('../resources/images/paaclogo.png')} circular title="Physics and Astronomy Club, IITR"/>
                    </Image.Group>
                  
                  </Grid.Column>
                  
                  
                  <Grid.Column width="3" floated="right" textAlign="left" verticalAlign="middle">
                    <Header as="h2" id="contact"> Contact</Header>
                    <hr id="divi"/>
                    <Grid.Row>
                      <Header color="teal" as="a"> paac@iitr.ac.in</Header>
                    </Grid.Row>
                    <Grid.Row>
                      <Header color="teal" as="a">aalok.misra@ph.iitr.ac.in</Header>
                    </Grid.Row>
                    
                    
                  </Grid.Column>
                

              </Grid>
              
            </Segment>
        </div>
      )
    }
  }
  
  export default MainView