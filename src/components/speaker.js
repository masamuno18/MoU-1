import React, { Component } from 'react'
import {
  Header,
  Button,
  Image,
  Item,
  Label,
  Modal,
  Icon
} from 'semantic-ui-react'


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
    this.handleClose()
    window.open(this.props.urlZOOM, "_blank")
  }

  handlePoster = e => {
    this.handleClose()
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

              <Item.Header as="a" onClick={this.handleInfo}>{name}</Item.Header>
              <Item.Meta>{title}</Item.Meta>
              <Item.Description>{description}</Item.Description>

              <Item.Extra>
                <Label color="teal" icon='clock' content={time} />
                <Button inverted disabled={!urlZOOM} color="green" floated='right' content="ZOOM LINK" onClick={this.handleZOOM}/>
                <Button inverted disabled={!urlPoster} color="purple" floated='right' content="View Poster" onClick={this.handlePoster}/>
                <Button icon  size='tiny' color="youtube" icon="youtube" onClick={this.handleY}>
                  </Button>
                

                <Modal
                  trigger={<Button inverted  color="orange" floated='right' content="View Abstract" onClick={this.handleOpen}/>}
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
              </Item.Extra>
            </Item.Content>
          </Item>
    )
  }
}

export default Speaker