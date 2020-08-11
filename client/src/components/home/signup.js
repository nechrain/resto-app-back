import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { postuser } from "../../actions/useraction";
import { connect } from "react-redux";

class SignUp extends React.Component {
  state = {
    modal: false,
    login: "",
    password: "",
    name: "",
  };

  toggle = () => this.setState({ modal: !this.state.modal });
  send = () => {
    let obj = {
      login: this.state.login,
      password: this.state.password,
      name: this.state.name,
    };
    this.props.postuser(obj);
  };
  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.toggle}>
          Sign up
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Sign up form</ModalHeader>
          <ModalBody>
            <Form className="form">
              <Col>
                <FormGroup>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    id="fname"
                    name="fname"
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                </FormGroup>
              </Col>

              <Col>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="myemail@email.com"
                    onChange={(e) => this.setState({ login: e.target.value })}
                  />
                </FormGroup>
              </Col>

              <Col>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="********"
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                </FormGroup>
              </Col>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={() => this.send()}>
              Submit information
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

const mapDispatchToProps = (dispatch) => ({
  postuser: (obj) => dispatch(postuser(obj)),
});

export default connect(null, mapDispatchToProps)(SignUp);
