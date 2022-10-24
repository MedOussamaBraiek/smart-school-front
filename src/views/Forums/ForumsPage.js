import { Button, Col, Row } from "reactstrap";
import { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";
import ForumsTable from "../../components/dashboard/ForumsTable";

const ForumsPage = () => {
  const getForums = () => {
    const config = {
      headers: {
        Authorization:
          `Bearer ` + window.localStorage.getItem("token").slice(1, -1),
      },
    };
    axios.get(`http://localhost:8051/forums`, config).then((res) => {
      setForums(res.data);
    });
  };
  const [forums, setForums] = useState([]);
  const [deleted, setDeleted] = useState(0);
  const increment = () => {
    console.log("firstName");
    getForums();
    setDeleted(deleted + 1);
  };

  useEffect(() => {
    getForums();
  }, []);

  return (
    <div>
      <Row>
        <Col lg="12">
          <ForumsTable forums={forums} increment={increment} />
        </Col>
      </Row>

      <Link to={"/addForums"}>
        <Button className="btn" outline color="info">
          <i className="bi bi-plus"></i>Add Forum
        </Button>
      </Link>
    </div>
  );
};

export default ForumsPage;
