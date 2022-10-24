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

const EventForm = () => {
  const [options, setoptions] = useState(["FOOD", "MUSIC", "SPORT"]);

  const Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      owner: "",
      eventDate: "",
      type: "",
    },
    onSubmit: (values) => {
      axios.post("http://localhost:8051/events/add", values).then((res) => {
        if (res.data) {
          Navigate("/events");
        }
      });
    },
    validateOnChange: false,
    validateOnBlur: false,
  });
  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Add Event
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
                <Label for="ownerId">owner</Label>
                <Input
                  id="examplePassword"
                  name="owner"
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.owner}
                />
              </FormGroup>
              <FormGroup>
                <Label for="date">Date</Label>
                <Input
                  id="date"
                  name="eventDate"
                  type="date"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.eventDate.toString()}
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
                    {options.map((opt, index) => (
                      <option key={index} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </Input>
                }
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  type="textarea"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
              </FormGroup>

              <Button className="btn" outline color="info" type="submit">
                Add Event
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default EventForm;
