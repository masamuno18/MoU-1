import React, { Component } from 'react'
import {
  Header,
  Button,
  Image,
  Item,
  Label,
  Modal,
  Icon,
  Grid
} from 'semantic-ui-react'

import "../styles/speaker.css"

class Speaker extends Component {

  constructor (props) {
    super(props)

    this.state = {
      modalOpen: ''
    }
  }

  handleOpen = e => this.setState({ modalOpen: this.props.name })

  handleClose = () => this.setState({ modalOpen: '' })

  handleZOOM = e => {
    window.open(this.props.urlZOOM, "_blank")
  }

  handlePoster = e => {
    window.open(this.props.urlPoster, "_blank")
  }

  handleInfo = e => {
    window.open(this.props.urlInfo, "_blank")
  }

  handleY = e => {
    window.open(this.props.urlY, "_blank")
  }

  handleF = e => {
    window.open(this.props.urlF, "_blank")
  }

  render() {

    const {name, urlImage, title, description, time, abstract, urlPoster, urlZOOM, urlY, urlF} = this.props;

    return(

      <Item>
        <Item.Image src={urlImage}/>
          <Item.Content verticalAlign="middle">

              <Item.Header id="ih">
                <Grid columns="2" stackable>
                  <Grid.Row>
                    <Grid.Column >
                    <a id="hh" onClick={this.handleInfo}>{name}</a>
                    </Grid.Column>
                    <Grid.Column id="time"  textAlign="right" floated="right">
                    <Label color="teal" icon='clock' content={time} />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                
                
                </Item.Header>
              <Item.Meta>{title}</Item.Meta>
              <Item.Description>{description}</Item.Description>

              <Item.Extra>
                <Grid stackable columns="3">
                  <Grid.Row>

                    

                    
                     <Grid.Column floated="left">

                   

                      
                      <Button inverted disabled={!urlPoster} color="purple" content="View Poster" onClick={this.handlePoster}/>
                      {/* <Button.Or text="&"/> */}
                   
                
                    <Modal
                      trigger={<Button inverted floated="right" color="orange" content="View Abstract" onClick={this.handleOpen}/>}
                      open={this.state.modalOpen === name}
                      onClose={this.handleClose}
                    >
                  
                      <Modal.Header>
                        {title}
                        <Button floated="right" icon onClick={this.handleClose}><Icon color="red" name="close"/></Button>
                      </Modal.Header>
    
                      <Modal.Content image>
                        <Image size='medium' src={urlImage} />
                        <Modal.Description>
                          <Header>Abstract</Header>
                          <p> {abstract}</p>
                        </Modal.Description>
                      </Modal.Content>

                    </Modal>
                    
                    </Grid.Column>

                      <Grid.Column floated="right">
                        {urlF && <Button floated="left" inverted color="green" onClick={this.handleF} content="Feedback"/>}
                        {!urlF && <Button inverted color="blue" disabled={!urlZOOM} onClick={this.handleZOOM} content="ZOOM Link"/>}
                        <Button floated="right" inverted disabled={!urlY} color="red" onClick={this.handleY} content="YouTube Link"/>

                      </Grid.Column>
                      
                  </Grid.Row>
                </Grid>
              </Item.Extra>
          </Item.Content>
        </Item>
    )
  }
}

export default Speaker