import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const Forums = () => {
  const [options, setoptions] = useState([
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

  const Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      topic: "",
      type: "SPORT",
      date:""
    },
    onSubmit: (values) => {
      const config = {
        headers: {
          Authorization:
            `Bearer ` + window.localStorage.getItem("token").slice(1, -1),
        },
      };
      axios.post("http://localhost:8051/forums", values, config).then((res) => {
        if (res.data) {
          Navigate("/forums");
        }
      });
    },
    validateOnChange: false,
    validateOnBlur: false,
  });
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Add Forum
          </CardTitle>
          <CardBody>
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
              </FormGroup>

              <FormGroup>
                <Label for="type">Type</Label>
                {
                  <Input
                    id="type"
                    name="type"
                    type="select"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.type}
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
                <Label for="topic">Topic</Label>

                <Input
                  type="textarea"
                  id="topic"
                  name="topic"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.topic}
                />
              </FormGroup>
              <FormGroup>
                <Label for="date">date</Label>

                <Input
                  type="date"
                  id="date"
                  name="date"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.date}
                />
              </FormGroup>
              <Button className="btn" outline color="info" type="submit">
                Add Forum
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forums;
