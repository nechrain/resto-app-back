import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Form,
  FormGroup, Label, Input,} from "reactstrap";
  import { connect } from "react-redux";
  import { editMenuInApi } from "../../actions/adminActionCreator"

class EditCard extends React.Component {
 
  state = {
    id: this.props.el.id,
    title: this.props.el.title,
    image: this.props.el.image,
    price: this.props.el.price,
    description: this.props.el.description,
    modal: false
  };
  toggle = () => this.setState({ modal: !this.state.modal });
  render() {
    return (
      <div>
        <Button color="warning" onClick={this.toggle}>Edit Card</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Edit Car</ModalHeader>
          <ModalBody>
          <Form className="form">
          <Col>
            <FormGroup>
              <Label>Title</Label>
              <Input
              type="text" id="fname" name="fname"
              defaultValue={this.props.el.title}
              onChange={(e) => this.setState({ title: e.target.value })}
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="examplePassword">image</Label>
              <Input
              type="text" id="fname" name="fname"
              defaultValue={this.props.el.image}
              onChange={(e) => this.setState({ image: e.target.value })}
              />
            </FormGroup>
          </Col> 
          <Col>
            <FormGroup>
          <Label>Description</Label>
              <Input
              type="text" id="fname" name="fname"
              defaultValue={this.props.el.description}
              onChange={(e) => this.setState({ description: e.target.value })}
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="examplePassword">Price</Label>
              <Input
              type="text" id="fname" name="fname"
              defaultValue={this.props.el.price}
              onChange={(e) => this.setState({ price: e.target.value })}
              />
            </FormGroup>
          </Col> 

          </Form>
          </ModalBody>

          <ModalFooter>
            <Button color="warning"  onClick={() =>
                this.props.editMenu({
                  id: this.props.el.id,
                  title: this.state.title,
                  image: this.state.image,
                  price: this.state.price,
                  description: this.state.title,
                })
              }>
             Change Card
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
   editMenu: (el,id) => dispatch(editMenuInApi(el, id)),
  };
};
export default connect(null, mapDispatchToProps)(EditCard);
