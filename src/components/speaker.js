import React, { Component } from 'react'
import {
  Header,
  Button,
  Image,
  Item,
  Label,
  Modal
} from 'semantic-ui-react'


class Speaker extends Component {

  constructor (props) {
    super(props)

    this.state = {
      modalOpen: ''
    }
  }

  handleOpen = name => this.setState({ modalOpen: name })

  handleClose = () => this.setState({ modalOpen: '' })

  handleZOOM = e => {
    this.handleClose()
  }

  handlePoster = e => {
    this.handleClose()
    window.open(this.props.urlPoster, "_blank")
  }

  render() {

    const {name, urlImage, title, description, time, abstract} = this.props;

    return(

      <Modal
        trigger={
          <Item onClick={() => this.handleOpen(name)}>
            <Item.Image src={urlImage}/>
            <Item.Content verticalAlign="middle">

              <Item.Header>{name}</Item.Header>
              <Item.Meta>{title}</Item.Meta>
              <Item.Description>{description}</Item.Description>

              <Item.Extra>
                <Label color="teal" icon='clock' content={time} />
                <Button inverted color="green" floated='right' content="ZOOM LINK" onClick={this.handleZOOM}/>
                <Button inverted color="purple" floated='right' content="View Poster" onClick={this.handlePoster}/>
              </Item.Extra>
              
            </Item.Content>
          </Item>
        }
        open={this.state.modalOpen === name}
        onClose={this.handleClose}
      >
         <Modal.Header>{title}</Modal.Header>
      

         <Modal.Content image>
          <Image size='medium' src={urlImage} />
          <Modal.Description>
            <Header>Abstract</Header>
            <p> {abstract}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default Speaker