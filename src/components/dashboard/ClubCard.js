import axios from "axios";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React from 'react';

const ClubCard = (props) => {

  const deleteClub = () => {
    console.log(props.id)
    axios.delete(`http://localhost:8051/clubs/${props.id}`)
    .then(res => console.log(res));
    toggle2();
  }

  const [modal, setModal] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  const [modal3, setModal3] = React.useState(false);
  const toggle = () => {
    setModal(!modal);
  }
  const toggle2 = () => {
    setModal2(!modal2);
  }
  const toggle3 = () => {
    setModal3(!modal3);
  }
  const [formData, setData] = React.useState({ name: "", description: "",category: "" });
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [location, setLocation] = React.useState("");
   const [email, setEmail] = React.useState("");
   const [website, setWebsite] = React.useState("");
   const [phone, setPhone] = React.useState("");
   const [date, setDate] = React.useState(null);

  const handleChangeName = (e) => {
    setName(e.target.value);
    setData({ ...formData, name: e.target.value });
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
    setData({ ...formData, description: e.target.value });
  };
  const handleChangeLocation = (e) => {
    setLocation(e.target.value);
    setData({ ...formData, location: e.target.value });
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setData({ ...formData, email: e.target.value });
  };
  const handleChangeWebsite = (e) => {
    setWebsite(e.target.value);
    setData({ ...formData, website: e.target.value });
  };
  const handleChangeDate = (e) => {
    setDate(e.target.value);
    setData({ ...formData, date: e.target.value });
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
    setData({ ...formData, phone: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const clubss = { name, description, location, email,website, phone, date  };
    const idd = {
      id : props.id
    }
    const clubs = {...clubss, ...idd};
    console.log(clubs)
    const customConfig = {
      headers: {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*'
      }
  };
  
    axios.put(`http://localhost:8051/clubs`, 
    clubs, customConfig)
    .then(response => console.log(response));
  }
  

  return (
    <>
    
    <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Details</ModalHeader>
          <ModalBody>
          <CardImg alt="Card image cap" src={props.image} />
              <FormGroup>
                <Label className="mt-3" for="name">{props.name}</Label>
                <p className="mt-3">
                  {props.description}
                </p>
                </FormGroup>
              {/* <Button>Submit</Button> */}
              <ModalFooter>
                <Button color="danger" onClick={toggle}>Exit</Button>
              </ModalFooter>
          </ModalBody>
        </Modal>

        <Modal isOpen={modal2} toggle={toggle2} >
          <ModalHeader toggle={toggle2}>Do you really want to delete this Club ?</ModalHeader>
          <ModalBody>
          <CardImg alt="Card image cap" src={props.image} />

              <ModalFooter>
                <Button color="danger" onClick={deleteClub}>Yes</Button>
                <Button color="primary" onClick={toggle2}>No</Button>
              </ModalFooter>
          </ModalBody>
        </Modal>

        <Modal isOpen={modal3} toggle={toggle3} >
          <ModalHeader toggle={toggle3}>Update Course</ModalHeader>
          <ModalBody>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder={props.name}
                  type="text"
                  value={name}
                  onChange={handleChangeName}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder={props.description}
                  type="textarea"
                  value={description}
                  onChange={handleChangeDescription}
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Location</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder={props.location}
                  type="text"
                  value={location}
                  onChange={handleChangeLocation}
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder={props.email}
                  type="text"
                  value={email}
                  onChange={handleChangeEmail}
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Website</Label>
                <Input
                  id="website"
                  name="website"
                  placeholder={props.website}
                  type="text"
                  value={website}
                  onChange={handleChangeWebsite}
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder={props.phone}
                  type="text"
                  value={phone}
                  onChange={handleChangePhone}
                />
              </FormGroup>
             
              {/* <Button>Submit</Button> */}
              <ModalFooter>
                <Button color="primary" type="submit" onClick={toggle3}>Submit</Button>
                <Button color="danger" onClick={toggle3}>Cancel</Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </Modal>
    
    <Card>
      <CardImg alt="Card image cap" src={props.image} />
      <Button style={{"padding" : "5px 6px", "marginRight" :"8px"}} color={props.color} onClick={toggle3}>Update</Button>
      <CardBody className="p-4 pt-3">
        <CardTitle tag="h5">{props.name}</CardTitle>
        {/* <CardSubtitle className="mt-2 ">{props.subtitle}</CardSubtitle> */}
        <CardText className="mt-3">Location : {props.location}</CardText>
        <div className="d-flex justify-content-between">
        <Button color={props.color} onClick={toggle}>Join</Button>
          <div>
          <Button style={{"padding" : "5px 6px", "marginRight" :"8px"}} color={props.color} onClick={toggle}><i class="bi bi-info-circle-fill"></i></Button>
          <Button style={{"padding" : "5px 6px"}} color="danger" onClick={toggle2}><i class="bi bi-trash-fill"></i></Button>
          </div>
        </div>
      </CardBody>
    </Card>
    </>
  );
};

export default ClubCard;
