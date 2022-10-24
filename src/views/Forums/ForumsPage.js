import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";
import ForumsTable from "../../components/dashboard/ForumsTable";

const ForumsPage = () => {
  const [selectedUser, setSelectedUser] = useState("ALL");
  const [selectedType, setSelectedType] = useState("ALL");
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const config = {
      headers: {
        Authorization:
          `Bearer ` + window.localStorage.getItem("token").slice(1, -1),
      },
    };
    axios.get(`http://localhost:8051/api/users`, config).then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);
  const search = () => {
    const config = {
      headers: {
        Authorization:
          `Bearer ` + window.localStorage.getItem("token").slice(1, -1),
      },
    };
    if (selectedTitle == "") {
      getForums();
    }

    if (selectedUser == "ALL" && selectedType == "ALL") {
      axios
        .get(
          `http://localhost:8051/forums/search?title=${selectedTitle}`,
          config
        )
        .then((res) => {
          if (res.data) {
            setForums(res.data);
          }
        });
    } else if (selectedUser == "ALL" && selectedType != "ALL") {
      axios
        .get(
          `http://localhost:8051/forums/search?title=${selectedTitle}&type=${selectedType}`,
          config
        )
        .then((res) => {
          if (res.data) {
            setForums(res.data);
          }
        });
    } else if (selectedType == "ALL" && selectedUser != "ALL") {
      axios
        .get(
          `http://localhost:8051/forums/search?title=${selectedTitle}&userName=${selectedUser}`,
          config
        )
        .then((res) => {
          if (res.data) {
            setForums(res.data);
          }
        });
    }

    if (selectedType != "ALL" && selectedUser != "ALL") {
      axios
        .get(
          `http://localhost:8051/forums/search?title=${selectedTitle}&userName=${selectedUser}&type=${selectedType}`,
          config
        )
        .then((res) => {
          if (res.data) {
            setForums(res.data);
          }
        });
    }
  };

  const [options, setoptions] = useState([
    {
      id: "ALL",
      title: "ALL",
    },
    {
      id: "SPORT",
      title: "SPORT",
    },
    {
      id: "MUSIC",
      title: "MUSIC",
    },
    {
      id: "EDUCATION",
      title: "EDUCATION",
    },
  ]);

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
    getForums();
    setDeleted(deleted + 1);
  };

  useEffect(() => {
    getForums();
  }, []);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Filter</CardTitle>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              onChange={(e) => setSelectedTitle(e.target.value)}
              type="text"
              id="title"
              name="title"
            />
          </FormGroup>
          <FormGroup>
            <Label for="type">Type</Label>
            {
              <Input
                id="type"
                name="type"
                type="select"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {options.map((forum, index) => (
                  <option key={index} value={forum.id}>
                    {forum.title}
                  </option>
                ))}
              </Input>
            }
          </FormGroup>
          <FormGroup>
            <Label for="type">User</Label>
            {
              <Input
                id="type"
                name="type"
                type="select"
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
              >
                <option value="ALL">ALL</option>
                {users.map((el, index) => (
                  <option key={index} value={el.id}>
                    {el.userName}
                  </option>
                ))}
              </Input>
            }
          </FormGroup>
          <Button onClick={() => search()} className="btn" outline color="info">
            <i className="bi bi-plus"></i>submit
          </Button>
        </CardBody>
      </Card>
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
