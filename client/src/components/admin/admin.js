import React, { Component } from "react";
import "./admin.css";
import Navbar from "./navbar/navbar";
import AddCard from "./addcard";
import Image from "./38.jpeg";
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { trash, edit} from '@fortawesome/fontawesome-free-solid'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import EditCard from "./editcard";
import { connect } from "react-redux";
import { getMenuData, delMenuFromApi } from "../../actions/adminActionCreator";

class Admin extends React.Component {
  /*****************************get the menu from axios******* */
  componentDidMount() {
    this.props.getMenu();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="admin">
          <AddCard  />
          <div className="card-group">
            {this.props.menu.map((el) => (
              <div className="carta">
                <Card style={{ width: "18rem" }} key={el.id}>
                  <img className="imaja" src={el.image} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{el.title}</CardTitle>
                    <CardText>{el.description}</CardText>
                    <CardSubtitle>Prix:   {el.price}   TND</CardSubtitle>
                  </CardBody>
                  <div className="buttons">
              <div className="editi" >
                <EditCard  el={el}/>{" "}
              </div>
             
              <button className='btn-trash'  onClick= {() => this.props.delMenu(el.id)} >supp</button>
            </div>
                </Card>
              </div>
            ))}
           
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    menu: state.menu,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getMenu: () => dispatch(getMenuData()),
    delMenu: (id) => dispatch(delMenuFromApi(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
