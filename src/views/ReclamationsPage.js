import { Button, Col, Row } from "reactstrap";
import ProjectTables from "../components/dashboard/ProjectTable";

import { useEffect, useState } from "react";
//import reclamationServices from "../services/Reclamation.services";
import axios from "axios";
import ReclamationsTable from "../components/dashboard/ReclamationsTable";
import { Link } from "react-router-dom";

const ReclamationsPage = () => {
  return (
    <div>
      {/***Top Cards***/}

      {/***Table ***/}
      <Row>
        <Col lg="12">
          <ProjectTables />
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
