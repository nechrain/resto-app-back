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
import { getalluser } from "../../actions/useraction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
let user = [];
class SignIn extends React.Component {
  state = {
    modal: false,
    login: "",
    pass: "",
  };
  componentDidMount = () => this.props.getalluser();
  toggle = () => this.setState({ modal: !this.state.modal });
  filter = (Event) => {
    user = this.props.user[0].filter(
      (el) => el.login == this.state.login && el.password == this.state.pass
    );
    console.log("usersignin", user);
    if (user.length > 0) {
      alert("bienvenu" + user[0].name);
      if (user[0].login === "nessrinechammakhi113@gmail.com")
        window.location.href ="http://localhost:3000/admin"
      else window.location.href = "http://localhost:3000/client"
    } else {
      alert("user non def");
      Event.preventDefault();
    }
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Sign in
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            <center>Sign in Form</center>
          </ModalHeader>
          <ModalBody>
            <Form className="form">
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
                    onChange={(e) => this.setState({ pass: e.target.value })}
                  />
                </FormGroup>
              </Col>
            </Form>
          </ModalBody>
          <ModalFooter>
            {user.login === "nessrinechammakhi113@gmail.com" &&
            user.password === 123456 ? (
              <Link to="/admin"></Link>
            ) : (
              <Link to="/client"></Link>
            )}
            <Button color="danger" onClick={(Event) => this.filter(Event)}>
              Sign in
            </Button>

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
  getalluser: (obj) => dispatch(getalluser(obj)),
});
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
