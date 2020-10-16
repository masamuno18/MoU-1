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

  render() {

    const {name, urlImage, title, description, time, abstract, urlPoster, urlZOOM, urlY} = this.props;

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

                    

                    <Grid.Column stretched >
                      <Button.Group fluid>

                      
                      <Button disabled={!urlPoster} color="purple" content="View Poster" onClick={this.handlePoster}/>
                      {/* <Button.Or text="&"/> */}
                   
                
                    <Modal
                      trigger={<Button floated="right"  color="orange" content="View Abstract" onClick={this.handleOpen}/>}
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
                    </Button.Group>
                    </Grid.Column>

                    <Grid.Column floated="right" stretched>
                      <Button.Group fluid>
                        <Button size="small" color="teal" content={urlZOOM&&"ZOOM"} disabled={urlZOOM} onClick={this.handleZOOM} id="zoom"></Button>
                        <Button.Or />
                        <Button size="small" icon disabled={urlY} color="youtube" onClick={this.handleY}><Icon size="large" name="youtube"/></Button>
                      </Button.Group>
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