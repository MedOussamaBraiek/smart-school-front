import axios from "axios";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
  Alert,
} from "reactstrap";
import React from 'react';

const StudentPage = (props) => {


  const [formData, setData] = React.useState({ 
    name: "",
    description: "",
    floor: "",
    type:"",
    number:"" });
  const [name, setName] = React.useState("");


  const handleChangeName = (e) => {
    setName(e.target.value);
    setData({ ...formData, name: e.target.value });
  };
  

  return (
    <>
    
    <Card>
      <CardImg alt="Card image cap" src={props.image} />
      <Button style={{"padding" : "5px 6px"}} color={props.color} onClick={toggle3}>Update</Button>
      <CardBody className="p-4 pt-3">
        <CardTitle tag="h5">{props.name}</CardTitle>
        {/* <CardSubtitle className="mt-2 ">{props.subtitle}</CardSubtitle> */}
        <CardText className="mt-3">Floor : {props.floor}</CardText>
        <div className="d-flex justify-content-between">
        
          <div>
          <Button style={{"marginRight" :"20px"}} color={props.color} onClick={toggle}> <i class="bi bi-info-circle-fill"></i></Button>
          <Button  color="danger" onClick={toggle2}>Delete <i class="bi bi-trash-fill"></i></Button>
          </div>
        </div>
      </CardBody>
    </Card>
    </>
  );
};

export default StudentPage;
