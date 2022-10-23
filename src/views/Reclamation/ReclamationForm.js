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

const ReclamationForm = () => {
  const [options, setoptions] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8051/events/all").then((res) => {
      setoptions(res.data);
    });
  }, []);
  const Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      ownerId: "",
      eventId: "",
    },
    onSubmit: (values) => {
      axios
        .post("http://localhost:8051/reclamations/add", values)
        .then((res) => {
          if (res.data) {
            Navigate("/reclamations");
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
            Add Reclamation
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
                <Label for="ownerId">ownerId</Label>
                <Input
                  id="examplePassword"
                  name="ownerId"
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.ownerId}
                />
              </FormGroup>
              <FormGroup>
                <Label for="eventId">Event</Label>
                {
                  <Input
                    id="eventId"
                    name="eventId"
                    type="select"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.eventId}
                  >
                    {options.map((event, index) => (
                      <option key={index} value={event.id}>
                        {event.title}
                      </option>
                    ))}
                  </Input>
                }
              </FormGroup>
              <FormGroup>
                <Label for="content">Content</Label>
                <Input
                  id="content"
                  name="content"
                  type="textarea"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.content}
                />
              </FormGroup>

              <Button className="btn" outline color="info" type="submit">
                Add Reclamation
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ReclamationForm;
