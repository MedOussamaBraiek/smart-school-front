import React from "react";
import { Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";
import axios from "axios";
import ClubCard from "../components/dashboard/ClubCard";

const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

const ClubsPage = () => {

  const [modal, setModal] = React.useState(false);


  const toggle = () => {
    setModal(!modal);
  }

  const baseUlr = "http://localhost:8051/clubs";

  const [clubs, setClubs] = React.useState(null);

  const getClubs = () => {
    fetch(baseUlr)
    .then((response) => response.json())
    .then(res =>  setClubs(res))
  }

  React.useEffect(() => {
    getClubs();
   }, []);

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

    const club = { name, description, location, email, website, phone,date };

    const customConfig = {
      headers: {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*'
      }
  };


    axios.post('http://localhost:8051/clubs', 
    club, customConfig)
    .then(response => console.log(response));
  }

  const [search, setSearch] = React.useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);

    if (e.target.value) {
      setClubs(
        clubs.filter((club) =>
          club.name.toLowerCase().startsWith(e.target.value.toLowerCase())
        )
      );
    } else getClubs();
  };

  return (
    <div>
      {/***Top Cards***/}

    <div className="mt-2 mb-4">
      <div className="d-flex justify-content-between">
        <Button color="dark" onClick={toggle} >Add Club</Button>
        <div className="search__input d-flex">
                  <Input
                    type="text"
                    placeholder="Search Club..."
                    value={search}
                    onChange={handleSearch}
                  />
                   <span className="mt-1" style={{"transform" : "translateX(-30px)"}}>
                    <svg
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.6767 14.5454L11.0909 11.9597M13.0779 7.4935C13.0779 10.8287 10.3742 13.5324 7.03894 13.5324C3.70373 13.5324 1 10.8287 1 7.4935C1 4.15828 3.70373 1.45456 7.03894 1.45456C10.3742 1.45456 13.0779 4.15828 13.0779 7.4935Z"
                        stroke="#4FD1C5"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
          </div>
        </div>
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>Add Club</ModalHeader>
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
                  placeholder="Course name"
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
                  placeholder="Description"
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
                  placeholder="Location"
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
                  placeholder="Email"
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
                  placeholder="Website"
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
                  placeholder="Phone"
                  type="text"
                  value={phone}
                  onChange={handleChangePhone}
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Date</Label>
                <Input
                  id="date"
                  name="date"
                  placeholder="Date"
                  type="date"
                  value={date}
                  onChange={handleChangeDate}
                />
              </FormGroup>
             
              {/* <Button>Submit</Button> */}
              <ModalFooter>
                <Button color="primary" type="submit" onClick={toggle}>Submit</Button>
                <Button color="danger" onClick={toggle}>Cancel</Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </Modal>
      </div>
      {/***Blog Cards***/}
      <Row>
        {clubs && clubs.map((club, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <ClubCard
              image={bg2}
              name={club.name}
              description={club.description}
              location={club.location}
              color={club.btnbg}
              id={club.id}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ClubsPage;
