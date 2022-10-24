import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";
import EventTable from "../components/dashboard/EventTable";

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

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [deleted, setDeleted] = useState(0);
  const getAll = () => {
    axios.get("http://localhost:8051/events/all").then((response) => {
      setEvents(response.data);
    });
  };
  const deleteFun = () => {
    setDeleted(deleted + 1);
  };
  useEffect(() => {
    getAll();
  }, [deleted]);

  const [modal, setModal] = React.useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div>
      <Row>
        <Col lg="12">
          <EventTable events={events} deleteFun={deleteFun}></EventTable>
        </Col>
      </Row>
      <Link to={"/addEvent"}>
        <Button className="btn" outline color="info">
          <i class="bi bi-plus"></i>Add Event
        </Button>
      </Link>
    </div>
  );
};

export default EventsPage;
