import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Button,
  FormGroup,
  Label,
  Input,
  Container,
} from "reactstrap";

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
  const [dateFilter, setDateFilter] = React.useState({});
  const toggle = () => {
    setModal(!modal);
  };
  const [title, setTitle] = useState("");
  const handleChangeFilterTitle = (e) => {
    if (e.target.value === "") {
      getAll();
    }
    let filterdEvents = [];
    filterdEvents = events.filter((event) =>
      event.title.startsWith(e.target.value)
    );
    setEvents(filterdEvents);
  };
  const handleChangeFilter = (e) => {
    setDateFilter({ ...dateFilter, [e.target.name]: e.target.value });
  };
  const deleteFilter = () => {
    getAll();
  };
  useEffect(() => {
    console.log(dateFilter);
    axios
      .get("http://localhost:8051/events/date", { params: dateFilter })
      .then((res) => {
        setEvents(res.data);
      });
  }, [dateFilter]);
  return (
    <div>
      <Container fluid="lg">
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label>StartDate</Label>
              <Input
                size={"small"}
                id="startDate"
                name="date1"
                type="date"
                onChange={handleChangeFilter}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>EndDate</Label>
              <Input
                size={"small"}
                id="endDate"
                name="date2"
                type="date"
                onChange={handleChangeFilter}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Title</Label>
              <Input
                size={"small"}
                id="title"
                name="title"
                type="text"
                onChange={handleChangeFilterTitle}
              ></Input>
            </FormGroup>
          </Col>
        </Row>
      </Container>
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
      <Button
        className="btn m-2"
        onClick={() => {
          deleteFilter();
        }}
        outline
        color="info"
      >
        Delete Filters
      </Button>
    </div>
  );
};

export default EventsPage;
