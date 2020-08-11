import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Form,
  FormGroup, Label, Input,} from "reactstrap";

  import { connect } from "react-redux";
  import { addMenuToApi } from "../../actions/adminActionCreator"

class AddCard extends React.Component {
  state = {
    modal: false,
  };
  toggle = () => this.setState({ modal: !this.state.modal });
  render() {
    return (
      <div>
        <Button color="warning" onClick={this.toggle}>Add Card</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.props.addMenu}><center>Add card</center></ModalHeader>
          <ModalBody>
          <Form className="form">
          <Col>
            <FormGroup>
              <Label>Title</Label>
              <Input
              type="text"  name="fname"
              onChange={(e) => this.setState({ title: e.target.value })}
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="examplePassword">image</Label>
              <Input
              type="text"  name="fname"
              onChange={(e) => this.setState({ image: e.target.value })}
              />
            </FormGroup>
          </Col> 
          <Col>
            <FormGroup>
          <Label>Description</Label>
              <Input
              type="text"  name="fname"
              onChange={(e) => this.setState({ description: e.target.value })}
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="examplePassword">Price</Label>
              <Input
              type="text"  name="fname"
              onChange={(e) => this.setState({ price: e.target.value })}
              />
            </FormGroup>
          </Col> 

          </Form>
          </ModalBody>

          <ModalFooter>
            <Button 
                 color="warning" onClick={() =>
                this.props.addMenu({
                  title: this.state.title,
                  image: this.state.image,
                  price: this.state.price,
                  description: this.state.description,
                })
              }>
             Add Card
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addMenu: (el) => dispatch(addMenuToApi(el)),
  };
};

export default connect(null, mapDispatchToProps)(AddCard);

