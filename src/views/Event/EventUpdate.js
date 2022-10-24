import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

const EventUpdate = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const [options, setoptions] = useState(["FOOD", "MUSIC", "SPORT"]);

  const [Event, setEvent] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8051/events/${id}`).then((res) => {
      setEvent(res.data);
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      title: Event.title,
      description: Event.description,
      owner: Event.owner,
      type: Event.type,
      eventDate: Event.eventDate,
    },
    onSubmit: (values) => {
      axios
        .put(`http://localhost:8051/events/update/${id}`, values)
        .then((res) => {
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
            Update Event
          </CardTitle>
          <CardBody>
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder={Event.title}
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.initialValues.title}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">owner</Label>
                <Input
                  id="owner"
                  name="owner"
                  placeholder={Event.owner}
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.owner}
                />
              </FormGroup>
              <FormGroup>
                <Label for="eventDate">Date</Label>
                <Input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.eventDate?.toString()}
                />
              </FormGroup>
              <FormGroup>
                <Label for="type">Event</Label>
                <Input
                  id="type"
                  name="type"
                  type="select"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.type}
                >
                  {options.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder={Event.description}
                  type="textarea"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
              </FormGroup>

              <Button className="btn" outline color="info" type="submit">
                Update Event
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default EventUpdate;
