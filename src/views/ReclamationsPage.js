import { Button, Col, Row } from "reactstrap";
import { useEffect, useState } from "react";
//import reclamationServices from "../services/Reclamation.services";
import axios from "axios";
import ReclamationsTable from "../components/dashboard/ReclamationsTable";
import { Link } from "react-router-dom";

const ReclamationsPage = () => {
  const [reclamations,setReclamations]=useState([]);
  const [deleted,setDeleted]=useState(0);
  const increment=()=>{
  setDeleted(deleted+1);
  }
  useEffect(()=>{
    axios
    .get(`http://localhost:8051/reclamations/all`)
    .then((res) => {
      setReclamations(res.data);
    })
  },[deleted])
 
  return (
    <div>
      {/***Top Cards***/}

      {/***Table ***/}
      <Row>
        <Col lg="12">
          <ReclamationsTable reclamations={reclamations} increment={increment} />
        </Col>
      </Row>
      {/***Blog Cards***/}
      <Link to={"/addReclamation"}>
        <Button className="btn" outline color="info">
          <i class="bi bi-plus"></i>Add Reclamation
        </Button>
      </Link>
    </div>
  );
};

export default ReclamationsPage;
