import {
  Button,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import React, { useEffect, useState } from "react";
//import reclamationServices from "../services/Reclamation.services";
import axios from "axios";
import ReclamationsTable from "../components/dashboard/ReclamationsTable";
import { Link } from "react-router-dom";

const ReclamationsPage = () => {
  const [reclamations, setReclamations] = React.useState([]);
  const [deleted, setDeleted] = useState(0);
  const [filter, setfilter] = useState({
    title: "",
    startDate: "",
    endDate: "",
  });
  const [options, setoptions] = useState({ title: [] });
  const handleChangeFilter = (e) => {
    setfilter({ ...filter, [e.target.name]: e.target.value });
  };
  const deleteFilter=()=>{
  setfilter({})
  }
  const increment = () => {
    setDeleted(deleted + 1);
  };

  useEffect(() => {
    axios.get(`http://localhost:8051/reclamations/all`).then((res) => {
      setReclamations(res.data);
      setoptions({ ...options, title: res.data });
    });
  }, [deleted]);
  useEffect(() => {
    axios
      .get("http://localhost:8051/reclamations/filter", {
        params: filter,
      })
      .then((res) => {
        if (res.data) {
          setReclamations(res.data);
        }
      });
  }, [filter]);
  return (
    <div>
      {/***Top Cards***/}

      {/***Table ***/}
      <Container fluid="lg">
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label>Title</Label>
              <Input
                size={"small"}
                id="title"
                name="title"
                type="select"
                onChange={handleChangeFilter}
              >
                {options["title"]?.map((option, k) => (
                  <option key={k} value={option.title}>
                    {option.title}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>StartDate</Label>
              <Input
                size={"small"}
                id="startDate"
                name="startDate"
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
                name="endDate"
                type="date"
                onChange={handleChangeFilter}
              />
            </FormGroup>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col lg="12">
          <ReclamationsTable
            reclamations={reclamations}
            increment={increment}
          />
        </Col>
      </Row>
      {/***Blog Cards***/}
      <Link to={"/addReclamation"}>
        <Button className="btn" outline color="info">
          <i className="bi bi-plus"></i>Add Reclamation
        </Button>
      </Link>
      <Button className="btn m-2" onClick={()=>{
        deleteFilter();
      }} outline color="info">
       Delete Filter
        </Button>
    </div>
  );
};

export default ReclamationsPage;
